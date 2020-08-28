import { Color } from "../sharedTypes";

// Generated with util/create-component.js
export interface SwitchProps {
  color: Color;
}

export interface FullSwitchProps extends SwitchProps {
  variant?: SwitchVariant;
}

export type SwitchVariant = "3d";
