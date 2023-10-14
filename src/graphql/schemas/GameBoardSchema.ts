import graphql, { buildSchema } from "graphql";

const ColorType = new graphql.GraphQLEnumType({
  name: "Color",
  values: {
    WHITE: { value: "white" },
    BLACK: { value: "black" },
  },
});

const gameBoardSchema = buildSchema(`
  type Query {
    humanColor: Color!,
    aiColor: Color!,
  }
`);
