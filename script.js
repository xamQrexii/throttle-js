const throttle = (fn, delay) => {
  let last = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return fn(...args);
  };
};

const btnClick = () => console.log("It was clicked");

const btnClickThrottle = throttle(btnClick, 1000);
