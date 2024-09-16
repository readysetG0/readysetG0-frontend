import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: '트래블체커',
}

interface Maps {
  id: number
  title: string
}
//leaflet 자체는 ssr을 지원안하기에 동적 import로 막아준다 --실제 서버입장에서 해당 컴포넌트는 클라이언트에서 랜더링할거야 알려주는거일뿐
//실제 Map 컴포넌트 자체에 use client를 안 해주면 leaflet을 사용하는 부분에서 ssr로 생각하고 진행함
const DynamicMap = dynamic(() => import('../../components/Maps/Map'), {
  loading:()=>(<h2>지도를 불러오는 중...</h2>),
  ssr: false,
})


export default function MapPage() {
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
  return (
    <main>
      <div>
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
