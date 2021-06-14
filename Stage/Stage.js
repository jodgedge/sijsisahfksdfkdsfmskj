/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("背景1", "./Stage/costumes/背景1.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("ポップ", "./Stage/sounds/ポップ.wav")];

    this.triggers = [];

    this.vars._ = 0;
    this.vars._2 = 5;
    this.vars._3 = 1;
    this.vars._4 = 4.5;
    this.vars._5 = 175;
  }
}
