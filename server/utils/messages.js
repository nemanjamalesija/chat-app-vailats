const moment = require('moment');

function formatMessage(username, room, text) {
  return {
    username,
    room,
    text,
    time: moment().format('h:mm a'),
  };
}

module.exports = formatMessage;
