const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const connectDB = require('./database/db');

require('dotenv').config();

connectDB();

const pubsub = new PubSub();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req, pubsub }),
});

server
	.listen({ port: process.env.PORT || 4000 })
	.then((res) => console.log(`Server is running at ${res.url}...`));
