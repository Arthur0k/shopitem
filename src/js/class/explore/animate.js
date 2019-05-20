class Animate {
  // 参数：目标位置left top 目标对象
  move(targetLeft, targetTop, target) {
    // e.target.style.left = `${startLeft}px`;
    // e.target.style.top = `${startTop}px`;
    // e.target.style.transition = 'all 0.3s ease';
    target.style.left = `${targetLeft || 188}px`;
    target.style.top = `${targetTop || 81}px`;
    target.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      // e.target.style.transition = '';
      target.style.transition = '';
    }, 300);
  }
}

export default Animate;
