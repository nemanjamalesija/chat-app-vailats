let users = [];

// Join user to chat
function userJoin(id, username, room) {
  const user = { id, username, room };

  // Find the index of the existing user with the same id
  const existingUserIndex = users.findIndex((u) => u.id === user.id);

  if (existingUserIndex !== -1) {
    // If an existing user is found, remove it from the array
    users.splice(existingUserIndex, 1);
  }

  // Add the new user to the array
  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  users,
};
