/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("簡単", "./_9/costumes/簡単.png", { x: 85, y: 45 }),
      new Costume("普通", "./_9/costumes/普通.png", { x: 85, y: 45 }),
      new Costume("難しい", "./_9/costumes/難しい.png", { x: 85, y: 45 })
    ];

    this.sounds = [new Sound("ポップ", "./_9/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "難易度設定" }, this.whenIReceive)
    ];
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.size = 120;
        if (this.mouse.down) {
          yield* this.startSound("ポップ");
          if (this.costume.name == "簡単") {
            this.stage.vars._2 = 5;
            this.stage.vars._3 = 1;
            for (let i = 0; i < 2; i++) {
              this.size += 10;
              yield;
            }
            yield* this.wait(0.5);
            this.broadcast("start");
            this.deleteThisClone();
          }
          if (this.costume.name == "普通") {
            this.stage.vars._2 = 7;
            this.stage.vars._3 = 1;
            for (let i = 0; i < 2; i++) {
              this.size += 10;
              yield;
            }
            yield* this.wait(0.5);
            this.broadcast("start");
            this.deleteThisClone();
          }
          if (this.costume.name == "難しい") {
            this.stage.vars._2 = 10;
            this.stage.vars._3 = 1;
            for (let i = 0; i < 2; i++) {
              this.size += 10;
              yield;
            }
            yield* this.wait(0.5);
            this.broadcast("start");
            this.deleteThisClone();
          }
        }
      } else {
        this.size = 100;
      }
      if (this.stage.vars._3 == 1) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceive() {
    yield* this.wait(0.5);
    this.stage.vars._3 = 0;
    this.visible = false;
    this.costume = "簡単";
    this.goto(-100, 0);
    for (let i = 0; i < 3; i++) {
      this.createClone();
      this.x += 100;
      this.costumeNumber += 1;
      yield;
    }
  }
}
