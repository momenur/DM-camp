import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const {data: makeAdmin, isLoading: isAdminLoading = [] } = useQuery({
        queryKey: ['users2', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/users/admin/${user?.email}`)
            if (!response.ok) {
              // throw new Error('Network response was not ok')
            }
            const data = await response.json()
            return data ;
          },
      })
      return [makeAdmin, isAdminLoading]
}
export default useAdmin;