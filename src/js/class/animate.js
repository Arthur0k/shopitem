class Animate {
  move(startLeft, startTop, targetLeft, targetTop, e) {
    left = left + Vx * xMax;
    top = top + Vy * yMax;
    e.target.style.left = left + 'px';
    e.target.style.top = top + 'px';
    e.target.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      e.target.style.transition = '';
    }, 300)
  }
}

export default Animate;
