import { Env } from './env'

/**
 * Contructor
 */

type Conf = {
  eddsa: string
  ecdsa: string
}

const conf: Record<Env, Conf> = {
  /**
   * Development configurations
   */
  development: {
    eddsa: 'https://eddsa.desig.dev',
    ecdsa: 'https://ecdsa.desig.dev',
  },

  /**
   * Staging configurations
   */
  test: {
    eddsa: 'https://eddsa.desig.dev',
    ecdsa: 'https://ecdsa.desig.dev',
  },

  /**
   * Production configurations
   */
  production: {
    eddsa: 'https://eddsa.desig.dev',
    ecdsa: 'https://ecdsa.desig.dev',
  },
}

/**
 * Module exports
 */
export default conf
