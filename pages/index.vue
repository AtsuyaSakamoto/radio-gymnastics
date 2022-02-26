<template>
  <div class="contents">
    <!-- <h1 class="title">スマラジ</h1> -->
    <div class="img-wrapper">
      <img src="title_logo.png" class="title-img" />
    </div>
    <div class="img-wrapper-second">
      <img src="titile_illust.png" class="illust-img" />
    </div>
    <div class="btn-wrapper">
      <button class="start-btn" @click="goPlaces">START</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const router = useRouter()
    const goPlaces = () => {
      router.push('/place')
    }

    return { goPlaces }
  },
})
</script>

<style lang="scss" scoped>
.contents {
  background-color: yellow;
  overflow: hidden;
  .title {
    text-align: center;
    padding-top: 40px;
  }
  .img-wrapper {
    text-align: center;
    margin-top: 40px;
    .title-img {
      width: 350px;
      height: 250px;
    }
  }
  .img-wrapper-second {
    text-align: center;
    margin-top: -100px;
    .illust-img {
      width: 300px;
      height: 500px;
    }
  }
  .btn-wrapper {
    text-align: center;
    margin-top: -80px;
    padding-bottom: 50px;
    .start-btn {
      width: 200px;
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
