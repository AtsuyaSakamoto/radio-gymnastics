<template>
  <div>
    <Nuxt class="container" />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {},
})
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  min-height: 720px;
}
</style>
