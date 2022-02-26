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
      <img class="start-btn" src="taisou_start.png" @click="goPlaces" />
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
  background-color: #f1db5a;
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
    margin-top: -220px;
    .illust-img {
      width: 350px;
      height: 700px;
    }
  }
  .btn-wrapper {
    text-align: center;
    margin-top: -180px;
    padding-bottom: 60px;
    .start-btn {
      width: 150px;
      height: 60px;
    }
  }
}
</style>
