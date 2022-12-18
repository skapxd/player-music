export interface IDebounce {
  delay?: number
  immediate?: boolean
  fn: () => void
}

export interface IUseDebounce<T> extends IDebounce {
  dependencies: Array<T>
}