const betterConsoleLog = () => {
  console.log('-----------------------------------------------');
  console.log('Listener called !');
  console.log('-----------------------------------------------');
};

const listener = {
  callback: betterConsoleLog,
  eventName: 'WHISP_CREATED',
  filter: {}
};

module.exports.listeners = [
  listener,
];
