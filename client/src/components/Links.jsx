import React from 'react';
import { Box, Button } from 'grommet';

const Links = () => {
  return (
    <Box justify="end" direction="row" gap="medium">
      <Button default label="Sounds" href="/sounds/list"></Button>
      <Button default label="Create Sound" href="/sounds/create"></Button>
    </Box>
  );
};

export default Links;
