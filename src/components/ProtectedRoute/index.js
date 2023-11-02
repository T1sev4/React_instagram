import { useRouter } from "next/navigation"
import jwt_decode from "jwt-decode"
import { useEffect } from "react"
export default function ProtectedRoute({children}){
  const router = useRouter()
  // useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      let decodedToken = jwt_decode(token)
      if(decodedToken.exp * 1000 > Date.now()){
        return(
          <>
            {children}
          </>
        )
      }else{
        router.push('/')
      }
    }else{
      router.push('/')
    }
  // }, [])
   
}