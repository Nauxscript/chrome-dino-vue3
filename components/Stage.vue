<script lang="ts" setup>
const stageRef = ref<HTMLDivElement>()

function handlePause() {
  if (!stageRef.value)
    return
  stageRef.value.classList.add('pause')
}

function handlePlay() {
  if (!stageRef.value)
    return
  stageRef.value.classList.remove('pause')
}
</script>

<template>
  <div ref="stageRef" class="stage">
    <Sky />
    <Dino />
    <Ground />
    <!-- <button @click="handlePause">
      stop
    </button>
    <button @click="handlePlay">
      run
    </button> -->
  </div>
</template>

<style>
.pause div {
  animation-play-state: paused !important;
  transition: none !important;
}
</style>
