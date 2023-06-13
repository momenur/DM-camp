import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const { isLoading, refetch, data: makeAdmin = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/users')
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return [makeAdmin,refetch, isLoading]
}
export default useAdmin;