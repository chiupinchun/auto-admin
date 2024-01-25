<template>
  <section>
    <Filter :cols="filterCols" />
  </section>
  <section>
    <Table :format="tableFormat" :data="data?.data?.data" />
  </section>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useFetch } from '@/utils/fetch'
import Filter from '@/components/filter.vue';
import filterCols from './filter';
import Table from '@/components/table.vue'
import tableFormat from './table'

const { data, pending, refresh } = useFetch(
  () => axios.get('http://35.76.189.48:3001/article?show=10'),
  {
    transform: (res) => {
      console.log(res)
      return res
    }
  }
)
</script>

<style lang="less" scoped>
section:not(:last-child) {
  margin-bottom: 2rem;
}
</style>