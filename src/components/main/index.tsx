import { Link, Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Main = (): JSX.Element => {
  
  return (
    <div className="main d-flex align-content-between row">
      <Header />
      <Outlet />
      <div className="text-center mb-0"><Link className="link-secondary" to="http://marvel.com\">Data provided by Marvel. © 2023 MARVEL</Link></div>
    </div>
       
  )
}
