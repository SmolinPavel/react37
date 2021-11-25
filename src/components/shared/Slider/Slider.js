import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ContinuousSlider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export const Slider = () => {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <ContinuousSlider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
      {/* <ContinuousSlider
        disabled
        defaultValue={30}
        aria-label="Disabled slider"
      /> */}
    </Box>
  );
};
