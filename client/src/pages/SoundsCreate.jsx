import React, { Component } from 'react';
import {
  Box,
  Heading,
  Form,
  FormField,
  TextInput,
  Select,
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
} from 'grommet';
import Dropzone from 'react-dropzone';
import api from '../api';
import { readFileDataAsBase64 } from '../utils/fileReader';

class SoundsCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  create = async (value) => {
    const { files } = this.state;
    const newFile = await readFileDataAsBase64(files[0]);
    console.log(newFile.length);
    const payload = {
      name: value.name,
      downloads: 0,
      likes: 0,
      audio: newFile,
      type: value.type,
      creator_id: '5f4842a5b6be202a5a36ce85',
    };
    console.log(payload);

    api.createSound(payload).then((res) => {
      console.log('Sound created successfully');
    });
  };

  fileDrop = async (items) => {
    console.log(items);
    this.setState((prevState) => ({
      files: [...prevState.files, ...items],
    }));
  };

  render() {
    const { files } = this.state;
    return (
      <Box margin="medium" align="center">
        <Heading color="brand" textAlign="start">
          Create Sound
        </Heading>
        <Form onSubmit={({ value }) => this.create(value)}>
          <Card width="large" background="brand">
            <CardBody pad="medium">
              <FormField name="name" label="Name">
                <TextInput id="textinput-id" name="name" />
              </FormField>
              <FormField name="type" label="Type">
                <Select
                  id="selectinput-id"
                  name="type"
                  options={['Sound', 'Kit']}
                  placeholder="Choose sound type"
                />
              </FormField>
              <Box gap="medium">
                <Dropzone onDrop={(files) => this.fileDrop(files)}>
                  {({ getRootProps, getInputProps, acceptedFiles }) => (
                    <Box
                      {...getRootProps()}
                      border={{
                        color: 'border',
                        size: 'medium',
                        style: 'dashed',
                        side: 'all',
                      }}
                    >
                      <input {...getInputProps()} />
                      <Text margin="medium">Add .wav files here</Text>
                    </Box>
                  )}
                </Dropzone>
                <Box direction="row" gap="medium">
                  {files.map((file) => (
                    <Box
                      key={file.path}
                      background="accent-1"
                      elevation="none"
                      height="small"
                      width="small"
                      round="small"
                      pad="medium"
                    >
                      {file.path}
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardBody>
            <CardFooter pad="medium">
              <Button type="submit" primary label="Submit" />
            </CardFooter>
          </Card>
        </Form>
      </Box>
    );
  }
}

export default SoundsCreate;
