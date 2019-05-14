import Animate from './.#animate';
import Tool from './tool';

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
  constructor(oldL) {
    super();
    this.oldL = oldL;
    this.newL = [];
  }

  init() {
    this.oldL.forEach((item) => {
      item.addEventListener('touchstart', this.handleStart, false);
      item.addEventListener('touchcancel', this.handleCancel, false);
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
    console.log('初始startL,startT: ', this.startLeft, this.startTop);
    /* console.log(`starX: ${startX}, startY:${startY}`) */
    // 触摸点距离边框的width and height;
    this.innerW = this.startX - this.point.target.offsetLeft;
    this.innerH = this.startY - this.point.target.offsetTop;
    this.point.target.addEventListener('touchmove', this.handleMove, false);
    this.point.target.addEventListener('touchend', this.handleEnd, false);
  }

  handleMove(e) {
    e.preventDefault();
    e.target.style.top = this.point.clientY - this.innerH + 'px';
    e.target.style.left = this.point.clientX - this.innerW + 'px';
  }

  handleEnd(e) {
    console.log('手指离开');
    e.preventDefault();
    const end = Date.now();
    // 手指离开屏幕时点的坐标
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    // 从触摸到离开，手指滑动的距离
    const x = endX - this.startX;
    const y = endY - this.startY;
    /* console.log(x, y) */

    // 手指离开屏幕,目标对象的left,top
    let left = e.target.offsetLeft;
    let top = e.target.offsetTop;

    // 角度值
    let angle = this.getAngle(x, y);

    // // 方向 右下1 左下2 左上3 右上4
    // const position = getPosition(angle);

    // 屏幕的宽高
    const xMax = document.body.clientWidth;
    const yMax = document.body.clientHeight;
    // 对象沿当前方向移动的单位
    const Vx = Math.cos(angle);
    const Vy = Math.sin(angle);
    // 移出屏幕时的距离（可调）
    const dx = Vx * xMax;
    const dy = Vy * yMax;

    // 一秒钟移动的像素
    // 从触摸到离开花费的总时长
    const timeSpent = end - this.start;
    const rateX = Math.abs(x) / timeSpent;
    const rateY = Math.abs(y) / timeSpent;
    if (this.isFling(rateX, rateY)) {
      // 判断手势是否是fling;
      // 沿当前方向移除屏幕至消失

      // 待封装
      left = left + dx;
      top = top + dy;
      e.target.style.left = `${left}px`;
      e.target.style.top = `${top}px`;
      e.target.style.transition = 'all 0.4s ease';
      setTimeout(() => {
        e.target.style.transition = '';
      }, 400);
      this.newL.push(this.oldL.shift());

      console.log('noFling')
      // 手指离开屏幕时的坐标相对初始坐标超过一定距离,目标对象沿滑动的方向移动直到消失
      if (Math.abs(x) >= 260 || Math.abs(y) >= 660) {

        left = left + dx;
        top = top + dy;
        e.target.style.left = `${left}px`;
        e.target.style.top = `${top}px`;
        e.target.style.transition = 'all 0.3s ease';
        setTimeout(() => {
          e.target.style.transition = '';
        }, 300);
        this.newL.push(this.oldL.shift());

      } else {
        // 返回原来位置
        left = this.startLeft;
        top = this.startTop;
        e.target.style.left = `${left}px`;
        e.target.style.top = `${top}px`;
        // 返回动画 可修改成添加类
        e.target.style.transition = 'all 0.3s ease';
        setTimeout(() => {
          e.target.style.transition = '';
        }, 300);
      }
    }
  }
}

export default Explore;
