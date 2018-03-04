<template>
  <div id="app">
      <NavMenu></NavMenu>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo () {
    return {
      titleTemplate: '%s • SSL Community',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: require('@/assets/img/android-icon-192x192.png') },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: require('@/assets/img/android-icon-96x96.png') },
        { rel: 'apple-touch-icon', sizes: '57x57', href: require('@/assets/img/apple-icon-57x57.png') },
        { rel: 'apple-touch-icon', sizes: '60x60', href: require('@/assets/img/apple-icon-60x60.png') },
        { rel: 'apple-touch-icon', sizes: '72x72', href: require('@/assets/img/apple-icon-72x72.png') },
        { rel: 'apple-touch-icon', sizes: '76x76', href: require('@/assets/img/apple-icon-76x76.png') },
        { rel: 'apple-touch-icon', sizes: '114x114', href: require('@/assets/img/apple-icon-114x114.png') },
        { rel: 'apple-touch-icon', sizes: '120x120', href: require('@/assets/img/apple-icon-120x120.png') },
        { rel: 'apple-touch-icon', sizes: '144x144', href: require('@/assets/img/apple-icon-144x144.png') },
        { rel: 'apple-touch-icon', sizes: '152x152', href: require('@/assets/img/apple-icon-152x152.png') },
        { rel: 'apple-touch-icon', sizes: '180x180', href: require('@/assets/img/apple-icon-180x180.png') },
        { rel: 'stylesheet', href: require('@/assets/css/bulma.css') },
        { rel: 'stylesheet', href: require('@/assets/css/hero.css') },
        { rel: 'stylesheet', href: require('@/assets/css/discord/icon-discord.css') },
        { rel: 'stylesheet', href: require('@/assets/css/font-mfizz.css') }
      ],
      noscript: [
        { innerHTML: 'This website requires JavaScript Madarchod' }
      ]
    }
  }
}
</script>
