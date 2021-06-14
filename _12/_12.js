/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("タイトル2", "./_12/costumes/タイトル2.png", { x: 94, y: 45 })
    ];

    this.sounds = [new Sound("ポップ", "./_12/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.wait(0.01);
    this.goto(0, 70);
    this.direction = 65;
    this.visible = true;
    this.size = 200;
    this.moveAhead();
    this.stage.vars._4 = 0;
    while (true) {
      for (let i = 0; i < 10; i++) {
        this.stage.vars._4 += 0.5;
        this.direction += this.stage.vars._4;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.stage.vars._4 += -0.5;
        this.direction += this.stage.vars._4;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.stage.vars._4 += -0.5;
        this.direction += this.stage.vars._4;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.stage.vars._4 += 0.5;
        this.direction += this.stage.vars._4;
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.goto(0, -50);
    this.moveAhead();
    this.size = 200;
    this.visible = true;
    while (!this.mouse.down) {
      yield;
    }
    this.broadcast("難易度設定");
    this.size = 100;
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
