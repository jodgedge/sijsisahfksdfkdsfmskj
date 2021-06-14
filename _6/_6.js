/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("空白", "./_6/costumes/空白.svg", { x: 0, y: 0 }),
      new Costume("ステージ1", "./_6/costumes/ステージ1.png", {
        x: 96,
        y: 160
      }),
      new Costume("ステージ2", "./_6/costumes/ステージ2.png", { x: 96, y: 160 })
    ];

    this.sounds = [new Sound("ポップ", "./_6/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "go!" }, this.whenIReceiveGo),
      new Trigger(Trigger.BROADCAST, { name: "go!2" }, this.whenIReceiveGo2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start2" },
        this.whenIReceiveStart2
      )
    ];
  }

  *whenIReceiveGo() {
    this.visible = false;
    this.goto(0, -300);
    this.costume = "空白";
    this.size = 500;
    this.costume = "ステージ1";
    this.visible = true;
    while (true) {
      if (this.y > 1050) {
        this.goto(0, -300);
        this.costume = "ステージ2";
        this.broadcast("start2");
        return;
      } else {
        if (this.touching(this.sprites["_7"].andClones())) {
          this.broadcast("start");
          this.goto(0, -300);
          this.costume = "空白";
          this.size = 500;
          this.costume = "ステージ1";
          this.visible = true;
          return;
        } else {
          this.y += this.stage.vars._2;
        }
      }
      yield;
    }
  }

  *whenIReceiveGo2() {
    this.visible = false;
    this.goto(0, -300);
    this.costume = "空白";
    this.size = 500;
    this.costume = "ステージ2";
    this.visible = true;
    while (true) {
      if (this.y > 1050) {
        this.goto(0, -300);
        this.costume = "ステージ2";
        return;
      } else {
        if (this.touching(this.sprites["_7"].andClones())) {
          this.goto(0, -300);
          this.costume = "空白";
          this.size = 500;
          this.costume = "ステージ2";
          this.visible = true;
          this.broadcast("start2");
          return;
        } else {
          this.y += this.stage.vars._2;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, -300);
    this.costume = "空白";
    this.size = 500;
    this.costume = "ステージ1";
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenIReceiveStart2() {
    this.visible = true;
  }
}
