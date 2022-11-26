import React from "react";
import { Story } from "@storybook/react";
import { CheckboxComponent, CheckboxProps } from "./CheckboxComponent";

export default {
  title: "Checkbox",
  component: CheckboxComponent
,
};

const Template: Story<CheckboxProps> = args => <CheckboxComponent{...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox 1",
  // value: "Checkbox 1",
  name: "checkbox1"
};
