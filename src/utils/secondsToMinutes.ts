const secondsToMinutes: (sec: number) => string | number = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec - minutes * 60);
  const convertSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${convertSeconds}`;
};
export default secondsToMinutes;
