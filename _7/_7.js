/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [new Costume("黒", "./_7/costumes/黒.png", { x: 5, y: 5 })];

    this.sounds = [new Sound("ポップ", "./_7/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "難易度設定" }, this.whenIReceive)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 100);
    this.size = 500;
    this.visible = false;
    while (true) {
      this.x = this.mouse.x;
      if (this.x > 75) {
        this.x = 75;
      }
      if (this.x < -75) {
        this.x = -75;
      }
      yield;
    }
  }

  *whenIReceive() {
    yield* this.wait(0.5);
    this.visible = true;
  }
}
