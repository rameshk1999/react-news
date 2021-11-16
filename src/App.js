import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import "./style.css";

export default function App() {
  const [news, setNews] = useState();
  useEffect(() => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&token=ea25fcce151136c340ba5fba9d8ab607"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);
  return (
    <div>
      <Header />
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            {news &&
              news.length > 0 &&
              news.map((card) => (
                <Box m={3} key={card.image}>
                  <NewsCard card={card} />
                </Box>
              ))}
          </Grid>
        </Grid>{" "}
      </Box>
    </div>
  );
}
