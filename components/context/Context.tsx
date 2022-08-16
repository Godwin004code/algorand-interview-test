import {
    createContext,
    useContext,
    useState,
} from "react";
import { AlgorandsContextType } from "../../types";
const AppContext = createContext<AlgorandsContextType | null>(null)

const AppProvider = ({
    children
}) => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    
 const ALGORAND = `{
  
    asalist {
    result {
      name,
      assetId,
      available,
      logo,
      unitname1
    
  }
  }
}`

const fetchData = () => { 
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
        //console.log(res.data.asalist.results);
        
        setDatas(res.data.asalist.result)
        setLoading(false)
    }
).catch(() => {
    setErrorMessage("Unable to fetch Algorand standard assets list. Please check your internet connection.");
    setLoading(false);
 });
}

    return ( <AppContext.Provider value = {
            {datas,loading,errorMessage,fetchData}}> 
        {children} 
        </AppContext.Provider>
    )
}

export default AppProvider

export const useGlobalContext = () => {
    return useContext(AppContext)
}