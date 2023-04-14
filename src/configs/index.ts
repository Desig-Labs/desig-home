import { env } from './env'
import cluster from './cluster.config'

const configs = {
  env,
  cluster: cluster[env],
}

/**
 * Module exports
 */
export default configs
