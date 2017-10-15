"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + " , isSelected: " + component.isSelected);
var point = new point_1.Point(1, 2);
var x = point.x;
point.x = 10;
point.drawforClass();
