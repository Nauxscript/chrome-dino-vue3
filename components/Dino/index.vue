<script lang="ts" setup>

</script>

<template>
  <!-- <div class="dino" /> -->
  <img id="1x-obstacle-large" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAMAAACJUtIoAAAACVBMVEX////39/dTU1OabbyfAAAAAXRSTlMAQObYZgAAAXhJREFUeF7t2NGqAjEMANGM///RlwvaYQndULuFPJgHUYaEI6IPhgNAOA8HZ+3U6384F5y1U6YzAZTWG+dZamnFEstBFtCKJZSHWMADLJ18z+JqpQeLdKoDC8siC5iFCQs4znIxB5B1t6F3lQWkL4N0JsF+u6GXJdbI+FKW+yWr3lhgCZ2VSag3Nlk/FnRkIRbasLCO0oulikMsvmGpeiGLZ1jOMgtIP5bODivYYUXEIVbwFCt4khVssRgsgidZwQaLd2A8m7MYLGTl4KeQQs2y4kMAMGGlmQViDIb5O6xZnnLD485dIBzqDSE1yyFdL4Iqu4XJqUUWl/NVAFSZq1P6a5aqbAUM2epQbBioWflUBABiUyhYyZoCBev8XyMAObDNOhOAfiyxmHU0YNlldGAphGjFCjA3YkUn1o/1Y3EkZFZ5isCC6NUgwDBn1RuXH96doNfAhDXfsIyJ2AnolcCVhay0kcYbW0HvCO8OwIcJ3GzkORpkFuUP/1Ec8FW1qJkAAAAASUVORK5CYII=" jstcache="0">
  <img id="1x-obstacle-small" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAjCAMAAABRlI+PAAAADFBMVEX////////39/dTU1PhglcSAAAAAXRSTlMAQObYZgAAAPNJREFUeF7tlkEKwzAMBLXr//+5iQhU7gRRQkyhZI+DhwH74jhmO+oIJBVwURljuAXagG5QqkSgBLqg3JnxJ1Cb8SmQ3o6gpO85owGlOB4m2BNKJ11BSd01owGlOHkcIAuHkz6UNpPKgozPM54dADHjJuNhZiJxdQCQgZJeBczgCAAy3yhPJvcnmdC9mZwBIsQMFV5AkzHBNknFgcKM+oyDIFcfCAoy03m+jSMIcmoVZkKqSjr1fghyahRmoKRUHYLiSI1SMlCq5CDgX6BXmKkfn+oQ0KEyyrzoy8GbXJ9xrM/YjhUZgl9nnsyTCe9rgSRdV15CwRcIEu8GGQAAAABJRU5ErkJggg==" jstcache="0">
  <img id="1x-cloud" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAOCAQAAAD6HOaKAAAAU0lEQVR4XrWSsQkAQAgD3X9El/ELixQpJHCfdApnUCtXz7o49cgagaGPaq4rIwAP9s/C7R7UX3inJ0BDb6qWDC7ScOR/QWjRlFizuPwLtTLj+qkH6DjD2wLtikUAAAAASUVORK5CYII=" jstcache="0">
  <img id="1x-text" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAAYAgMAAADWncTDAAAABlBMVEX///9TU1NYzE1OAAAAAXRSTlMAQObYZgAAAO1JREFUeF690TFqxUAQA1BNoRtk7jMu3E9Auv9Vgr/5A863Y9zEhVhkHmhZsEGkw4Lppmllh1tcLHx+aRj2YnEDuQFvcQW+EoZY0TQLCZbEVxRxAvY+i8ikW0C0bwFdbictG2zvu/4EcCuBF0B23IBsQHZBYgm1n86BN+BmyV5rQFyCJAiDJSTfgBV9BbjvXdzIcKchpMOYd3gO/jvCeuUGFALg95J0/SrtQlrzz+sAjDwCIQsbWAdgbqrQpKYRjmPuAfU5dMC+c0rxOTiO+T6ZlK4pbcDLI1DIRaf3GxDGALkQHnD+cGhMKeox+AEOL3mLO7TQZgAAAABJRU5ErkJggg==" jstcache="0">
  <img id="1x-horizon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAAMAgMAAAAPCKxBAAAABlBMVEX///9TU1NYzE1OAAAAAXRSTlMAQObYZgAAALJJREFUeF7t1EEKAyEMhtEvMNm7sPfJEVyY+1+ltLgYAsrQCtWhbxEhQvgxIJtSZypxa/WGshgzKdbq/UihMFMlt3o/CspEYoihIMaAb6mCvM6C+BTAeyo+wN4yykV/6pVfkdLpVyI1hh7GJ6QunUoLEQlQglNP2nkQkeF8+ei9cLxMue1qxVRfk1Ej0s6AEGWfVOk0QUtnK5Xo0Lac6wpdtnQqB6VxomPaz+dgF1PaqqmeWJlz1jYUaSIAAAAASUVORK5CYII=" jstcache="0">
  <img id="1x-trex" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAAvAgMAAABiRrxWAAAADFBMVEX///9TU1P39/f///+TS9URAAAAAXRSTlMAQObYZgAAAPpJREFUeF7d0jFKRkEMhdGLMM307itNLALyVmHvJuzTDMjdn72E95PGFEZSmeoU4YMMgxhskvQec8YSVFX1NhGcS5ywtbmC8khcZeKq+ZWJ4F8Sr2+ZCErjkJFEfcjAc/6/BMlfcz6xHdhRthYzIZhIHMcTVY1scUUiAphK8CMSPUbieTBhvD9Lj0vyV4wklEGzHpciKGOJoBp7XDcFs4kWxxM7Ey3iZ8JbzASAvMS7XLOJHTTvEkEZSeQl7DMuwVyCasqK5+XzQRYLUJlMbPXjFcn3m8eKBSjWZMJwvGIOvViAzCbUj1VEDoqFOEQGE3SyInJQLOQMJL4B7enP1UbLXJQAAAAASUVORK5CYII=" jstcache="0">
  <img id="1x-restart" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAQAAADQmBIFAAAAZklEQVR4Xu3WMQoAIAxDUe/Y+58jYwV1CwQJWQT5o/DAoaWjV2i/LRym/A5FjEsR41LPQchByEHwIVAEC4gZpghmSDP8egXpr/hQZaAKQFQe+pBOQAblDC336qrlPpSg0MEjInbWTLFFmwc8TpTAAAAAAElFTkSuQmCC" jstcache="0">

  <img id="2x-obstacle-large" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABkBAMAAADOLxDzAAAACVBMVEX///9TU1P39/ea77PDAAAAAXRSTlMAQObYZgAAAa9JREFUeF7t1lFqhEAQBuG+wl6h7n/IEEgKlma2R8Vk1O4HWSh++Xzb8AKA8E4IXrlYnsXr+zgh1OdifZbBdFIApdWiWShtVhmQ+jAWMLFollCOsTzgxiyd7GcR01/YLOZf1SwsN2EBozBgAU9l4TAHkDWzCNjKApZlybO4z+GtFwu9bGKZl2TJSyxDxaoX8yyha7LGZRDqxR+ymtUsaNaWhTM+s5rl05tjNUsVz2Kxi6XqhSy4NcvbzgLSnzzvjqzgCCsiHsXSdZwVPIAVHGIhi+ABrOAAi5+Avy7HQhaycpAVpDDBsuKDAOBCrHzjQHgYhl9YsHxf+vRrsQxjVVAsDNMsF6uydBUhq+wWBq/ayCKWZekqA6DKPPEq/ZMsYllWdgGDoMdaLAzMsFwszgoAi1pDxUrWFKhZLlZnpXIkAORAs7YEoFmzQSxmt2NWs+xOP7GapRCiZjUrwFyymhX/xmpWs5rVrGZxQphmsT6LAAsvdgcBhmmWi9VZvN7+x+4K2WtgwBosFmZZvIh9IXsl8M5C1mCxLsvTfizoxfDTAfgdAIPFlVhxRqgHlrVZX9y44aEEvVqmAAAAAElFTkSuQmCC" jstcache="0">
  <img id="2x-obstacle-small" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAABGBAMAAAByJ2Z/AAAADFBMVEX///9TU1P39/f///+TS9URAAAAAXRSTlMAQObYZgAAARZJREFUeF7t2NEJwzAQg2GtcCtoBe2/W6k5aK8qLgR6ToL9KPzzgR+NPCRRjg2ScjiQ9DKMCE4HRYQOJB2MJyXyQWPQgeSCDD8HnYHh10F6NbJk9KyMwpJ+hkEfnoSyGX1NUmAOqVjSz4zrNgwhm9FbMmEyuS7DpQw/Gf5kOGEYXMgwWBobnGHQmZKsYuyKDcZk8gdmM5uJMzKbgS7I5KENgJzxxN95PUMfAKi8gCXO6BQM4cM4ysEZwplyfxFDErAhmWniDKT3pJEpD2RDMpPEGUt6mOIQ1XFGmiXOZNLIgKUpgzH4lTgDtDIgmY0NznhSnWhk/v2ZkuONGOI2DEn0MNf7ttvMZjazmc2AJDkdJOlQ0sk8AC45t4r28J0GAAAAAElFTkSuQmCC" jstcache="0">
  <img id="2x-cloud" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAcAgMAAACR2TCnAAAABlBMVEUAAADa2to4qB92AAAAAXRSTlMAQObYZgAAAFFJREFUeF6VzTEKAFEIxNA03m+a3P8q2wqi/E35BIdeGXq3q5hnrwBs7mC5vIZzu/nnqI319vRtqHB731blwSHjx+22+Rdn94rzQq0ugKPVlz5onyJcGdu0NgAAAABJRU5ErkJggg==" jstcache="0">
  <img id="2x-text" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAAAwAQMAAAAsMYMXAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAPdJREFUeF7tkzFqAzEQRb9RsZ11BF0jlXSlpDdYOcFeSeCLKLeYQujHwxRrtF0gUoqo+AwfPRh4DDZByKk7tkv3rNszWhLHKv7BhtObALxF3LP44vRvRoLPTa4avoS8BLA+PSNFzyqAq/wDwNZxrxKBxq5axLGRS4EkgP6A6rrhy6ZVQLoiZKpfRJ8NqCp+HbCZpAcromNNHTfoeWS7hwnA//tROIpm17lddCbFgMAylGSZANiRhL1ou2treo0/ErB5AtAwbr8e8HK28wpwP8rmpwCv23+cPZhvK8GOCUD4lMHRALiOw8O9TAAcB2C8B7zDSvPw+8A3sQJ/MSdPGzIAAAAASUVORK5CYII=" jstcache="0">
  <img id="2x-horizon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACWAAAAAYAQMAAABEalRSAAAABlBMVEX///9TU1NYzE1OAAAAAXRSTlMAQObYZgAAAOtJREFUeF7tljEKwzAMRb/J0CWgI/QKOYAh1+pUcjQfpUfw2MFEHVyDQSQmQUNM9AYNcobnh4egU+YVqhAvZSpgsfolPnSv5d0nz3vHslgUdK81RLzyvHcsi+WBNxQh4Ln8pw4Wi7skAg9mXgHMrEACXJnbHIllsbqGAtwXhnYswzFzwPWxWEPc2CexoobkHM4ZpD6s2loWiyIEEwCChIomMiMEHqgP573C9eHkc5VLWh3XsljnGVoLWVl+31bp38piTVVuihtPOAm9kcRLbrFjEvqwamtZLK5eI8sSan9rXEK0LcNFrY5oWawf59S7YSRD7eMAAAAASUVORK5CYII=" jstcache="0">
  <img id="2x-trex" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhAAAABeAgMAAAAPo8UvAAAADFBMVEX///9TU1P39/f///+TS9URAAAAAXRSTlMAQObYZgAAASdJREFUeF7t1qFOBEEQRdEyGP7vGQy/hsHc/0MPSe8ylU2vKEIqqQnviRZXdI7pyUQuONda901FGAG6j8aa+6mDEUboHP01sk5EHHWEjt/UY0dk/U+Ir/cdkXUEovV1GFF/HQMR/mLWEUYYYQRrf65XRhgB2595Y80lYRjCCG7AV/IZ0FdDabgDhiKMgE+tAX01ES+ajDBCADpHZw0tRdaZCCNEGhCdNSSlQTEVYUROQGeNxxoxH2EErXU+wohdQXONqyBorDsixiB2Be01JiOM2BXQX1MRUxFGpAL6aypiMsIIJCFBtSK98fFYKd6wFDEbYUQgEYh6hTSkonbDDTAdYQTrKNd9QPWGUFwAYYRYR7U+XemGfB0ajTACWEe1Pl3thtxMhBHfOCEbEnR2KZcAAAAASUVORK5CYII=" jstcache="0">
  <img id="2x-restart" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABAAgMAAADE0Nm5AAAACVBMVEX////39/dTU1OabbyfAAAAAXRSTlMAQObYZgAAAGNJREFUeF7d1CEOwDAMQ9GS3q/ExPcz8Sm3gYBWVRo0afvwSQl0ax1To22JntKWupfGjriSXiLViCXCmXBHCykJTxaYEeIQGcVrHYklcoX8YYpSUggzcpBTiv5JtQWorUltmS6s4ZKtz2GgjAAAAABJRU5ErkJggg==" jstcache="0">
