import type { ICategory } from '../DTO/game.dto'

const categories: ICategory[] = [
  {
    id: 1,
    name: 'Легкий старт',
    point: 10,
    questions: [
      {
        id: 1,
        question: 'Какой язык программирования создаете?',
        timer: 30
      },
      {
        id: 2,
        question: 'Опубликуй сторис в instagram с хештегом #ВечеринкаУPlayrixДома',
        timer: 30
      },
      {
        id: 3,
        question: 'Lorem ipsum dolor sit amet ?',
        timer: 30
      },
      {
        id: 4,
        question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timer: 30
      },
      {
        id: 5,
        question: 'Lorem ipsum, dolor sit ',
        timer: 30
      }
    ]
  },
  {
    id: 2,
    name: 'СЛОЖНЫЙ ВЫБОР',
    point: 30,
    questions: [
      {
        id: 1,
        question: 'Какой язык программирования создаете?',
        timer: 30
      },
      {
        id: 2,
        question: 'Опубликуй сторис в instagram с хештегом #ВечеринкаУPlayrixДома',
        timer: 30
      },
      {
        id: 3,
        question: 'Lorem ipsum dolor sit amet ?',
        timer: 30
      },
      {
        id: 4,
        question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timer: 30
      },
      {
        id: 5,
        question: 'Lorem ipsum, dolor sit ',
        timer: 30
      }
    ]
  }
]

export default categories
