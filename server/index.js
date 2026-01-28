import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/api/movies/popular", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      { params: { api_key: process.env.TMDB_API_KEY } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "TMDB API error" });
  }
});

app.get('/', (req, res) => {
    res.send('Movie API 서버가 실행 중입니다.');
  });

  app.get('/api/movies/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          params: {
            api_key: process.env.TMDB_API_KEY,
            language: "ko"
          }
        }
      );
      res.json(response.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      res.status(500).json({ error: 'Failed to fetch movie details' });
    }
  });
  


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

