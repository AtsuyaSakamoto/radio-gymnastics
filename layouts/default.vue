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
.container {
  min-height: 680px;
}
</style>
