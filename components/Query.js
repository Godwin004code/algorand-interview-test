import React, {
    useEffect,
    useState
} from 'react'


const Query = () => {
    const [datas, setDatas] = useState([])
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
        fetch('https://analytics-api.herokuapp.com/analytics', {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                
            },

            body: JSON.stringify({
                query: ALGORAND
            })
        })
        .then(res => res.json())
        .then(res => setDatas(res.data.asalist.results))
    }, [])
    return ( <div> Query
        {datas.map((item) => {
            return (
                <h2 key={item.id}>{item.name}</h2>
            )
        })}
         </div>
    )
}

export default Query