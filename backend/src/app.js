import express from 'express';
import registrator from './registrator.js';

const app = express();

app.use('/api/registrator', registrator);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});