import Joi from '@hapi/joi'

export const schema = Joi.object({
  logLevel: Joi.string()
    .allow('info', 'debug', 'warn', 'error')
    .only()
    .required()
})
