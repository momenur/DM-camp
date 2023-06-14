import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const {data: makeAdmin, isLoading: isAdminLoading = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return [makeAdmin, isAdminLoading]
}
export default useAdmin;