import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import Link from 'next/link'
import {Navigation} from "@/components/Navigation";

const navLinks = [{
  href: '/dashboard',
  name: 'Dashboard'
},{
  href: '/subject',
  name: 'Subject'
}]


export default function Home() {
  return (
    <Container maxWidth="lg">
      <Navigation navLinks={navLinks}/>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Link href="/blog/winters">Winters' Blog</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}