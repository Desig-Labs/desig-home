import { NextResponse } from 'next/server'

import { getDatabase } from '../service'

export async function GET() {
  const { pageIds, metadataMap } = await getDatabase()

  return NextResponse.json({ pageIds, metadataMap })
}
