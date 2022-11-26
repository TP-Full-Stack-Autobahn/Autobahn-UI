import React from "react";
import { Story } from "@storybook/react";
import { RadioComponent, RadioProps } from "./RadioComponent";

export default {
  title: "Radio",
  component: RadioComponent
,
};

const Template: Story<RadioProps> = args => <RadioComponent{...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Custom label",
  value: "Value",
  name: "custom"
};
