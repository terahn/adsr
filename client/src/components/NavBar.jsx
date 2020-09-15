import React from 'react';
import { Header, Anchor, Box } from 'grommet';

import Links from './Links';

const NavBar = () => {
  return (
    <Header pad="medium" height="xsmall">
      <Anchor href="/">adsr.dev</Anchor>
      <Box justify="end">
        <Links />
      </Box>
    </Header>
  );
};

export default NavBar;
