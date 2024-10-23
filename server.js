const express = require('express');
const app = express();

// TODO move to config
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('listening on port 3000');
});
