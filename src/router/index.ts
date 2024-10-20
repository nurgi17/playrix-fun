import { createRouter, createWebHistory } from 'vue-router'
import { useGameStore } from '../modules/game/entity/model/store/game.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('@/modules/game/pages/StartView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/modules/game/pages/GameView.vue')
    },
    {
      path: '/question/:categoryId',
      name: 'question',
      component: () => import('@/modules/game/pages/QuestionIn.vue')
    },
    {
      path: '/result/:type',
      name: 'result',
      component: () => import('@/modules/game/pages/ResultView.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const gameStore = useGameStore()
//   if (gameStore.newGame === undefined) {
//     next({ name: 'start' })
//   }
//   next()
// })

export default router
