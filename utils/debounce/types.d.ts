export interface IDebounce {
  delay?: number
  immediate?: boolean
  fn: () => Promise<void>
}

export interface IUseDebounce<T> extends IDebounce {
  dependencies: T[]
}
