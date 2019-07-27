import Koa from "koa";
import { ApolloServer } from "apollo-server-koa";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const app = new Koa();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
