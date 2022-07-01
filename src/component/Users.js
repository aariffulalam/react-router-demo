import { Outlet } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get("filter") === "active"
  return (
    <div>
        <ul>
            <li>user 1</li>
            <li>user 2</li>
            <li>user 3</li>
        </ul>
    <Outlet/>
      <div>
        <button onClick={()=>setSearchParams({filter:"active"})}>Active users</button>
        <button onClick={()=>setSearchParams({})}>Reset</button>
      </div>
      {
        showActiveUsers ? <h3>Active users</h3>: <h4>All Users</h4>
      }
    </div>
  )
}
