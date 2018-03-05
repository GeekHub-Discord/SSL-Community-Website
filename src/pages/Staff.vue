<template>
    <div>
        <section class="hero is-fullheight is-dark header-image">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-1">
                        <strong>SSL Community</strong>
                    </h1>
                    <h2 class="subtitle is-4">
                        <span>Our amazing staff team</span>
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
          <div class="container has-text-centered box">
            <div class="heading">
              <h1 class="title">Owners</h1>
              <h2 class="subtitle">Keeping the ball rolling!</h2>
            <br/>
            </div>
            <div class="columns">
              <div class="column" v-for="user in owners" :key="user.id">
                <img width="125px" height="125px" class="img-circle" :src="user.url">
                <br/>
                <span class="tag is-small" :class='[user.color]'>{{user.tag}}</span>
                <br/>
                <strong>{{user.name}}</strong>
                <small>{{user.username}}</small>
                <p>
                   {{user.quote}}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container has-text-centered box">
            <div class="heading">
              <h1 class="title">Management</h1>
              <h2 class="subtitle">The behind-the-scenes guys</h2>
            <br/>
            </div>
            <div class="columns" v-for='users in management' :key='users.length'>
              <div class="column" v-for='user in users' :key='user.id'>
                <div class="box">
                  <article class="media">
                    <div class="media-left">
                      <figure class="image is-64x64"><img class="img-circle" :src="user.url"></figure>
                    </div>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>{{user.name}}</strong>
                          <small>{{user.username}}</small>
                          <span :class="[user.color]" class="tag is-small">{{user.tag}}</span>
                          <br/>
                          {{user.quote}}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container has-text-centered box">
            <div class="heading">
              <h1 class="title">Moderation</h1>
              <h2 class="subtitle">The front line of defense</h2>
            <br/>
            </div>
            <div class="columns" v-for='users in moderation' :key='users.length'>
              <div class="column" v-for='user in users' :key='user.id'>
                <div class="box">
                  <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64"><img class="img-circle" :src="user.url"></figure>
                    </div>
                    <div class="media-content">
                      <div class="content">
                        <p>
                        <strong>{{ user.name }}</strong>
                        <small>{{ user.username }}</small>
                        <span class="tag is-small" :class='[user.color]'>{{ user.tag }}</span>
                          <br/>
                          {{user.quote}}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
    <div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Staff',
  metaInfo: {
    title: 'Staff'
  },
  data () {
    return {
      moderation: null,
      management: null,
      owners: null,
      error: null
    }
  },
  mounted () {
    axios({
      method: 'GET',
      url: 'https://sslapi.dixionary.com/get'
    }).then(res => {
      this.moderation = res.data.moderation
      this.management = res.data.management
      this.owners = res.data.owners
      console.log(res.data)
    }, error => {
      console.error(error.data)
      this.error = 'A trained team of slave churros is fixing this please wait'
    })
  }
}
</script>
