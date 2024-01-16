<template>
  <aside>
    <nav>
      <ul class="groups">
        <li @click="group.active = !group.active" v-for="group in groups" :class="{ active: group.active }">
          <a>{{ group.title }} <i>＜</i></a>
          <ul class="links">
            <li v-for="link in group.children">
              <RouterLink @click.stop :to="link.href" :class="{ active: route.path === link.href }">{{ link.title }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// TODO: read from config
const groups = reactive([
  {
    title: '群組1',
    children: [
      {
        title: '頁面1-1',
        href: '/page1'
      },
      {
        title: '頁面1-2',
        href: '/page2'
      }
    ]
  },
  {
    title: '群組2',
    children: [
      {
        title: '頁面2-1',
        href: '/'
      }
    ]
  }
].map(item => ({ ...item, active: false })));
</script>

<style lang="less" scoped>
nav {
  width: 200px;
  min-height: ~"max(calc(100vh - 4rem), 100%)";
  box-shadow: 1px 0 .5rem gray;
  overflow-x: auto;

  .groups {
    margin-top: 1rem;

    li {
      --padding-y: 1rem;
      cursor: pointer;

      a {
        display: block;
        padding: .5rem var(--padding-y);

        i {
          display: inline-block;
          font-style: normal;
          transform: rotate(270deg);
          transition: .25s;
          user-select: none;
        }
      }

      ul.links {
        position: relative;
        bottom: 1rem;
        max-height: 0;
        padding: 0 .5rem;
        overflow-y: hidden;
        opacity: 0;
        transition: .15s;

        a {
          display: block;
          min-width: max-content;
          border-radius: 5px;

          &:hover {
            color: var(--primary);
          }

          &.active {
            background-color: var(--primary);
            color: var(--primary-text)
          }
        }
      }

      &.active {
        a i {
          transform: rotate(90deg);
        }

        ul.links {
          max-height: 100vh;
          bottom: 0;
          opacity: 1;
        }
      }
    }
  }
}
</style>