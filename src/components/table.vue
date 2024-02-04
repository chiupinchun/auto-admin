<template>
  <table v-if="data?.length">
    <thead>
      <tr>
        <th v-for="col in Object.values(format)">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td v-for="key in Object.keys(format)">
          {{ parseTableCeil(item, key) }}
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else>沒有資料。</div>
</template>

<script lang="ts" setup>
import { parseTableCeil } from '@/utils/parseData'

interface Props {
  data?: Record<string, unknown>[]
  /**
   * { api的key: 對應的中文 }
   */
  format: Record<string, string>
}

const props = defineProps<Props>()
</script>

<style lang="less" scoped>
table {
  width: 100%;
  border-collapse: collapse;

  tr {
    &:hover {
      background-color: hsl(lightgrey, 0.25);
    }

    td,
    th {
      padding: 8px;
      max-width: 250px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }


}
</style>