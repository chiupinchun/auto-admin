<template>
  <label>{{ }}

  </label>
</template>

<script lang="ts" setup>
import { GENERIC_COL_TYPES } from '@/assets/ts/filter';

interface Props {
  label: string;
  type: typeof GENERIC_COL_TYPES[number];
  modelValue: string | number;
}
</script>

<style lang="less" scoped></style>