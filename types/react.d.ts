import 'react'

declare module 'react' {
  type FCX<P = {}> = FunctionComponent<P & { className?: string }>
}
