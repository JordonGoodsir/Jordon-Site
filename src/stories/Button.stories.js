import { setup } from 'vue-class-component';
import CustomButton from '../components/utils/CustomButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Custom Button',
  component: CustomButton,
  tags: ['autodocs'],
};

const Template = (args) => ({ 
  components: { CustomButton },
  setup() { 
    return {...args}
  },
  template: '<CustomButton>hello</CustomButton>'
})

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = () => Template.bind({})
