<template>
  <div class="contents">
    <h1>会場一覧</h1>
    <div v-if="placeToggle">
      <div class="card-position">
        <!-- TODOここはv-forを使ってキレイに書く -->
        <div class="park-card" @click="goPlay">
          <img src="park1.png" class="title-img" />
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park2.png" class="title-img" />
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park3.png" class="title-img" />
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park4.png" class="title-img" />
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park5.png" class="title-img" />
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park6.png" class="title-img" />
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park7.png" class="title-img" />
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park8.png" class="title-img" />
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park9.png" class="title-img" />
        </div>
      </div>
    </div>
    <div v-else>
      <div>日本地図(イメージ)</div>
      <img
        src="https://community.alteryx.com/t5/image/serverpage/image-id/167070iBB619376892CF7DA/image-size/medium?v=v2&px=400"
      />
    </div>
    <div class="btn-wrapper">
      <button class="back-btn" @click="backPage">戻る</button>
      <button class="ranking-btn" @click="goRanking">ランキング</button>
      <button class="toggle-btn" @click="changePlaceToggle">
        切り替えボタンどこに置こう
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const router = useRouter()
    const goPlay = () => {
      router.push('/play')
    }
    const backPage = () => {
      router.push('/')
    }
    const goRanking = () => {
      router.push('/ranking')
    }

    const placeToggle = ref<boolean>(true)
    const changePlaceToggle = () => {
      if (placeToggle.value === true) {
        placeToggle.value = false
      } else {
        placeToggle.value = true
      }
    }

    return { goPlay, backPage, goRanking, placeToggle, changePlaceToggle }
  },
})
</script>

<style lang="scss" scoped>
.contents {
  text-align: center;
  .card-position {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 20px;
  }
  .park-card {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  .btn-wrapper {
    text-align: center;
    .back-btn {
      margin-top: 80px;
      width: 120px;
      height: 50px;
      border: 1px solid black;
      border-radius: 40px;
      background-color: blue;
      color: white;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.12em;
    }
    .ranking-btn {
      margin-left: 30px;
      margin-top: 80px;
      width: 120px;
      height: 50px;
      border: 1px solid black;
      border-radius: 40px;
      background-color: blue;
      color: white;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.12em;
    }
    .toggle-btn {
      margin-top: 50px;
      height: 50px;
      border: 1px solid black;
      border-radius: 40px;
      background-color: yellow;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.12em;
    }
  }
}
</style>
