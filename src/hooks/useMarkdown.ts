import axios from 'axios'
import { useAsync } from 'react-use'

export const useMarkdown = (src: string) => {
  const { value } = useAsync(async () => {
    const { data } = await axios.get(src)
    return data
  }, [src])

  return value
}
