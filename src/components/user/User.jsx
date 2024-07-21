import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div className="text-center text-4xl bg-gray-500 text-white p-4">User: {userid}</div>
  )
}

export default User