<template>
  <div>
    <h1 class="title">アプリタイトル</h1>
    <div class="test">ここに写真</div>
    <button class="start-btn" @click="goPlaces">start</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const test = ref<string>('こんにちは')
    const router = useRouter()
    const goPlaces = () => {
      router.push('/place')
    }

    return { test, goPlaces }
  },
})
</script>

<style>
.title {
  text-align: center;
}
.test {
  width: 300px;
  height: 500px;
  background-color: pink;
  margin: 0 auto;
}
.start-btn {
  margin-left: 90px;
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
</style>
