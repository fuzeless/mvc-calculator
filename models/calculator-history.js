var history = [
  {
    operation: '1+2',
    result: '3'
  },
  {
    operation: '10-2',
    result: '8'
  },
  {
    operation: '5*2',
    result: '10'
  }
];

exports.update = exports.create = function (operation, result) {
  history.push({
    operation,
    result
  });
}

exports.read = function (key) {
  return history[key];
}

exports.delete = function (key) {
  history.splice(key, 1);
}

exports.keys = function () {
  return Object.keys(history);
}

exports.length = () => {
  return history.length;
}