const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Deu bom!" });
});

app.listen(3333);