</template>

<style scoped>
.dino::before {
  animation: moveLegsPixels 0.25s steps(1, start) infinite;
  content: "";
  pointer-events: none;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1px;
  color: #555;
  box-shadow: 11em 0, 12em 0, 13em 0, 14em 0, 15em 0, 16em 0, 17em 0, 18em 0,
    10em 1em, 11em 1em, 12em 1em, 13em 1em, 14em 1em, 15em 1em, 16em 1em,
    17em 1em, 18em 1em, 19em 1em, 10em 2em, 11em 2em, 13em 2em, 14em 2em,
    15em 2em, 16em 2em, 17em 2em, 18em 2em, 19em 2em, 10em 3em, 11em 3em,
    12em 3em, 13em 3em, 14em 3em, 15em 3em, 16em 3em, 17em 3em, 18em 3em,
    19em 3em, 10em 4em, 11em 4em, 12em 4em, 13em 4em, 14em 4em, 15em 4em,
    16em 4em, 17em 4em, 18em 4em, 19em 4em, 10em 5em, 11em 5em, 12em 5em,
    13em 5em, 14em 5em, 15em 5em, 16em 5em, 17em 5em, 18em 5em, 19em 5em,
    10em 6em, 11em 6em, 12em 6em, 13em 6em, 14em 6em, 10em 7em, 11em 7em,
    12em 7em, 13em 7em, 14em 7em, 15em 7em, 16em 7em, 17em 7em, 0em 8em, 9em 8em,
    10em 8em, 11em 8em, 12em 8em, 13em 8em, 0em 9em, 8em 9em, 9em 9em, 10em 9em,
    11em 9em, 12em 9em, 13em 9em, 0em 10em, 1em 10em, 6em 10em, 7em 10em,
    8em 10em, 9em 10em, 10em 10em, 11em 10em, 12em 10em, 13em 10em, 14em 10em,
    15em 10em, 0em 11em, 1em 11em, 2em 11em, 5em 11em, 6em 11em, 7em 11em,
    8em 11em, 9em 11em, 10em 11em, 11em 11em, 12em 11em, 13em 11em, 15em 11em,
    0em 12em, 1em 12em, 2em 12em, 3em 12em, 4em 12em, 5em 12em, 6em 12em,
    7em 12em, 8em 12em, 9em 12em, 10em 12em, 11em 12em, 12em 12em, 13em 12em,
    0em 13em, 1em 13em, 2em 13em, 3em 13em, 4em 13em, 5em 13em, 6em 13em,
    7em 13em, 8em 13em, 9em 13em, 10em 13em, 11em 13em, 12em 13em, 13em 13em,
    1em 14em, 2em 14em, 3em 14em, 4em 14em, 5em 14em, 6em 14em, 7em 14em,
    8em 14em, 9em 14em, 10em 14em, 11em 14em, 12em 14em, 2em 15em, 3em 15em,
    4em 15em, 5em 15em, 6em 15em, 7em 15em, 8em 15em, 9em 15em, 10em 15em,
    11em 15em, 12em 15em, 3em 16em, 4em 16em, 5em 16em, 6em 16em, 7em 16em,
    8em 16em, 9em 16em, 10em 16em, 11em 16em, 4em 17em, 5em 17em, 6em 17em,
    7em 17em, 8em 17em, 9em 17em, 10em 17em, 5em 18em, 6em 18em, 7em 18em,
    10em 18em, 11em 18em, 5em 19em, 6em 19em, 5em 20em, 5em 21em, 6em 21em;
}

