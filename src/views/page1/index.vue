<template>
  <section>
    <Filter :cols="filterCols" @on-search="onSearch" />
  </section>
  <section>
    <loading :pending="pending">
      <Table :format="tableFormat" :data="data?.data" />
    </loading>
  </section>
  <section>
    <Pagination :total-page="data?.totalPage ?? 0" />
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useFetch } from '@/utils/fetch'
import Filter from '@/components/filter.vue';
import filterCols from './filter';
import Table from '@/components/table.vue'
import tableFormat from './table'
import Pagination from '@/components/pagination.vue'
import loading from '@/components/loading.vue';

const route = useRoute()
const router = useRouter()

const { data, pending, refresh } = useFetch(
  () => axios.get('http://35.76.189.48:3001/article?show=10'),
  {
    transform: (res) => res.data
  }
)

const onSearch = (query: Record<string, unknown>) => {
  router.push({
    query: {
      ...query,
      page: route.query.page ?? 1
    }
  })
}
</script>

<style lang="less" scoped>
section:not(:last-child) {
  margin-bottom: 2rem;
}
</style>