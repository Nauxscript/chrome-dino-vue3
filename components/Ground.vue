<script lang="ts" setup></script>

<template>
  <div class="ground">
    <div class="inner-pic" />
  </div>
</template>

<style scoped>
.ground {
  height: 20px;
  width: 100%;
  overflow: hidden;
  margin: -25px;
}

.inner-pic {
  width: 4800px;
  height: 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACWAAAAAYAQMAAABEalRSAAAABlBMVEX///9TU1NYzE1OAAAAAXRSTlMAQObYZgAAAOtJREFUeF7tljEKwzAMRb/J0CWgI/QKOYAh1+pUcjQfpUfw2MFEHVyDQSQmQUNM9AYNcobnh4egU+YVqhAvZSpgsfolPnSv5d0nz3vHslgUdK81RLzyvHcsi+WBNxQh4Ln8pw4Wi7skAg9mXgHMrEACXJnbHIllsbqGAtwXhnYswzFzwPWxWEPc2CexoobkHM4ZpD6s2loWiyIEEwCChIomMiMEHqgP573C9eHkc5VLWh3XsljnGVoLWVl+31bp38piTVVuihtPOAm9kcRLbrFjEvqwamtZLK5eI8sSan9rXEK0LcNFrY5oWawf59S7YSRD7eMAAAAASUVORK5CYII=);
  background-repeat: repeat-x;
  animation: ground-move 6s linear 0s infinite;
  /* 开启GPU加速 */
  transform: translate3d(0, 0, 0);
}

@keyframes ground-move {
  100% {
    transform: translateX(-50%);
  }
}
</style>
