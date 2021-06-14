/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./_8/costumes/コスチューム1.png", {
        x: 24,
        y: 40
      }),
      new Costume("コスチューム2", "./_8/costumes/コスチューム2.png", {
        x: 29,
        y: 32
      }),
      new Costume("コスチューム3", "./_8/costumes/コスチューム3.png", {
        x: 21,
        y: 32
      })
    ];

    this.sounds = [new Sound("ポップ", "./_8/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start2" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {
    this.costume = "コスチューム3";
    this.moveAhead();
    this.size = 100;
    this.visible = true;
    this.goto(0, 0);
    this.direction = -90;
    for (let i = 0; i < 12; i++) {
      this.direction += 15;
      this.size += 10;
      yield;
    }
    yield* this.wait(0.5);
    this.costume = "コスチューム2";
    this.size = 100;
    this.goto(0, 0);
    this.direction = -90;
    for (let i = 0; i < 12; i++) {
      this.direction += 15;
      this.size += 10;
      yield;
    }
    yield* this.wait(0.5);
    this.costume = "コスチューム1";
    this.size = 100;
    this.goto(0, 0);
    this.direction = -90;
    for (let i = 0; i < 12; i++) {
      this.direction += 15;
      this.size += 10;
      yield;
    }
    yield* this.wait(0.5);
    this.visible = false;
    this.broadcast("go!");
  }

  *whenIReceiveStart2() {
    this.costume = "コスチューム3";
    this.moveAhead();
    this.size = 100;
    this.visible = true;
    this.goto(0, 0);
    this.direction = -90;
    for (let i = 0; i < 12; i++) {
      this.direction += 15;
      this.size += 10;
      yield;
    }
    yield* this.wait(0.5);
    this.costume = "コスチューム2";
    this.size = 100;
    this.goto(0, 0);
    this.direction = -90;
    for (let i = 0; i < 12; i++) {
      this.direction += 15;
      this.size += 10;
      yield;
    }
    yield* this.wait(0.5);
    this.costume = "コスチューム1";
    this.size = 100;
    this.goto(0, 0);
    this.direction = -90;
    for (let i = 0; i < 12; i++) {
      this.direction += 15;
      this.size += 10;
      yield;
    }
    yield* this.wait(0.5);
    this.visible = false;
    this.broadcast("go!2");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.moveAhead();
  }
}
