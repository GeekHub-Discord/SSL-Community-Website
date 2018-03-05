'use_strict';
const quotes = require('./quotes.js');
const discord = require('discord.js');
const client = new discord.Client();
client.login('NDE5OTI0NDgyNTEwMTU5ODcy.DX3NFQ.Znvv6dEqTCy4tAZk93m-AEI4fcM')

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
        this.username = m.user.username + '#' + m.user.discriminator
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

async function MemberArrayGenerator(members, blacklist, callback) {
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



async function get_members(roles, callback) {
    let staff = {};
    let blacklist = [];

    let owners_m = roles.find('id', '238273397308522506').members.array();
    let owners = await SingleMemberArrayGenerator(owners_m, blacklist)

    let management_m = roles.find('id', '241232114350161920').members.array();
    let management = await MemberArrayGenerator(management_m, blacklist)

    let mods_m = roles.find('id', '241232336161734656').members.array();
    let moderation = await MemberArrayGenerator(mods_m, blacklist)

    staff.moderation = moderation;
    staff.management = management;
    staff.owners = owners;
    callback(staff)
}

const staff = module.exports = function(callback) {
    const roles = client.guilds.find('id', '194533269180514305').roles;
    get_members(roles, async (staff) => {
        callback(staff)
    })

}


client.on('ready', () => {
    staff((staff) => console.log(staff));
});
