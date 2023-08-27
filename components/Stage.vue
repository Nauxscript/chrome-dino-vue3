<script lang="ts" setup>
enum GameState {
  PAUSE = 'PAUSE',
  UNSTART = 'UNSTART',
  FAIL = 'FAIL',
  RUNNING = 'RUNNING',
}
const stageRef = ref<HTMLDivElement>()
const gameState = ref<GameState>(GameState.UNSTART)
function handlePause() {
  if (!stageRef.value)
    return
  stageRef.value.classList.add('pause')
  gameState.value = GameState.PAUSE
}

function handleStart() {
  handleRestart()
  stageRef.value!.classList.remove('unstart')
}

function handleRestart() {
  if (!stageRef.value)
    return
  stageRef.value.classList.remove('pause')
  gameState.value = GameState.RUNNING
}

function handleSpaceDown(event: KeyboardEvent) {
  if (event.code === 'Space') {
    // eslint-disable-next-line no-console
    console.log('space down')
    if (!stageRef.value)
      return
    if (stageRef.value.classList.contains('unstart'))
      handleStart()
    // document.removeEventListener('keydown', handleSpaceDown)
    // for test
    // setTimeout(() => {
    //   handlePause()
    // }, 5000)
  }
}

function addSpaceDownListener() {
  document.addEventListener('keydown', handleSpaceDown)
}

function removeSpaceDownListener() {
  document.removeEventListener('keydown', handleSpaceDown)
}

function addPageVisibleListener() {
  if (typeof document.hidden === 'undefined')
    document.addEventListener('visibilitychange', onVisibilityChange)
}

function removePageVisibleListener() {
  if (typeof document.hidden === 'undefined')
    return
  document.removeEventListener('visibilitychange', onVisibilityChange)
}

function onVisibilityChange() {
  if (gameState.value === GameState.UNSTART)
    return
  if (document.hidden) {
    handlePause()
  }
  else {
    setTimeout(() => {
      handleStart()
    }, 200)
  }
}

onMounted(() => {
  addPageVisibleListener()
  addSpaceDownListener()
})

onUnmounted(() => {
  removePageVisibleListener()
  removeSpaceDownListener()
})
</script>

<template>
  <div ref="stageRef" class="stage pause unstart">
    <div class="modal">
      <div class="tip" />
      <button @click="handleRestart" />
    </div>
    <Sky />
    <Dino />
    <Ground />
  </div>
</template>

<style scoped>
.stage {
  position: relative;
}
.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 888;
}

.fail .pause {
  display: flex;
}

.unstart .modal {
  display: none;
}

.unstart .ground {
  width: 128px;
  overflow: hidden;
}

.tip {
  width: 382px;
  height: 24px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAAAwAQMAAAAsMYMXAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAPdJREFUeF7tkzFqAzEQRb9RsZ11BF0jlXSlpDdYOcFeSeCLKLeYQujHwxRrtF0gUoqo+AwfPRh4DDZByKk7tkv3rNszWhLHKv7BhtObALxF3LP44vRvRoLPTa4avoS8BLA+PSNFzyqAq/wDwNZxrxKBxq5axLGRS4EkgP6A6rrhy6ZVQLoiZKpfRJ8NqCp+HbCZpAcromNNHTfoeWS7hwnA//tROIpm17lddCbFgMAylGSZANiRhL1ou2treo0/ErB5AtAwbr8e8HK28wpwP8rmpwCv23+cPZhvK8GOCUD4lMHRALiOw8O9TAAcB2C8B7zDSvPw+8A3sQJ/MSdPGzIAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: 0 -24px;
  margin-bottom: 20px
}

button {
  width: 72px;
  height: 64px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABAAgMAAADE0Nm5AAAACVBMVEX////39/dTU1OabbyfAAAAAXRSTlMAQObYZgAAAGNJREFUeF7d1CEOwDAMQ9GS3q/ExPcz8Sm3gYBWVRo0afvwSQl0ax1To22JntKWupfGjriSXiLViCXCmXBHCykJTxaYEeIQGcVrHYklcoX8YYpSUggzcpBTiv5JtQWorUltmS6s4ZKtz2GgjAAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
}

.unstart {

}
</style>

<style>
.pause div {
  animation-play-state: paused !important;
  transition: none !important;
}
</style>
