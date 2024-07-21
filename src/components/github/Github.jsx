import { useLoaderData } from "react-router-dom"


function Github() {
    const data = useLoaderData()
    
    // const [data,setData] = useState([])
    //  useEffect(() => {
    //     fetch('https://api.github.com/users/animesh156')
    //     .then(resposne => resposne.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    //  }, [])

  return (
    <div className="text-center text-white bg-gray-600 p-4 m-8">Github Followers: {data.followers}
    <img src={data.avatar_url} alt="github pic" width={300} className="m-auto" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const res = await  fetch('https://api.github.com/users/animesh156')
    return res.json()
}