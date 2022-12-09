import { buildSchema } from "graphql"

const schema = buildSchema(`
    input UserInput {
        name: String!
        username: String!
        password: String!
    }

    type User {
        id: Int!
        name: String!
        username: String!
        password: String!
        permissions: Int!
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }

    type Query {
        getUserByUsername(username: String!): User
        getUserByLogin(username: String!, password: String!): User
        getUserById(id: String): User
        getUsers: [User]
    }
`)

export default schema;