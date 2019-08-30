import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  footer: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  link: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },  
  linkedInIcon: {
    backgroundColor: '#fc6d6d'
  },
  githubIcon: {
    backgroundColor: '#fc6d6d'
  },
  emailIcon: {
    backgroundColor: '#fc6d6d'
  },  
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.footer}>
      <Grid item>
        <Link href="https://github.com/danielcpan" target="_blank" className={classes.link}>
          <Avatar className={classes.githubIcon}>
            <FontAwesomeIcon icon={faGithub} />
          </Avatar>
        </Link>
      </Grid>

      <Grid item>
        <Link href="https://www.linkedin.com/in/danielcpan/" target="_blank" className={classes.link}>
        <Avatar className={classes.linkedInIcon}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Avatar>
        </Link>
      </Grid>

      <Grid item>
        <Link href="mailto:daniecpan@gmail.com" target="_blank" className={classes.link}>
          <Avatar className={classes.emailIcon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Avatar>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Footer;