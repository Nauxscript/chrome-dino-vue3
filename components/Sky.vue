<script lang="ts" setup>
import Cloud from './Cloud.vue'

const cloud_1 = ref<InstanceType<typeof Cloud>>()
const cloud_2 = ref<InstanceType<typeof Cloud>>()
const cloud_3 = ref<InstanceType<typeof Cloud>>()
const cloud_4 = ref<InstanceType<typeof Cloud>>()

function delay(fn: () => void, sec = getRamdomByRange()) {
  const timer = setTimeout(() => {
    fn()
    clearTimeout(timer)
  }, sec * 1000)
}

function getRamdomByRange(min = 2, max = 6) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function checkCloud() {
  requestAnimationFrame(() => {
    const arr = [cloud_1.value, cloud_2.value, cloud_3.value, cloud_4.value]
    let hasStop = false
    for (let i = 0; i < arr.length; i++) {
      const cloud = arr[i]
      if (cloud?.isStop()) {
        hasStop = true
        cloud.restart()
        delay(checkCloud)
        break
      }
    }

    if (!hasStop)
      checkCloud()
  })
}

onMounted(() => {
  checkCloud()
})
</script>

<template>
  <div class="sky">
    <Cloud ref="cloud_1" />
    <Cloud ref="cloud_2" />
    <Cloud ref="cloud_3" />
    <Cloud ref="cloud_4" />
  </div>
</template>

<style scoped>
.sky {
  height: 100px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}
</style>
