const PORT = 3030;
const path = require('path');
const app = require('express')();

app.use('/', require('express').static(path.resolve(__dirname, '../')));

app.listen(PORT, () => {
    console.log(`Developer server now listening on 0.0.0.0:${PORT}`);
});