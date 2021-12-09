import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { ObjectId } from 'mongodb';
import { connectDatabase, getSessions } from './app/utils/database';

if (!process.env.MONGODB_URI) {
  throw new Error("Couldn't connect to the database");
}

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

/// UPDATE ONE SESSION
app.patch('/api/sessions/:id', async (request, response) => {
  console.log('Update incoming');
  const { id } = request.params;
  const { newLocationName } = request.body;
  const existingLocation = await getSessions().updateOne(
    { _id: new ObjectId(id) },
    { $set: { locationName: newLocationName } }
  );
  console.log(existingLocation);
  if (existingLocation) {
    response.status(200).send(`${existingLocation} updated!`);
  } else {
    response.status(409).send(`setTimer duration was not found`);
  }
  response.end();
});

///DELETE ONE SESSION
app.delete('/api/sessions/:id', async (request, response) => {
  const { id } = request.params;
  const findEntryToDelete = await getSessions().deleteOne({
    _id: new ObjectId(id),
  });
  console.log(findEntryToDelete);
  if (findEntryToDelete.deletedCount !== 0) {
    response.status(200).send('Successfully deleted');
  } else {
    response.send('Unable to delete');
  }
});

/// ADD ONE SESSION
app.post('/api/sessions/', async (request, response) => {
  const body = request.body;
  await getSessions().insertOne(body);
  response.status(200).send('Test succeeded!');
});

/// GET ALL SESSIONS
app.get('/api/sessions', async (_request, response) => {
  const allCharacters = await getSessions().find({}).toArray();
  console.log('getAllSessions');
  response.status(200).send(allCharacters);
});

/// GET setTimer entry
app.get('/api/gettimer', async (_request, response) => {
  const allCharacters = await getSessions().find({}).toArray();
  console.log('getAllSessions');
  response.status(200).send(allCharacters);
});

/// OTHER

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' });
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

connectDatabase(process.env.MONGODB_URI || '').then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
