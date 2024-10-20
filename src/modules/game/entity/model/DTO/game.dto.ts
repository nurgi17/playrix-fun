export interface IQuestion {
  id: number
  question: string
  timer: number // in seconds
}

export interface ICategory {
  id: number
  name: string
  point: number
  questions: IQuestion[]
}

export interface IGame {
  id: number
  name: string
  categories: ICategory[]
}

export interface ITimer {
  minutes: number
  seconds: number
}

export enum IResultType {
  Correct = 'correct',
  Timeout = 'timeout'
}
