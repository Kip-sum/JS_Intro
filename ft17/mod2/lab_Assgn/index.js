// index.js

function mergeUsers(...arrays) {
  // Merge all arrays into one
  const mergedUsers = arrays.flat();

  // Create merge date
  const mergedAt = new Date().toISOString();

  // Return object
  return {
    users: mergedUsers,
    mergedAt: mergedAt
  };
}

// Export the function (VERY IMPORTANT for tests)
module.exports = mergeUsers;