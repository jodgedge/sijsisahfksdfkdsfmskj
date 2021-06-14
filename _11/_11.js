/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("危険!", "./_11/costumes/危険!.png", { x: 12, y: 40 }),
      new Costume("岩1", "./_11/costumes/岩1.png", { x: 9, y: 8 }),
      new Costume("岩2", "./_11/costumes/岩2.png", { x: 10, y: 9 })
    ];

    this.sounds = [new Sound("ポップ", "./_11/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "go!" }, this.whenIReceiveGo),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "go!2" }, this.whenIReceiveGo2)
    ];
  }

  *whenIReceiveGo() {}

  *startAsClone() {
    this.y = -150;
    this.visible = true;
    this.costume = "" + "岩" + this.random(1, 2);
    while (!this.touching(this.sprites[undefined].andClones())) {
      this.y += 10;
      this.direction += 15;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGo2() {}
}
