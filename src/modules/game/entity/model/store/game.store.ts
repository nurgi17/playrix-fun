import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ICategory, IGame } from '../DTO/game.dto'
import categories from '../data/questions'

const STORE_ID = 'game'

export const useGameStore = defineStore(STORE_ID, () => {
  const newGame = ref<IGame>(),
    gamePoints = ref(0),
    currentCategory = ref<ICategory>()

  function setNewGame() {
    newGame.value = {
      id: 1,
      name: 'playrix fun',
      categories: categories.map((category) => {
        return {
          id: category.id,
          name: category.name,
          point: category.point,
          questions: category.questions
            .map(() => {
              const randomQuestionIndex = Math.floor(Math.random() * category.questions.length)
              const selectedQuestion = category.questions[randomQuestionIndex]
              return {
                id: selectedQuestion.id,
                question: selectedQuestion.question,
                timer: selectedQuestion.timer
              }
            })
            .filter(Boolean)
        }
      })
    }
  }

  function setGamePoints() {
    gamePoints.value = currentCategory.value!.point
  }

  function setCurrentCategory(category: ICategory) {
    currentCategory.value = category
  }

  function setBaseValues() {
    gamePoints.value = 0
  }

  return {
    newGame,
    setNewGame,
    gamePoints,
    currentCategory,
    setCurrentCategory,
    setBaseValues,
    setGamePoints
  }
})
