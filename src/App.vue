<script setup lang="ts">
import Header from '@/components/header.vue';
import Sidebar from '@/components/sidebar.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <main>
    <Sidebar />
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="less" scoped>
main {
  display: flex;
}

.container {
  padding: 1.5rem;
  width: 100%;
}
</style>
