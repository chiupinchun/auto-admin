<template>
  <section>
    <form>
      <template v-for="col in cols">
        <label v-if="col.type === 'select'">
          <div>{{ col.label }}</div>
          <select v-model="data[col.model]">
            <option v-for="opt in col.options" :value="opt.value">{{ opt.text }}</option>
          </select>
        </label>
        <div v-else-if="col.type === 'radio' || col.type === 'checkbox'" class="one-row-col">
          <div>{{ col.label }}</div>
          <label v-for="opt in col.options">
            <input :type="col.type" v-model="data[col.model]" :value="opt.value">
            {{ opt.text }}
          </label>
        </div>
        <div class="date-col" v-else-if="col.type === 'date'">
          <label>
            <div>起始日期</div>
            <input type="date" v-model="data[col.model[0]]">
          </label>
          <label>
            <div>結束日期</div>
            <input type="date" v-model="data[col.model[1]]">
          </label>
        </div>
        <label v-else>
          <div>{{ col.label }}</div>
          <input :type="col.type" v-model="data[col.model]">
        </label>
      </template>
    </form>
    <div class="btn-block">
      <button @click="onSearch" class="btn">搜尋</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { FilterColumn } from '@/types/filter';
import { reactive } from 'vue';

interface Props {
  cols: FilterColumn[];
}

const props = defineProps<Props>();

const data = reactive<Record<string, unknown>>({});
props.cols.forEach(col => {
  if (col.type === 'checkbox') {
    data[col.model] = []
  }
})

const onSearch = () => {
  console.log(data)
}

</script>

<style lang="less" scoped>
section {
  padding: 1.5rem;
  border: 1px solid lightgray;
  border-radius: 1rem;

  form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;

    .one-row-col {
      grid-column-start: 1;
      grid-column-end: none;

      label {
        margin-right: .5rem;
      }
    }

    .date-col {
      grid-column-start: 1;
      grid-column-end: 3;
      display: flex;

      label {
        &:last-child {
          margin-left: auto;
          margin-right: auto;
        }

        input {
          width: 173px;
        }
      }
    }
  }

  .btn-block {
    display: flex;
    justify-content: end;
    width: 100%;
  }
}
</style>