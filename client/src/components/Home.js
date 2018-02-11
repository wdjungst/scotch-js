import React, { Component } from 'react';
import { Header, Segment, Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';

class Home extends Component {

  response = (allowed = true) => {
    allowed ? this.props.dispatch(setFlash('Welcome!', 'green')) :
    this.props.dispatch(setFlash('Yeah that\'s okay NBD', 'green'))
    this.props.history.push('/next')
  }

  render() {
    return (
      <Segment style={styles.ageCheckModal}>
        <Header as='h1' style={styles.ageCheckModalHeader}>
          Warning!
        </Header>
        <Header as='h3' style={styles.ageCheckModalHeader}>
          You have to be 21 to enter
        </Header>
        <Grid style={styles.buttonGrid}>
          <Button
            style={styles.btn}
            onClick={this.response}>
            Yes, I am 21 or older
          </Button>
          <Button
            style={styles.btn}
            onClick={() => this.response(false)}>
            No, I am under 21
          </Button>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  ageCheckModal: {
    width: '50%',
    height: '400px',
    margin: '5% auto',
    textAlign: 'center',
    background: '#e55050',
    border: '10px solid red'
  },
  ageCheckModalHeader: {
    margin: '5%',
    color: 'white'
  },
  buttonGrid: {
    margin: '20%',
    justifyContent: 'space-around',
  },
  btn: {
    width: '40%'
  }
}

export default connect()(Home);
