'use_strict';
const quotes = require('./quotes.js');
const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');
client.login(config.token)

function get_color(role) {
    switch (role) {
        case 'OVNERS':
            r = 'is-danger';
            break;
        case 'Administrator':
            r = 'is-info';
            break;
        case 'Manager':
            r = 'is-success';
            break;
        case 'Supervisor':
            r = 'is-warning';
            break;
        case 'Moderator':
            r = 'is-success';
            break;
        case 'Jnr Moderator':
            r = 'is-primary';
            break;
        case 'new role':
            r = ''
            break;
    }
    return r
}

class Member {
    constructor(m) {
        this.id = m.id;
        this.name = m.displayName;
        this.url = m.user.avatarURL;
        this.tag = m.highestRole.name;
        this.color = get_color(m.highestRole.name)
        this.username = m.user.tag
        this.quote = null
    }
}

async function SingleMemberArrayGenerator(members, blacklist) {
    let container = [];
    for (let i=0; i < members.length; i++) {
        let m = members[i];
        if (!blacklist.includes(m.id)) {
            let item = new Member(m);
            item.quote = await quotes.get(item.id);
            container.push(item);
            blacklist.push(m.id);
        }
    }
    return container
}

async function MemberArrayGenerator(members, blacklist) {
    let tmp = [];
    let container = [];
    for (let i=0; i < members.length; i++) {
        let m = members[i];
        if (!blacklist.includes(m.id)) {
            let item = new Member(m);
            item.quote = await quotes.get(item.id)
            tmp.push(item);
            blacklist.push(m.id);
            if (tmp.length === 2) {
                container.push(tmp);
                tmp = [];
            }
        }
    }
    return container
}



async function get_members(roles) {
    let staff = {};
    let blacklist = [];

    let owners_m = roles.get('238273397308522506').members.array();
    let owners = await SingleMemberArrayGenerator(owners_m, blacklist)

    let management_m = roles.get('241232114350161920').members.array();
    let management = await MemberArrayGenerator(management_m, blacklist)

    let mods_m = roles.get('241232336161734656').members.array();
    let moderation = await MemberArrayGenerator(mods_m, blacklist)

    staff.moderation = moderation;
    staff.management = management;
    staff.owners = owners;
    return staff
}

const staff = module.exports = async function() {
    const roles = client.guilds.get('194533269180514305').roles;
    return await get_members(roles)
}


