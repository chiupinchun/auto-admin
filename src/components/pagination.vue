<template>
  <nav>pagination</nav>
</template>

<script lang="ts" setup>
interface Props {
  totalPage: number
  range?: number
}
const props = withDefaults(defineProps<Props>(), {
  range: 5
})
</script>

<style lang="less" scoped></style>