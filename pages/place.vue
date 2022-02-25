<template>
  <div class="contents">
    <h1>会場一覧</h1>
    <div class="card-position">
      <div class="park-card" @click="goPlay">公園①</div>
      <div class="park-card">公園②</div>
      <div class="park-card">公園③</div>
      <div class="park-card">公園④</div>
      <div class="park-card">公園⑤</div>
      <div class="park-card">公園⑥</div>
      <div class="park-card">公園⑦</div>
      <div class="park-card">公園⑧</div>
      <div class="park-card">公園⑨</div>
    </div>
    <button class="back-btn">戻る</button>
    <button class="ranking-btn">ランキング</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const router = useRouter()
    const goPlay = () => {
      router.push('/play')
    }

    return { goPlay }
  },
})
</script>

<style lang="scss" scoped>
.contents {
  max-width: 390px;
  margin: 0 auto;
  text-align: center;
}
.card-position {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 20px;
}
.park-card {
  width: 100px;
  height: 100px;
  background-color: red;
}
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
</style>
