<template>
  <div class="contents">
    <h1 class="title"></h1>
    <div class="movie">
      <img src="~assets/Avatar.gif" class="freezeframe" />
    </div>
    <div
      class="btn"
      :class="{ playback: isActive }"
      @click="isActiveToggle"
    ></div>
    <div v-if="endAudio" class="end-message">hoge</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'
import sound from '../assets/sound.mp3'
const Freezeframe = require('freezeframe')

export default defineComponent({
  setup() {
    const ff = new Freezeframe({
      // trigger: false,
    })

    ff.stop()

    const router = useRouter()
    const goPlay = () => {
      router.push('/play')
    }
    const audio = new Audio(sound)
    const isActive = ref<boolean>(false)
    const isActiveToggle = () => {
      if (isActive.value === true) {
        isActive.value = false
        audio.pause()
        ff.stop()
      } else {
        isActive.value = true
        audio.play()
        ff.start()
      }
    }
    const pushStamp = () => {
      router.push('/place')
    }
    const endAudio = ref<boolean>(true)
    audio.addEventListener('ended', () => {
      console.log('再生終わりました')
      endAudio.value = true
      setTimeout(pushStamp, 5000)
    })
    return { goPlay, isActive, isActiveToggle, endAudio, pushStamp }
  },
})
</script>

<style lang="scss" scoped>
.contents {
  background-image: url("/taisou.png");
  background-color: yellow;
  background-size: cover;
  overflow: hidden;
  .title {
    text-align: center;
    padding-top: 40px;
  }
}
.freezeframe {
  width: 300px;
  height: 500px;
}
.movie {
  margin: 0 auto;
  width: 300px;
  height: 500px;
  background-color: transparent;
  position: relative;
}
.btn {
  position: absolute;
  top: -60px;
  left: 130px;
  width: 100px; /* 幅を指定 */
  height: 60px; /* 高さを指定 */
  background: #f00; /* 背景色を赤に指定 */
  border-radius: 10px; /* 角を丸くする */
  position: relative; /* 基準位置とする */
  cursor: pointer; /* マウスカーソルを指（👆）の形にする */
}

.btn::after {
  content: ''; /* 疑似要素に必須 */
  width: 0; /* 幅を0に指定 */
  height: 0; /* 高さを0に指定 */
  border-style: solid; /* 線の種類を指定 */
  border-width: 15px 0 15px 30px; /* 線の幅を指定して三角を作る */
  border-color: transparent transparent transparent #fff; /* 左のみ線の色を指定 */
  position: absolute; /* 相対位置に指定 */
  top: 50%; /* 上から50%の位置に配置 */
  left: 50%; /* 左から50%の位置に配置 */
  transform: translate(-50%, -50%); /* 要素の半分ぶんだけ左上方向に移動。 */
}
.btn.playback::after {
  width: 15px; /* 幅を指定 */
  height: 30px; /* 高さを指定 */
  border-width: 0 4px 0 4px; /*線を左右に指定*/
  border-color: transparent #fff transparent #fff; /* 左右に線の色を指定 */
  transition: 0.5s; /* アニメーションの秒数を指定 */
}
.end-message {
  position: relative;
  left: 170px;
  top: -300px;
}
</style>
