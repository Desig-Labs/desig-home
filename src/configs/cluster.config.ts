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
    notionDatabaseId: '677f0fd492ed4884af268db31eebb0ec',
  },

  /**
   * Staging configurations
   */
  test: {
    eddsa: 'https://eddsa.desig.dev',
    ecdsa: 'https://ecdsa.desig.dev',
    notionDatabaseId: '677f0fd492ed4884af268db31eebb0ec',
  },

  /**
   * Production configurations
   */
  production: {
    eddsa: 'https://eddsa.desig.dev',
    ecdsa: 'https://ecdsa.desig.dev',
    notionDatabaseId: '677f0fd492ed4884af268db31eebb0ec',
  },
}

/**
 * Module exports
 */
export default conf
