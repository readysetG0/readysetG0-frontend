import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'


export const metadata: Metadata = {
  title: '트래블체커',
}

interface Maps {
  id: number
  title: string
}
//leaflet 자체는 ssr을 지원안하기에 동적 import로 막아준다
const DynamicMap =dynamic (()=>import('../../components/Maps/Map'),{
  ssr:false,
});

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMaps(): Promise<Maps[]> {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  return fetch(URL).then((res) => res.json())
  // const data=await fetch(URL)
  // const res= await data.json()
  // return res
}

export default async function MapPage() {
  // const [isLoading,setIsLoading]=useState(true);
  // const [maps,setMaps]=useState([])
  // const getMaps=async ()=>{
  //   const response= await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
  //   setMaps(await response.json());
  //   setIsLoading(false)
  // }

  // useEffect(()=>{
  //   getMaps();
  // },[])
  // 위에 해당 코드는 fetch를 클라이언트에서 진행할 때의 코드
  const maps = await getMaps()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        {/* <ul>
          {maps.map((m: Maps) => (
            <li key={m.id}>
              <Link href={`/record/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul> */}
        <DynamicMap/>
      </div>
    </main>
  )
}
