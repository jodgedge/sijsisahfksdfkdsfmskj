/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./_10/costumes/コスチューム1.png", {
        x: 202,
        y: 260
      })
    ];

    this.sounds = [
      new Sound("ポップ", "./_10/sounds/ポップ.wav"),
      new Sound("決定、ボタン押下22", "./_10/sounds/決定、ボタン押下22.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -47);
    this.moveAhead();
    this.size = 175;
    this.visible = true;
    while (!this.mouse.down) {
      yield;
    }
    yield* this.startSound("決定、ボタン押下22");
    this.broadcast("難易度設定");
    this.stage.vars._5 = 175;
    for (let i = 0; i < 5; i++) {
      this.stage.vars._5 += 5;
      this.size = this.stage.vars._5;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.stage.vars._5 += -5;
      this.size = this.stage.vars._5;
      yield;
    }
    this.size = 175;
    this.visible = false;
  }
}
