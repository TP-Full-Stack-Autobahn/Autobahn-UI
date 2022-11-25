import React from "react";
import { Story } from "@storybook/react";
import { ButtonComponent, ButtonProps } from "./ButtonComponent";

export default {
  title: "Button",
  component: ButtonComponent
,
};

const Template: Story<ButtonProps> = args => <ButtonComponent{...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  variant: "danger",
  shape: "rounded",
};
