// Generated with util/create-component.js
import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { CSwitch } from "@coreui/react";
import { SwitchProps, FullSwitchProps } from "./Switch.types";
import { colorArray } from "../sharedTypes";

export default {
  title: "Components/Switch",
  argTypes: {
    color: { control: "select", options: ["primary", "secondary"] },
  },
};

const Template: Story<SwitchProps> = (args: SwitchProps) => {
  return (
    <CSwitch
      className={"mx-1"}
      color={args.color}
      defaultChecked
      onChange={(e: any) => console.log(e.target.checked)}
    />
  );
};

export const Normal = Template.bind({});
Normal.args = {
  color: "primary",
};

const VariantTemplate: Story<FullSwitchProps> = (args) => {
  return (
    <CSwitch
      className={"mx-1"}
      color={args.color}
      variant={args.variant}
      defaultChecked
      onChange={(e: any) => console.log(e.target.checked)}
    />
  );
};

export const Variant = VariantTemplate.bind({});
Variant.args = {
  color: "primary",
  variant: "3d",
};
