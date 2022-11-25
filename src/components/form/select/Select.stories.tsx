import React from "react";
import { Story } from "@storybook/react";
import { SelectComponent, SelectProps } from "./SelectComponent";

export default {
  title: "Select",
  component: SelectComponent
,
};

const Template: Story<SelectProps> = args => <SelectComponent{...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Custom label",
  options: {
    "key1" : "options 1",
    "key3" :"options 2",
     "key4" :"options 3",
    "key2" : "options 4"
  },
  name: "custom",
};
