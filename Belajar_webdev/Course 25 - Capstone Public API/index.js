import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/info");
    const jokeTypes = response.data.jokes.types;
    const categories = response.data.jokes.categories;

    res.render("index", {
      types: jokeTypes,
      categories: categories,
      joke: null
    });
  } catch (error) {
    res.render("index", {
      types: [],
      categories: [],
      joke: null 
    });
  }
});


app.post("/", async (req, res) => {
  const { jokeType, category } = req.body;
  console.log("Form input:", req.body);
  try {
    const jokeRes = await axios.get(`https://v2.jokeapi.dev/joke/${category}?type=${jokeType}`);
    const joke = jokeRes.data;

    const response = await axios.get("https://v2.jokeapi.dev/info");
    const jokeTypes = response.data.jokes.types;
    const categories = response.data.jokes.categories;
    

    res.render("index", {
      types: jokeTypes,
      categories: categories,
      joke: joke
    });
  } catch (error) {
    console.error("Joke API Error:", error.response?.data || error.message);
    res.render("index", {
    types: [],
    categories: [],
    joke: { type: "single", joke: "Terjadi kesalahan." }
  });
  }
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
