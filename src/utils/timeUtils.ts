export const isDayTime = () => {
  // Hour returned is 0 to 23
  const hour = new Date(Date.now()).getHours();
  return hour > 7 && hour < 20;
};
