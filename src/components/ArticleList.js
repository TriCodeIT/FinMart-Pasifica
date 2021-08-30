import React from "react";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
  }
});

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ArticleList = ({ articles, classes }) => (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Articles
      </Typography>
      <List>
        {articles.articles.map(el => (
          <ListItem key={el.id}>
            <ListItemText primary={el.title} />
          </ListItem>
        ))}
      </List>
    </div>
  </Container>
);

const ArticleListWithStyles = withStyles(useStyles)(ArticleList);

export default connect(mapStateToProps)(ArticleListWithStyles);