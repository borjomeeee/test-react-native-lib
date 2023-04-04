import {View} from 'react-native';
import {Button} from '../../../src';

export default {
  title: 'Button',
  component: Button,
  args: {
    title: 'Default title',
  },
  decorators: [
    Story => (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Story />
      </View>
    ),
  ],
};

export const Basic = {};
export const Custom = {
  args: {
    title: 'Custom background',
    titleStyle: {
      color: '#ffffff',
    },

    style: {
      backgroundColor: '#000000',
    },
  },
};
