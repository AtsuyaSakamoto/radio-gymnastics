<template>
  <div>
    <h1 class="title">アプリタイトル</h1>
    <div class="test">ここに写真</div>
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
.title {
  text-align: center;
}
.test {
  width: 300px;
  height: 500px;
  background-color: pink;
  margin: 0 auto;
}
.btn-wrapper {
  text-align: center;
  .start-btn {
    margin-top: 80px;
    width: 200px;
    height: 50px;
    border: 1px solid black;
    border-radius: 40px;
    background-color: blue;
    color: white;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.12em;
  }
}
</style>
