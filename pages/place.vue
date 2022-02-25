<template>
  <div class="contents">
    <div class="flex">
      <div class="img-wrapper">
        <img src="kaijou_header.png" class="header-img" />
      </div>
      <div class="map-btn-wrapper">
        <img
          src="kaijou_nihonchizu.png"
          class="map-btn"
          @click="changePlaceToggle"
        />
      </div>
    </div>

    <div v-if="placeToggle">
      <div class="card-position">
        <!-- TODOここはv-forを使ってキレイに書く -->
        <div class="park-card" @click="goPlay">
          <img src="park1.png" class="title-img" />
          <div>place1</div>
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park2.png" class="title-img" />
          <div>place2</div>
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park3.png" class="title-img" />
          <div>place3</div>
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park4.png" class="title-img" />
          <div>place4</div>
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park5.png" class="title-img" />
          <div>place5</div>
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park6.png" class="title-img" />
          <div>place6</div>
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park7.png" class="title-img" />
          <div>place7</div>
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park8.png" class="title-img" />
          <div>place8</div>
        </div>
        <div class="park-card" @click="goPlay">
          <img src="park9.png" class="title-img" />
          <div>place9</div>
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
      <div class="back-btn" @click="backPage">
        <img src="kaijou_back.png" width="120px" height="50px" />
      </div>
      <div>
        <button class="ranking-btn" @click="goRanking">ランキング</button>
      </div>
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
  background-color: yellow;
  overflow: hidden;
  .flex {
    display: flex;
  }
  .img-wrapper {
    text-align: left;
    .header-img {
      width: 250px;
      height: 150px;
    }
  }
  .map-btn {
    width: 100px;
    height: 50px;
    padding-top: 90px;
  }

  .card-position {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 20px;
  }
  .park-card {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    .title-img {
      border-radius: 10px;
    }
  }
  .btn-wrapper {
    justify-content: center;
    margin-bottom: 30px;
    display: flex;
    .back-btn {
      margin-top: 70px;
      width: 120px;
      height: 50px;
      border: 1px solid black;
      border-radius: 40px;
      background-color: skyblue;
      color: white;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.12em;
    }
    .ranking-btn {
      margin-left: 30px;
      margin-top: 70px;
      width: 120px;
      height: 50px;
      border: 1px solid black;
      border-radius: 40px;
      background-color: skyblue;
      color: white;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.12em;
    }
  }
}
</style>
