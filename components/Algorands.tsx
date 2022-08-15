
import React, {
    useEffect,
    useState
} from 'react'
import SingleAlgo from './SingleAlgo'
import Skeleton from './Skeleton/Skeleton'
import { useGlobalContext } from './context/Context'


const Algorands = () => {
    const {datas, loading,errorMessage, fetchData} = useGlobalContext()

    useEffect(() => {
       
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
            const { assetID,available, logo, name, unitname1} = item
            return (
                <SingleAlgo
                key={assetID} assetID={assetID} name={name}  logo={logo} available={available} unitname1={unitname1} />
            )
        })
    }
</section>

         </>
    )
}


export default Algorands
