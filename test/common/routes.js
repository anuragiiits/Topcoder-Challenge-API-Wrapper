/**
 * The Schema of API Routes
 */
const joi = require('@hapi/joi')
const td = require('./testData')
const Technologies = require('../data/Technologies.json')
const Platforms = require('../data/Platforms.json')
const ChallengeMetadata = require('../data/ChallengeMetadata.json')
const ChallengeTypes = require('../data/ChallengeTypes.json')

module.exports = {
  '/technologies': {
    post: {
      id: td.TECHNOLOGY_ID,
      schema: joi.object().keys({
        entity: joi.object().keys({
          name: joi.string().required(),
          description: joi.string().required(),
          status: joi.object().keys({
            id: joi.number().integer().required(),
            description: joi.string().required()
          })
        }).required().unknown(true)
      })
    },
    get: {
      records: Technologies,
      schema: joi.object().keys({
      })
    }
  },
  '/technologies/:id': {
    patch: {
      idProp: 'technologyId',
      schema: joi.object().keys({
        technologyId: joi.number().integer().min(0).required(),
        entity: joi.object().keys({
          name: joi.string().required(),
          description: joi.string().required(),
          status: joi.object().keys({
            id: joi.number().integer().required(),
            description: joi.string().required()
          })
        }).required().unknown(true)
      })
    },
    delete: {
      idProp: 'technologyId',
      schema: joi.object().keys({
        technologyId: joi.number().integer().min(0).required()
      })
    }
  },
  '/platforms': {
    post: {
      id: td.PLATFORM_ID,
      schema: joi.object().keys({
        entity: joi.object().keys({
          name: joi.string().required()
        }).required().unknown(true)
      })
    },
    get: {
      records: Platforms,
      schema: joi.object().keys({
      })
    }
  },
  '/platforms/:id': {
    patch: {
      idProp: 'platformId',
      schema: joi.object().keys({
        platformId: joi.number().integer().min(0).required(),
        entity: joi.object().keys({
          name: joi.string().required()
        }).required().unknown(true)
      })
    },
    delete: {
      idProp: 'platformId',
      schema: joi.object().keys({
        platformId: joi.number().integer().min(0).required()
      })
    }
  },
  '/challenges/metadata': {
    get: {
      records: ChallengeMetadata,
      schema: joi.object().keys({
      })
    }
  },
  '/challenge-types': {
    get: {
      records: ChallengeTypes,
      schema: joi.object().keys({
      })
    }
  }
}
