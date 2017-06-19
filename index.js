import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import schema from './schema';
import queries from './queries';

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql', query: queries }));

app.listen(3500, () => {
  console.log('Graphql server listening at port 3500.');
  console.log('To explore existing schema open:');
  console.log('http://localhost:3500/graphiql');
});
