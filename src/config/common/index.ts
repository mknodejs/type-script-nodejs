import localhost from './localhost'
import dev from './dev'
import qa from './qa'
import loadtest from './loadtest'
import prod from './prod'
import getValue from 'get-value'
import { CommonConfig } from './schema/common'

export default (env: string): CommonConfig => {
  const configMap = { localhost, dev, qa, loadtest, prod }
  const config = getValue(configMap, `${env}`, {})
  return config
}
