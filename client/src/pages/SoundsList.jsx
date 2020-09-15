import React, { Component } from 'react';
import { Box, Heading, Grid } from 'grommet';
import api from '../api';
import ListItem from '../components/ListItem';
import { ScaleLoader } from 'react-spinners';

class SoundsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getSounds().then((sounds) => {
      this.setState({
        sounds: sounds.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { sounds, isLoading } = this.state;
    return (
      <Box margin="medium" align="center">
        <Heading color="brand" textAlign="start">
          Sounds
        </Heading>
        {isLoading ? (
          <ScaleLoader color="#7D4CDB" />
        ) : (
          <Grid gap="medium">
            {sounds.map((sound) => (
              <ListItem item={sound} key={`${sound._id}`} />
            ))}
          </Grid>
        )}
      </Box>
    );
  }
}

export default SoundsList;
