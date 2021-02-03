export class EmptyParamError extends Error {
  constructor(param: string) {
    super(`Empty parameter: "${param}"`)
  }
}
