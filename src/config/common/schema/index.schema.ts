import Joi from '@hapi/joi'

export const schema = Joi.object({
  LOG_LEVEL: Joi.string()
    .allow('info', 'debug', 'warn', 'error')
    .default('info')
    .required()
})
