const graphql = require('graphql'); //require the graphql library from top to bottom

const { GraphQLObjectType, GraphQLString } = graphql; //deconstructing objects from graphql
// this code is the same as:
// const GraphQLObjectType = graphql.GraphQLObjectType
// or
// const GraphQLString = graphql.GraphQLString

const PaintingType = new GraphQLObjectType({
	name: 'Painting',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		url: { type: GraphQLString },
		techniques: { type: GraphQLString }
	})
});

module.exports = PaintingType;