const { GraphQLServer } = require("graphql-yoga");
const { createWriteStream } = require("fs");

const typeDefs = `
  scalar Upload

  type Mutation {
    uploadFile(file: Upload!): Boolean
  }

  type Query {
    hello: String
  }
`;

const storeUpload = ({ stream, filename }) =>
  new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(filename))
      .on("finish", () => resolve())
      .on("error", reject)
  );

const resolvers = {
  Mutation: {
    uploadFile: async (parent, { file }) => {

      console.log(123);
      console.log(file);
      const { stream, filename } = await file;
      console.log(stream);
      console.log(filename);
      await storeUpload({ stream, filename });
      return true;
    }
  },
  Query: {
    hello: () => "hi"
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start({port:4001},() => console.log("Server is running on localhost:4001"));
