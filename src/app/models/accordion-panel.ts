import { Plugin } from "./plugin";

export class AccordionPanel {
  CategoyHeading!: string;
  CategoyId!: number;
  CategoyText!: string;
  ExtraSettings!: string;
  IsMandatory!: boolean;
  Localization!: string;
  PluginList!: Array<Plugin>;
}
