const app = require('./src/app');

const port = 3333;

app.listen(port, () => console.log("http://localhost:" + port));