<script lang="ts" setup>
import Cloud from './Cloud.vue'

const cloud_1 = ref<InstanceType<typeof Cloud>>()

function checkCloud() {
  requestAnimationFrame(() => {
    if (cloud_1.value?.isStop())
      cloud_1.value.restart()

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
  </div>
</template>

<style scoped>
.sky {
  height: 120px;
  margin-bottom: -120px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
