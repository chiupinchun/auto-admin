import { ref, watch, type Ref } from "vue"

interface UseFetchOption<T = unknown> {
  watch?: unknown[]
  transform?: (res: any) => T
}
export const useFetch = <T = unknown>(
  fetcher: () => Promise<T>,
  option: UseFetchOption<T> = {}
) => {
  const data: Ref<T | null> = ref(null)
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