import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
const useSelectedItem = () => {
    const {user} = useContext(AuthContext)

    const { isLoading, refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selected?email=${user?.email}`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return [selected,refetch, isLoading]

}
export default useSelectedItem;