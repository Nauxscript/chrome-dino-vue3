<script lang="ts" setup>
const cloud = ref<HTMLDivElement>()

const restart = useThrottleFn(() => {
  // eslint-disable-next-line no-console
  console.log('restart')
  if (!cloud.value)
    return

  reloadTop()
  if (cloud.value.classList.contains('move'))
    cloud.value.className = 'cloud move-again'

  else
    cloud.value.className = 'cloud move'
})

function reloadTop() {
  cloud.value!.style.top = `${Math.floor(Math.random() * 71)}px`
}

function isStop() {
  if (!cloud.value)
    return false

  const bp = getComputedStyle(cloud.value).getPropertyValue('background-position')
  if (bp) {
    const num = bp.match(/(?<=calc\().*(?=%)/)?.[0]
    if (num && Number(num) === 0)
      return true
  }

  return false
}

defineExpose({
  restart,
  isStop,
})
</script>

<template>
  <div ref="cloud" class="cloud move" />
</template>

<style scoped>
.cloud {
  position: absolute;
  width: 100%;
  height: 28px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAcAgMAAACR2TCnAAAABlBMVEUAAADa2to4qB92AAAAAXRSTlMAQObYZgAAAFFJREFUeF6VzTEKAFEIxNA03m+a3P8q2wqi/E35BIdeGXq3q5hnrwBs7mC5vIZzu/nnqI319vRtqHB731blwSHjx+22+Rdn94rzQq0ugKPVlz5onyJcGdu0NgAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;

}

.move {
  animation: move 14 linear;
  animation-fill-mode: forwards;
}

.move-again {
  animation: move-again 14s linear;
  animation-fill-mode: forwards;
}

@keyframes move {
   0% {
    background-position: calc(100% + 92px) 0;
   }

   100% {
    background-position: -92px 0;
   }
}

@keyframes move-again {
   0% {
    background-position: calc(100% + 92px) 0;
   }

   100% {
    background-position: -92px 0;
   }
}
</style>
