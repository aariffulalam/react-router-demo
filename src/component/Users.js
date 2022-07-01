import { Outlet } from "react-router-dom"
export const Users = () => {
  return (
    <div>
        <ul>
            <li>user 1</li>
            <li>user 2</li>
            <li>user 3</li>
        </ul>
    <Outlet/>

    </div>
  )
}
