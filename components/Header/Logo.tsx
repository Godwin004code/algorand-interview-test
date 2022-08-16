
import Image from "next/image"
import { FunctionComponent } from "react"
import { ALogo } from "../../types"

const Logo: FunctionComponent<ALogo> = ({src}) => {
  return (
   
        <Image src={src} alt="logo" width="30px" height="60px" className="md:h-[40px] h-[60px]" />
  )
}

export default Logo