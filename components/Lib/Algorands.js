import { data } from 'autoprefixer'
import React, {
    useEffect,
    useState
} from 'react'
import SingleAlgo from './SingleAlgo'
import Skeleton from 'react-loading-skeleton'

const Query = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(false)
    const ALGORAND = `{
  
        asalist {
        results {
          name,
          assetId,
          available,
          logo,
          unitname1
        
      }
      }
    }`
      
    useEffect(() => {
       const fetchData = async () => { 
            setLoading(true)
        fetch('https://analytics-api.herokuapp.com/analytics', {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                
            },

            body: JSON.stringify({
                query: ALGORAND
            })
        })
        .then(res => 
            res.json()
        )
        .then(res => 
            
            {
                setDatas(res.data.asalist.results)
                setLoading(false)
            }
        )
       }
       fetchData()
    }, [])
    return ( <>
    <h2 className='font-medium text-3xl text-black text-center mb-20 mt-5'>
    List of Algorand Standard Assets 
on ASAlytics</h2> 
<section className='mx-auto w-[90%] flex justify-between flex-wrap'>
    {
        loading ? 'Loading Data...' : datas.map((item) => {
            const { assetId,available, logo, name, unitname1} = item
            return (
                <SingleAlgo
                key={assetId} name={name} assetId={assetId} logo={logo} available={available} unitname1={unitname1} />
            )
        })
    }
</section>
         </>
    )
}

export default Query