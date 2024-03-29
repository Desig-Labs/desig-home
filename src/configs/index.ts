import { env } from './env'
import cluster from './cluster.config'

const configs = {
  env,
  cluster: cluster[env],
  notionDatabaseId: cluster[env].notionDatabaseId,
}

/**
 * Module exports
 */
export default configs
