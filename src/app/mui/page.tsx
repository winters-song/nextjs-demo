// app/page.js - no directives needed
"use client"

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";

export default function MUI() {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~</Typography>
            <Button variant="contained" onClick={() => alert("hello")}>Click Me</Button>
          </Card>
        </Box>
      </Container>
    </main>
  );
}

