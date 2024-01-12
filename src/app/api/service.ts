import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'

import configs from 'configs'
import { extractProperties } from './utils'

const getNotionAPI = async () => {
  try {
    const api = new NotionAPI()
    return api
  } catch (error) {
    console.error('error', error)
  }
}

export const getDatabase = async () => {
  const api = await getNotionAPI()
  if (!api) throw new Error('Can not get Notion API')

  const map = await api.getPage(configs.notionDatabaseId)
  const block = { ...map.block }
  Object.keys(block).forEach((pageId) => {
    const {
      value: { type, parent_table, content },
    } = block[pageId]
    if (type !== 'page' || parent_table !== 'collection' || !content)
      delete block[pageId]
  })

  // Metadata
  const metadataMap: PageMap = {}
  Object.keys(block).forEach((pageId) => {
    const { value } = block[pageId]
    const page = extractProperties(value, map, pageId)
    if (page.title) {
      metadataMap[pageId] = page
    }
  })

  // Sorted pages
  const pageIds = Object.keys(metadataMap).sort((prevPageId, nextPageId) => {
    const { publishedAt: prevPublishedTime } = metadataMap[prevPageId]
    const { publishedAt: nextPublishedTime } = metadataMap[nextPageId]
    if (prevPublishedTime < nextPublishedTime) return 1
    else if (prevPublishedTime > nextPublishedTime) return -1
    else return 0
  })

  return { pageIds, metadataMap }
}

export const getPageMap = async (pageId: string) => {
  const api = await getNotionAPI()
  if (!api) throw new Error('Can not get Notion API')

  const map = await api.getPage(pageId)
  return map
}

export const getRecommends = async (pageId: string) => {
  const { pageIds, metadataMap } = await getDatabase()
  const { tags } = metadataMap[pageId]

  const recommends: string[] = []
  for (const tag of tags) {
    for (const _pageId of pageIds) {
      const { tags: _tags } = metadataMap[_pageId]
      if (_pageId === pageId || recommends.includes(_pageId)) continue
      if (_tags.includes(tag)) recommends.push(_pageId)
      if (recommends.length >= 3) return recommends
    }
  }
  return recommends
}

export const getPageMetadata = (map: ExtendedRecordMap) => {
  const [{ value: block }] = Object.values(map.block)
  const page = extractProperties(block, map)
  return page
}
