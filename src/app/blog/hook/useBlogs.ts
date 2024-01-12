import { useMemo } from 'react'
import useSWR from 'swr'
import { ExtendedRecordMap } from 'notion-types'
import axios from 'axios'

export const LIMIT = 3
export const TAGS = [
  {
    title: 'News',
    tag: '',
  },
  {
    title: 'Campaign',
    tag: 'Campaign',
  },
  {
    title: 'Desig 101',
    tag: 'Desig 101',
  },
  {
    title: 'Technology',
    tag: 'Technology',
  },
  {
    title: 'Lab Updates',
    tag: 'Lab Updates',
  },
]

export const useBlogs = (): {
  data: Partial<{
    pageIds: string[]
    metadataMap: PageMap
  }>
  error: Error | undefined
} => {
  const { data, error } = useSWR<
    { pageIds: string[]; metadataMap: PageMap },
    Error
  >('/api/database', async () => {
    const { data } = await axios.get(`/api/database`)
    return data
  })

  return { data: data || {}, error }
}

export const useBlogPage = (
  pageId: string,
): {
  data: Partial<{
    map: ExtendedRecordMap
    recommends: string[]
    metadata: PageMetadata
  }>
  error: Error | undefined
} => {
  const { data, error } = useSWR<
    { map: ExtendedRecordMap; recommends: string[] },
    Error
  >([pageId], async (pageId: string) => {
    const { data } = await axios.get(`/api/blog/${pageId}`)
    return data
  })

  return { data: data || {}, error }
}

export const useBlogCard = (
  pageIds: string[],
  metadata: PageMap,
  category?: string,
  nextBlog = 1,
) => {
  const availableIds = useMemo(
    () =>
      pageIds.filter((pageId) => {
        const { publishedAt } = metadata[pageId] || { publishedAt: Date.now() }
        return publishedAt < Date.now()
      }),
    [pageIds, metadata],
  )

  const pinnedIds = useMemo(() => {
    return availableIds.filter((pageId) => {
      const { pinned } = metadata[pageId] || { pinned: false }
      return pinned
    })
  }, [availableIds, metadata])

  const taggedIds = useMemo(
    () =>
      availableIds.filter((pageId) => {
        const { tags } = metadata[pageId] || { tags: [] }
        if (!category) return true
        return tags.includes(category)
      }),
    [availableIds, category, metadata],
  )

  const total = useMemo(() => taggedIds.length, [taggedIds])
  const thumbnailIds = useMemo(() => {
    return taggedIds.slice(0, Math.min(nextBlog * LIMIT, total))
  }, [nextBlog, taggedIds, total])

  return {
    total,
    pinnedIds,
    thumbnailIds,
  }
}
