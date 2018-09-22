const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
const port = process.env.PORT || 3000;
console.log(port);


app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


app.listen(port, ()=> {
  console.log(`listening at ${port}`);
});
