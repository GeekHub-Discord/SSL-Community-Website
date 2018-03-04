<template>
  <nav class="nav is-transparent" style="width: 100%; position: fixed; border-bottom: 1px #ededed solid; z-index: 100; transition: 0.3s; box-shadow: 0 -5px 8px #888888">
      <div class="container">
          <div class="nav-left">
              <router-link class="nav-item is-brand is-active title is-5" to="/">
                  <img class=""
                       src="./../assets/img/logo.jpg"
                       style="border-radius: 50%; display: block; height: auto; width: ;">
                  &nbsp;&nbsp;<strong>SSL Community</strong>
              </router-link>
          </div>
          <div class="nav-center">
              <a class="nav-item" href="https://twitter.com/ScammerSubSSL">
                      <span class="icon">
                          <i class="fa fa-twitter"></i>
                      </span>
              </a>
              <a class="nav-item" href="https://www.discord.gg/ssl">
                      <span class="icon is-medium">
                          <i class="fa icon-discord" style="padding-top: 3px;"></i>
                      </span>
              </a>
              <a class="nav-item" href="https://www.youtube.com/channel/UCNEErThrXQh4azMi-Dfv_Tw">
                      <span class="icon">
                          <i class="fa fa-youtube-play"></i>
                      </span>
              </a>
          </div>
          <span class="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
          </span>
          <div class="nav-right nav-menu">
              <router-link class="nav-item" to="/" exact>
                  Home
              </router-link>
              <router-link class="nav-item" to="/staff" exact>
                  Staff Team
              </router-link>
              <router-link class="nav-item" to="/guidelines" exact>
                  Guidelines
              </router-link>
              <router-link class="nav-item" to="/faq" exact>
                  FAQ
              </router-link>
              <span class="nav-item">
                      <a class="button is-info is-outlined is-inverted" href="https://www.discord.gg/ssl">
                          <span class="icon is-small">
                              <i class="fa fa-server" aria-hidden="true"></i>
                          </span>
                          <span>Join Us!</span>
                      </a>
                  </span>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>
