import React from "react";
import { Story } from "@storybook/react";
import { RadioComponent, InputProps } from "./RadioComponent";

export default {
  title: "Radio",
  component: RadioComponent
,
};

const Template: Story<InputProps> = args => <RadioComponent{...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Custom label",
  type: "radio",
  options: {
    "option_1": "Option 1",
    "option_2": "Option 2",
    "option_3": "Option 3",
  },
  name: "custom"
};
