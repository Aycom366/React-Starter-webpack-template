import { Counter } from "./Counter"
import "./style.css"

export const App = () => {
  const a = "yes"
  return (
    <>
      <h1>React Typescript {process.env.NODE_ENV}</h1>
      <Counter />
    </>
  )
}
