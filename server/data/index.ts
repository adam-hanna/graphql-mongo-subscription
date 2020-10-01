import { buildSchema } from 'graphql';
import { readFileSync } from 'fs'

const data = readFileSync(`${__dirname}/schema.graphql`, 'utf8')
export const schema = buildSchema(data)
