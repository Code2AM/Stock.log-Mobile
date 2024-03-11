import React from 'react';
import { Box, Center, Select } from 'native-base';

const LabelsSelectItem = ({ labels }) => {
  return (
    <Center>
      <Box maxW="300">
        <Select
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="라벨 선택"
        >
          {labels.map((label) => (
            <Select.Item key={label.labelsId} label={label.labelsTitle} value={label.labelsId} />
          ))}
        </Select>
      </Box>
    </Center>
  );
};

export default LabelsSelectItem;