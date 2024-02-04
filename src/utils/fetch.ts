import { ref, watch, type Ref } from "vue"

interface UseFetchOption<T = unknown, K = unknown> {
  watch?: unknown[]
  transform?: (res: T) => K
}
export const useFetch = <T = unknown, K = unknown>(
  fetcher: () => Promise<T>,
  option: UseFetchOption<T, K> = {}
) => {
  const data: Ref<T | K | null> = ref(null)
  const pending = ref(true)
  const error = ref(null)

  const refresh = () => {
    pending.value = true
    fetcher().then(res => {
      data.value = typeof option.transform === 'function' ? option.transform(res) : res
      pending.value = false
    }).catch(err => {
      error.value = err
    })
  }
  refresh()

  if (option.watch) { watch(option.watch, refresh) }

  return {
    data, pending, refresh, error
  }
}