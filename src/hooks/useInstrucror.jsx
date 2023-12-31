import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query"


const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const {data: makeInstructor, isLoading: isInstructorLoading = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/users/instructor/${user?.email}`)
            if (!response.ok) {
              // throw new Error('Network response was not ok')
            }
            const data =  await response.json()
            return data;
          },
      })
      return [makeInstructor, isInstructorLoading]
}
export default useInstructor;