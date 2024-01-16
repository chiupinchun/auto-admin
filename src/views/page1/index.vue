<script setup lang="ts">
import Filter from '@/components/filter.vue';
import filterCols from './filter';
</script>

<template>
  <Filter :cols="filterCols" />
</template>

<style lang="less" scoped></style>