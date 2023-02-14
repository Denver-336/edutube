import { Flex } from "../styled.components"
import { Carrucel } from "./Carrucel"
import { Info } from "./Info"

export const Main = (): JSX.Element => {
  
  return (
    <Flex>
      <Carrucel />
      <Info />
    </Flex>      
  )
}
