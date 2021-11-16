import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Paper } from "@mui/material";

export default function NewsCard({ card }) {
  console.log(card);
  return (
    <Paper>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={card.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={() => window.open(card.url)}
          >
            Read More ...
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
