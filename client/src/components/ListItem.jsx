import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  Box,
} from 'grommet';
import { Favorite, Play, Download } from 'grommet-icons';
import WaveSurfer from 'wavesurfer.js';

class ListItem extends React.Component {
  componentDidMount() {
    const { item } = this.props;

    console.log(item._id);
    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: `#waveform${item._id}`,
      backend: 'WebAudio',
      height: 80,
      progressColor: '#6FFFB0',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });

    this.waveform.load(this.props.item.audio);
  }
  render() {
    const { item } = this.props;
    console.log(item);
    const color = item.type !== 'Kit' ? 'brand' : 'neutral-1';

    return (
      <Card width="large" background={color}>
        <CardHeader pad="medium">
          <Heading level="3" margin="none">
            {item.name}
          </Heading>
          {item.type}
        </CardHeader>
        <CardBody pad="medium">
          <div id={`waveform${item._id}`}></div>
        </CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Box direction="row" gap="small">
            <Button icon={<Favorite color={color} />} hoverIndicator />
            <Button icon={<Download color={color} />} hoverIndicator />
            <Button
              icon={<Play color={color} />}
              hoverIndicator
              onClick={() => {
                this.waveform.playPause();
              }}
            />
          </Box>

          <Box direction="row" gap="medium">
            <Text color={color} weight="bold">
              Likes: {item.likes}
            </Text>
            <Text color={color} weight="bold">
              Downloads: {item.downloads}
            </Text>
          </Box>
        </CardFooter>
      </Card>
    );
  }
}

export default ListItem;
