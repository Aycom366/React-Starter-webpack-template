import { Counter } from "./Counter"
import "./style.css"

export const App = () => {
  return (
    <>
      <h1>React Typescript {process.env.NODE_ENV}</h1>
      ;
      <Counter />
    </>
  )
}
