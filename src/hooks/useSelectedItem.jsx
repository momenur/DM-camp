import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
const useSelectedItem = () => {
    const {user} = useContext(AuthContext)

    const { isLoading, refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/selected?email=${user?.email}`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return [selected,refetch, isLoading]

}
export default useSelectedItem;