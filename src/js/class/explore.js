import Animate from './explore/animate';
import Tool from './explore/tool';

// 未解决的坑：1同时只能操作一个目标2目标移动时不能进行其他操作 跳转除外
// 待实现旋转动画和下拉菜单
/*
  ajax获取图片列表并渲染
  创建一个oldL数组用来保存li的DOM对象
  创建一个列表newL用来保存从oldL移除的对象
  遍历oldL为每个li对象绑定touchstart事件
  handleStart
  1.获取当前触摸列表的首个元素 并记录当前触摸点Spoint的坐标
  2.计算出Spoint距离li边框的距离innerWidth,innerHeight
  3.为当前元素绑定touchmove和touchend事件
  handlemove
  1.计算出当前的touch对象top left值
  handleEnd
  1.isFling为true则沿当前方向移出屏幕直至消失
  2.isFling为false,x距离移动>30px ? 目标对象沿滑动的方向直到消失 : 返回原来位置
  消失意味者当前对象从oldL被push到数组newL中 同时记录移出时的方向
  当且仅当点击back按钮时 前一对象才按其记录的反方向返回原位(即从newL中unshift到oldL)
*/
function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

function mix(...mixins) {
  class Mix {}

  for (let mixin of mixins) {
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }

  return Mix;
}

class Explore extends mix(Animate, Tool) {
  constructor() {
    super();
    this.startX = null;
    this.startY = null;
    this.start = null;
  }

  init(oldL) {
    this.oldL = oldL;
    this.newL = [];
    const self = this;
    this.oldL.forEach((item) => {
      item.addEventListener('touchstart', this.handleStart.bind(self), false);
      item.addEventListener('touchmove', this.handleMove.bind(self), false);
      item.addEventListener('touchend', this.handleEnd.bind(self), false);
    });
  }

  handleStart(e) {
    // 阻止默认的滚动
    e.preventDefault();
    // 触摸的开始时间和结束时间
    this.start = Date.now();
    // 当前触摸列表中的第一个对象
    this.point = e.touches[0];
    // point的初始坐标
    this.startX = this.point.clientX;
    this.startY = this.point.clientY;
    // 目标对象的初始left top
    this.startLeft = e.target.offsetLeft;
    this.startTop = e.target.offsetTop;
    // console.log(this.startLeft, this.startTop);
    /* console.log(`starX: ${startX}, startY:${startY}`) */
    // 触摸点距离边框的width and height;
    this.innerW = this.startX - e.target.offsetLeft;
    this.innerH = this.startY - e.target.offsetTop;
  }

  handleMove(e) {
    e.preventDefault();
    e.target.style.top = e.touches[0].clientY - this.innerH + 'px';
    e.target.style.left = e.touches[0].clientX - this.innerW + 'px';
  }

  handleEnd(e) {
    e.preventDefault();
    const end = Date.now();
    // 手指离开屏幕时点的坐标
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    // 从触摸到离开，手指滑动的距离
    const x = endX - this.startX;
    const y = endY - this.startY;

    // 手指离开屏幕,目标对象的left,top
    this.left = e.target.offsetLeft;
    this.top = e.target.offsetTop;

    // 角度值
    const angle = this.getAngle(x, y);

    // // 方向 右下1 左下2 左上3 右上4
    // const position = getPosition(angle);

    // 屏幕的宽高
    const xMax = document.body.clientWidth;
    const yMax = document.body.clientHeight;
    // 对象沿当前方向移动的单位
    const Vx = Math.cos(angle);
    const Vy = Math.sin(angle);
    // 移出屏幕时的距离（可调）
    const dx = Vx * xMax + this.left;
    const dy = Vy * yMax + this.top;

    // 一秒钟移动的像素
    // 从触摸到离开花费的总时长
    const timeSpent = end - this.start;
    const rateX = Math.abs(x) / timeSpent;
    const rateY = Math.abs(y) / timeSpent;

    if ((this.isFling(rateX, rateY)) || (Math.abs(x) >= 260 || Math.abs(y) >= 660)) {
      // 判断手势是否是fling;
      // 沿当前方向移除屏幕至消失
      // this.move(dx, dy, this.oldL[0]);
      this.move(dx, dy, this.oldL[this.oldL.length-1]);
      this.newL.push(this.oldL.pop());
      // this.newL.push(this.oldL.shift());
      this.e = e;

    } else {
      // 返回原来位置
      // this.move(this.startLeft, this.startTop, this.oldL[0]);
      this.move(188, 81, this.oldL[this.oldL.length-1]);
    }
  }

  back() {
    if (this.newL.length > 0) {
      let target = this.newL.pop();
      // let target = this.newL.shift();
      this.move(188, 81, target);
      this.oldL.push(target);
    }
  }

  forward() {
    const xMax = document.body.clientWidth;
    if (this.oldL.length > 0) {
      // let target = this.oldL.shift();
      let target = this.oldL.pop();
      this.newL.push(target);
      this.move(-xMax, 0, target);
    }
  }
}

export default Explore;
