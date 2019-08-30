import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  cardLink: {
    margin: theme.spacing(1),
  },
  link: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  githubIcon: {
    backgroundColor: '#fc6d6d'
  },
}));

const cards = [
  { 
    id: 'budgetApp',
    header: 'Budget App', 
    description: 'Manage Expenses by logging each one under any category you create.',
    gif: require('../assets/BudgetApp.gif'),
    demo: 'https://budget-app-daniel-pan.herokuapp.com/',
    github: 'https://github.com/danielcpan/BudgetApp',
    technologies: ['Node.js', 'Express.js', 'Sequelize', 'Postgres', 'Mocha', 'Chai', 'React.js', 'Redux', 'Materail Ui', 'Socket.io', 'REST'],
  }, 
  {
    id: 'chatApp',
    header: 'Chat App', 
    description: 'Live Chatting App using Web Sockets (Socket.io). Connect to any channel and start talking!',
    gif: require('../assets/ChatApp.gif'),
    demo: 'https://chat-app-daniel-pan.herokuapp.com/login',
    github: 'https://github.com/danielcpan/ChatApp',
    technologies: ['Node.js', 'Express.js', 'Sequelize', 'Postgres', 'Mocha', 'Chai', 'React.js', 'Redux', 'Materail Ui', 'Socket.io', 'REST'],
  },
  {
    id: 'tinyUrlClone',
    header: 'Tiny Url Clone', 
    description: 'The frontend for TinyUrlClone. Creates a shortened redirect link to your url.',
    gif: require('../assets/TinyUrlClone.gif'),
    demo: 'https://tiny-url-clone.netlify.com/',
    github: 'https://github.com/danielcpan/TinyUrlCloneFrontEnd',
    technologies: ['Node.js', 'Express.js', 'Sequelize', 'Postgres', 'Mocha', 'Chai', 'React.js', 'Redux', 'Materail Ui', 'Socket.io', 'REST'],
  }
];

const Projects = () => {
  const classes = useStyles();

  return (
    <React.Fragment >
        <Container className={classes.cardGrid} maxWidth="lg" id="projects">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" style={{textAlign: 'center'}}>
                <span style={{borderBottom: '2px solid', borderBottomColor: '#fc6d6d'}}>Projects</span>
              </Typography>
            </Grid>
            {cards.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={4} id={card.id}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.gif}
                    title={card.header}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.header}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {card.description}
                    </Typography>
                    <Typography style={{ marginTop: 15}}>
                      Technologies Used: 
                    </Typography>
                    {card.technologies.map((tech, idx) => (
                      <Chip 
                      size="small"
                      key={idx}
                      label={tech}
                      className={classes.chip} />
                    ))}                    
                  </CardContent>
                  <CardActions>
                    <Link href={card.demo} target="_blank" className={classes.cardLink}>
                    <Avatar className={classes.emailIcon}>
                        <FontAwesomeIcon icon={faEye} />
                      </Avatar>
                    </Link>
                                        
                    <Link href={card.github} target="_blank" className={classes.cardLink}>
                    <Avatar className={classes.githubIcon}>
                        <FontAwesomeIcon icon={faGithub} />
                      </Avatar>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
  );
}

export default Projects;