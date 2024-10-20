import { useRouter } from 'vue-router'
export function useStartService() {
  const router = useRouter()
  function start() {
    router.push({ name: 'game' })
  }
  return {
    start
  }
}
