import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import format from 'date-fns/format';

import { Grid, Typography, Link, Grow } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: 30
  },
  terminalAppBarButton: {
    margin: 4, 
    height: 12, 
    width: 12, 
    borderRadius: 10,
  },
  terminalAppBar: {
    borderTopLeftRadius: 8, 
    borderTopRightRadius: 8, 
    paddingLeft: 5,
    backgroundColor: '#dbdbdb',
  },
  terminalAppBarHeader: {
    textAlign: 'center', 
    paddingRight: 90, 
    fontSize: 12, 
    paddingTop: 3, 
    color: 'black',
  },
  terminalBody: {
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8, 
    padding: 5,
    backgroundColor: 'black',
    color: 'white',
    height: '90vh',
    width: '90vw',   
  },
  close: {
    backgroundColor: '#ee5c54', 
  },
  minimize: {
    backgroundColor: '#f7bd44'
  },  
  maximize: {
    backgroundColor: '#5eca42'
  },
  link: {
    color: '#fc6d6d'
  }
});

class Terminal extends React.Component {
  state = {
    text: '',
    scriptIndex: 0,
    messageIndex: 0,
    date: format(new Date(), 'eee MMM dd HH:mm:ss'),
    zoom: false,
    script: [
      { type: 'input', preface: 'Daniel-Pans-MBP~/Documents/WebsitePorfolio$ ', msg: 'node' },
      { type: 'response', msg: "Welcome to Node.js v12.4.0." },
      { type: 'input', preface: '> ', msg: "const { aboutMe, projects } = require('./WebsitePortfolio')" },
      { type: 'input', preface: '> ', msg: 'aboutMe()' },
      { type: 'response', msg: "Hi! I'm Daniel Pan and I'm a Software Developer based in Los Angeles, California! Check out my work! 😏" },
      { type: 'input', preface: '> ', msg: 'listProjects()' }
    ]
  }

  componentDidMount() {
    this.setState({ zoom: true })
    setTimeout(this.typeWriter, 500);
  }

  typeWriter = () => {
    const { script, scriptIndex, messageIndex } = this.state

    if (!script[scriptIndex]) return;

    if (script[scriptIndex].type === 'input' && messageIndex < script[scriptIndex].msg.length) {
      if (messageIndex === 0 && script[scriptIndex].preface) {
        this.setState(prevState => ({ text: prevState.text += script[scriptIndex].preface }))  
      }
      this.setState(prevState => ({ text: prevState.text += script[scriptIndex].msg[messageIndex] }))
      this.setState(prevState => ({ messageIndex: prevState.messageIndex += 1 }))
      setTimeout(this.typeWriter, 10);
    } else if (script[scriptIndex].type === 'response') {
      this.setState(prevState => ({ text: prevState.text += script[scriptIndex].msg }))
      this.setState(prevState => ({ text: prevState.text += ' \n ' }))
      this.setState({ messageIndex: 0 })
      this.setState(prevState => ({ scriptIndex: prevState.scriptIndex += 1 }))
      setTimeout(this.typeWriter, 150);
    }
    else {
      this.setState(prevState => ({ text: prevState.text += ' \n ' }))
      this.setState({ messageIndex: 0 })
      this.setState(prevState => ({ scriptIndex: prevState.scriptIndex += 1 }))
        setTimeout(this.typeWriter, 500);
    }    
  }

  render() {
    const { classes } = this.props;

    return (
      <Grow in={this.state.zoom}>
        <div className={classes.root}>
        <Grid container id="terminal-app-bar" className={classes.terminalAppBar}>
            <Grid item xs={3} sm={2} md={1}>
              <Grid container>
                <Grid item className={`${classes.terminalAppBarButton} ${classes.close}`} />
                <Grid item className={`${classes.terminalAppBarButton} ${classes.minimize}`} />
                <Grid item className={`${classes.terminalAppBarButton} ${classes.maximize}`} />
              </Grid>
            </Grid>
            <Grid item xs={9} sm={10} md={11}>
              <div className={classes.terminalAppBarHeader}>Daniel-Pan ─ bash ─ 202x60</div></Grid>
            </Grid>
            <Grid container id="terminal-body" className={classes.terminalBody}>
              <Grid item>
                <Typography>
                  {`Last login: ${this.state.date} on ttys000`}
                </Typography>

                {this.state.text.split(' \n ').map((item, idx) => (
                  <Typography key={idx}>{item}</Typography>)
                )}
                {(this.state.scriptIndex === 6) && (
                  <div>
                    <Link href="#budgetApp">
                      <Typography className={classes.link}>BudgetApp</Typography>
                    </Link>
                    <Link href="#chatApp">
                      <Typography className={classes.link}>ChatApp</Typography>
                    </Link>
                    <Link href="#tinyUrlClone">
                      <Typography className={classes.link}>TinyUrlClone</Typography>
                  </Link>
                </div>                              
              )}
            </Grid>
          </Grid>
        </div>
      </Grow>
    )
  }
}

export default withStyles(styles)(Terminal);
