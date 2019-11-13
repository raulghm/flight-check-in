module.exports = {
  pwa: {
    name: 'Checkin App',
    themeColor: '#212529',
    msTileColor: '#212529',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#212529',
    iconPaths: {
      favicon16: 'img/favicons/favicon-16x16.png',
      favicon32: 'img/favicons/favicon-32x32.png',
      appleTouchIcon: 'img/favicons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'favicons/ms-tile-150x150.png'
    },
    workboxOptions: {
      skipWaiting: true
    }
  }
}
