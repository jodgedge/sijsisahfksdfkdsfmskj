import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _6 from "./_6/_6.js";
import _7 from "./_7/_7.js";
import _8 from "./_8/_8.js";
import _9 from "./_9/_9.js";
import _10 from "./_10/_10.js";
import _11 from "./_11/_11.js";
import _12 from "./_12/_12.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  _6: new _6({
    x: 0,
    y: -300,
    direction: 90,
    costumeNumber: 2,
    size: 500,
    visible: false,
    layerOrder: 2
  }),
  _7: new _7({
    x: -75,
    y: 100,
    direction: 90,
    costumeNumber: 1,
    size: 500,
    visible: false,
    layerOrder: 1
  }),
  _8: new _8({
    x: 0,
    y: 0,
    direction: -15,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 5
  }),
  _9: new _9({
    x: 200,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  _10: new _10({
    x: 0,
    y: -47,
    direction: 90,
    costumeNumber: 1,
    size: 175,
    visible: true,
    layerOrder: 6
  }),
  _11: new _11({
    x: 44,
    y: -160,
    direction: 90,
    costumeNumber: 1,
    size: 500,
    visible: false,
    layerOrder: 4
  }),
  _12: new _12({
    x: 0,
    y: 70,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 7
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
