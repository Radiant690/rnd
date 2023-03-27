import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  item: {
    padding: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} className={classes.item}>
            <Typography variant="h6" gutterBottom>About Us</Typography>
            <Typography variant="body2" color="textSecondary">
              We are a team of researchers dedicated to advancing the field of academia through innovative research and collaboration.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.item}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2" color="textSecondary">
              Email: contact@academiaresearch.com<br />
              Phone: +1 (555) 555-5555<br />
              Address: 123 Main St, Anytown USA 12345
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={classes.item}>
            <Typography variant="h6" gutterBottom>Connect With Us</Typography>
            <Typography variant="body2" color="textSecondary">
              <Link href="#">Facebook</Link><br />
              <Link href="#">Twitter</Link><br />
              <Link href="#">LinkedIn</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
