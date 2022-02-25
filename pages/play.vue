<template>
  <div>
    <h1 class="title">ラジオ体操を始める</h1>
    <div class="movie">ラジオ体操の表示箇所</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const test = ref<string>('こんにちは')
    const router = useRouter()
    const goPlay = () => {
      router.push('/play')
    }

    return { test, goPlay }
  },
})
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}
.movie {
  margin: 0 auto;
  width: 300px;
  height: 600px;
  background-color: yellow;
}
</style>