@keyframes moveLegsPixels {
  0%,
  100% {
    box-shadow: 11em 0, 12em 0, 13em 0, 14em 0, 15em 0, 16em 0, 17em 0, 18em 0,
      10em 1em, 11em 1em, 12em 1em, 13em 1em, 14em 1em, 15em 1em, 16em 1em,
      17em 1em, 18em 1em, 19em 1em, 10em 2em, 11em 2em, 13em 2em, 14em 2em,
      15em 2em, 16em 2em, 17em 2em, 18em 2em, 19em 2em, 10em 3em, 11em 3em,
      12em 3em, 13em 3em, 14em 3em, 15em 3em, 16em 3em, 17em 3em, 18em 3em,
      19em 3em, 10em 4em, 11em 4em, 12em 4em, 13em 4em, 14em 4em, 15em 4em,
      16em 4em, 17em 4em, 18em 4em, 19em 4em, 10em 5em, 11em 5em, 12em 5em,
      13em 5em, 14em 5em, 15em 5em, 16em 5em, 17em 5em, 18em 5em, 19em 5em,
      10em 6em, 11em 6em, 12em 6em, 13em 6em, 14em 6em, 10em 7em, 11em 7em,
      12em 7em, 13em 7em, 14em 7em, 15em 7em, 16em 7em, 17em 7em, 0em 8em,
      9em 8em, 10em 8em, 11em 8em, 12em 8em, 13em 8em, 0em 9em, 8em 9em, 9em 9em,
      10em 9em, 11em 9em, 12em 9em, 13em 9em, 0em 10em, 1em 10em, 6em 10em,
      7em 10em, 8em 10em, 9em 10em, 10em 10em, 11em 10em, 12em 10em, 13em 10em,
      14em 10em, 15em 10em, 0em 11em, 1em 11em, 2em 11em, 5em 11em, 6em 11em,
      7em 11em, 8em 11em, 9em 11em, 10em 11em, 11em 11em, 12em 11em, 13em 11em,
      15em 11em, 0em 12em, 1em 12em, 2em 12em, 3em 12em, 4em 12em, 5em 12em,
      6em 12em, 7em 12em, 8em 12em, 9em 12em, 10em 12em, 11em 12em, 12em 12em,
      13em 12em, 0em 13em, 1em 13em, 2em 13em, 3em 13em, 4em 13em, 5em 13em,
      6em 13em, 7em 13em, 8em 13em, 9em 13em, 10em 13em, 11em 13em, 12em 13em,
      13em 13em, 1em 14em, 2em 14em, 3em 14em, 4em 14em, 5em 14em, 6em 14em,
      7em 14em, 8em 14em, 9em 14em, 10em 14em, 11em 14em, 12em 14em, 2em 15em,
      3em 15em, 4em 15em, 5em 15em, 6em 15em, 7em 15em, 8em 15em, 9em 15em,
      10em 15em, 11em 15em, 12em 15em, 3em 16em, 4em 16em, 5em 16em, 6em 16em,
      7em 16em, 8em 16em, 9em 16em, 10em 16em, 11em 16em, 4em 17em, 5em 17em,
      6em 17em, 7em 17em, 8em 17em, 9em 17em, 10em 17em, 5em 18em, 6em 18em,
      7em 18em, 10em 18em, 11em 18em, 5em 19em, 6em 19em, 5em 20em, 5em 21em,
      6em 21em;
  }
  50% {
    box-shadow: 11em 0, 12em 0, 13em 0, 14em 0, 15em 0, 16em 0, 17em 0, 18em 0,
      10em 1em, 11em 1em, 12em 1em, 13em 1em, 14em 1em, 15em 1em, 16em 1em,
      17em 1em, 18em 1em, 19em 1em, 10em 2em, 11em 2em, 13em 2em, 14em 2em,
      15em 2em, 16em 2em, 17em 2em, 18em 2em, 19em 2em, 10em 3em, 11em 3em,
      12em 3em, 13em 3em, 14em 3em, 15em 3em, 16em 3em, 17em 3em, 18em 3em,
      19em 3em, 10em 4em, 11em 4em, 12em 4em, 13em 4em, 14em 4em, 15em 4em,
      16em 4em, 17em 4em, 18em 4em, 19em 4em, 10em 5em, 11em 5em, 12em 5em,
      13em 5em, 14em 5em, 15em 5em, 16em 5em, 17em 5em, 18em 5em, 19em 5em,
      10em 6em, 11em 6em, 12em 6em, 13em 6em, 14em 6em, 10em 7em, 11em 7em,
      12em 7em, 13em 7em, 14em 7em, 15em 7em, 16em 7em, 17em 7em, 0em 8em,
      9em 8em, 10em 8em, 11em 8em, 12em 8em, 13em 8em, 0em 9em, 8em 9em, 9em 9em,
      10em 9em, 11em 9em, 12em 9em, 13em 9em, 0em 10em, 1em 10em, 6em 10em,
      7em 10em, 8em 10em, 9em 10em, 10em 10em, 11em 10em, 12em 10em, 13em 10em,
      14em 10em, 15em 10em, 0em 11em, 1em 11em, 2em 11em, 5em 11em, 6em 11em,
      7em 11em, 8em 11em, 9em 11em, 10em 11em, 11em 11em, 12em 11em, 13em 11em,
      15em 11em, 0em 12em, 1em 12em, 2em 12em, 3em 12em, 4em 12em, 5em 12em,
      6em 12em, 7em 12em, 8em 12em, 9em 12em, 10em 12em, 11em 12em, 12em 12em,
      13em 12em, 0em 13em, 1em 13em, 2em 13em, 3em 13em, 4em 13em, 5em 13em,
      6em 13em, 7em 13em, 8em 13em, 9em 13em, 10em 13em, 11em 13em, 12em 13em,
      13em 13em, 1em 14em, 2em 14em, 3em 14em, 4em 14em, 5em 14em, 6em 14em,
      7em 14em, 8em 14em, 9em 14em, 10em 14em, 11em 14em, 12em 14em, 2em 15em,
      3em 15em, 4em 15em, 5em 15em, 6em 15em, 7em 15em, 8em 15em, 9em 15em,
      10em 15em, 11em 15em, 12em 15em, 3em 16em, 4em 16em, 5em 16em, 6em 16em,
      7em 16em, 8em 16em, 9em 16em, 10em 16em, 11em 16em, 12em 16em, 4em 17em,
      5em 17em, 6em 17em, 7em 17em, 8em 17em, 9em 17em, 10em 17em, 11em 17em,
      5em 18em, 10em 18em, 11em 18em, 5em 19em, 6em 19em, 10em 19em, 10em 20em,
      11em 20em;
  }
}
</style>
