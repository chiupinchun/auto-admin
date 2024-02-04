<template>
  <img v-if="pending" :src="LoadingImage" alt="讀取中">
  <template v-else>
    <slot />
  </template>
</template>

<script lang="ts" setup>
import LoadingImage from '@/assets/images/loading.svg'
interface Props {
  pending: boolean
}
defineProps<Props>()
</script>

<style lang="less" scoped></style>