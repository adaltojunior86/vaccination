import { makeExecutableSchema } from "graphql-tools";
import Types from './types/';
import resolvers from './resolvers/'

const QueryAndMutations = `
  type Query {
    getVaccineById(id: ID!): Vaccine
    getVaccineByTitle(title: String!): [Vaccine]
    getAllVaccines: [Vaccine]
  }

  type Mutation {
    addVaccine(title: String!, description: String!, doseType: DoseType!): Vaccine
  }
`;

const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [...Types, QueryAndMutations, SchemaDefinition],
  resolvers
});

export default schema;

