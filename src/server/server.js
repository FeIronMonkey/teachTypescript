import express from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// Middleware to add .js extension
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    return next();
  }

  const filePath = path.join(__dirname, 'dist', req.path);
  const jsFilePath = `${filePath}.js`;

  fs.access(jsFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      return next();
    }
    req.url += '.js';
    next();
  });
});

app.get('/', (_, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
