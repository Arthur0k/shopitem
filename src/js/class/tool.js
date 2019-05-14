class Tool {
  // 获取角度值
  getAngle(x, y) {
    return Math.atan2(y, x);
  }

  // 获取方// 向
  // getPositon(angle) {
  //   const a = angle * 180 / Math.PI;
  //   if (a > 0 && a <= 90) {
  //     return 1; // 右下
  //   } else if (a > 90 && a <= 180) {
  //     return 2; // 左下
  //   } else if (a > -180 && a <= -90) {
  //     return 3; // 左上
  //   } else if (a > -90 && a <= 0) {
  //     return 4; // 右上
  //   }
  // }

  // 手指滑动rx:水平移动的速率
  isFling(rx, ry) {
    if (rx > 0.4 || ry > 0.4) {
      return true;
    } else {
      return false;
    }
  }

}

export default Tool;
