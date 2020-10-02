// import WebpackDevServer from 'webpack-dev-server';
import express from 'express';
import graphQLHTTP from 'express-graphql';
//import path from 'path';
//import webpack from 'webpack';
import { schema } from '../../../data';
import { resolvers } from '../../resolvers';
const cors = require('cors');
const winston = require('winston'),
    expressWinston = require('express-winston');

export const httpServer = express()
httpServer.use(cors())

httpServer.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
}));

// Setup GraphQL endpoint
httpServer.use(
  '/graphql',
  graphQLHTTP({
    schema,
    rootValue: {
      ...resolvers.Query,
      ...resolvers.Mutation,
      ...resolvers.Subscription,
    },
    graphiql: true,
    pretty: true,
  }),
);graphQLHTTP
