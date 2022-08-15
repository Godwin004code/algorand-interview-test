
import React, {
    useEffect,
    useState
} from 'react'
import SingleAlgo from './SingleAlgo'
import Skeleton from '../Skeleton/Skeleton'

const Algorands = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState<Boolean>(false)
    const [errorMessage, setErrorMessage] = useState<String>("")
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
        ).catch(() => {
            setErrorMessage("Unable to fetch Algorand standard assets list. Please check your internet connection.");
            setLoading(false);
         });
       }
       fetchData()
    }, [])
    return ( <>
    <h2 className='font-medium text-3xl text-black text-center mb-20 mt-5'>
    List of Algorand Standard Assets 
on ASAlytics</h2>
{errorMessage && <div className="text-red-500 text-center font-bold text-xl">{errorMessage}</div>} 
<section className='mx-auto w-[90%] flex justify-between flex-wrap'>

    {
        loading ?  Array(160).fill(<Skeleton />) : datas.map((item) => {
            const { assetId,available, logo, name, unitname1} = item
            return (
                <SingleAlgo
                key={assetId} name={name} assetID={assetId} logo={logo} available={available} unitname1={unitname1} />
            )
        })
    }
</section>

         </>
    )
}

export default Algorands