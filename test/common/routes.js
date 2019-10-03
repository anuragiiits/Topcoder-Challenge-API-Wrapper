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
      schema: {
        entity: joi.object().keys({
          name: joi.string().required(),
          description: joi.boolean().required(),
          'status.id': joi.number().integer().required(),
          'status.description': joi.string().required()
        }).required()
      }
    },
    get: {
      records: Technologies,
      schema: {
      }
    }
  },
  '/technologies/:id': {
    patch: {
      idProp: 'technologyId',
      schema: {
        technologyId: joi.number().integer().required(),
        entity: joi.object().keys({
					name: joi.string().required(),
					description: joi.boolean().required(),
					'status.id': joi.number().integer().required(),
					'status.description': joi.string().required()
				}).required()
      }
    },
    delete: {
      idProp: 'reviewTypeId',
      schema: {
        reviewTypeId: joi.number().integer().required()
      }
    }
	},
	'/platforms': {
    post: {
      id: td.PLATFORM_ID,
      schema: {
        entity: joi.object().keys({
          name: joi.string().required()
        }).required()
      }
    },
    get: {
      records: Platforms,
      schema: {
      }
    }
  },
  '/platforms/:id': {
    patch: {
      idProp: 'platformId',
      schema: {
        platformId: joi.number().integer().required(),
        entity: joi.object().keys({
					name: joi.string().required()
				}).required()
      }
    },
    delete: {
      idProp: 'platformId',
      schema: {
        platformId: joi.number().integer().required()
      }
    }
	},
	'/challenges/metadata': {
    get: {
      records: ChallengeMetadata,
      schema: {
      }
    }
	},
	'/challenge-types': {
    get: {
      records: ChallengeTypes,
      schema: {
      }
    }
  }
}
