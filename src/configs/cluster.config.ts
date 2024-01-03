/**
 * Contructor
 */

import { Env } from './env'

type Conf = {
  eddsa: string
  ecdsa: string
  notionDatabaseId: string
}

const conf: Record<Env, Conf> = {
  /**
   * Development configurations
   */
  development: {
    eddsa: 'https://eddsa.desig.dev',
    ecdsa: 'https://ecdsa.desig.dev',
    notionDatabaseId: process.env.NOTION_DATABASE_ID || '',
  },

  /**
   * Staging configurations
   */
  test: {
    eddsa: 'https://eddsa.desig.dev',
    ecdsa: 'https://ecdsa.desig.dev',
    notionDatabaseId: process.env.NOTION_DATABASE_ID || '',
  },

  /**
   * Production configurations
   */
  production: {
    eddsa: 'https://eddsa.desig.dev',
    ecdsa: 'https://ecdsa.desig.dev',
    notionDatabaseId: process.env.NOTION_DATABASE_ID || '',
  },
}

/**
 * Module exports
 */
export default conf
