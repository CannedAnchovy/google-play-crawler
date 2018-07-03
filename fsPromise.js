const fs = require('fs');

/**
 * Wrap the fs.open into a promise version.
 * @param {string} path The file path.
 * @param {string} flag The flag of the open file.
 * @return {promise} A promise that resolve the fd and reject the error.
 */
function openPromise(path, flag) {
  return new Promise((resolve, reject) => {
    fs.open(path, flag, (err, fd) => {
      if (err) reject(err);
      resolve(fd);
    });
  });
}

/**
 * Wrap the fs.write into a promise version.
 * @param {number} fd The file's fd.
 * @param {string} string The string that will be written into the file.
 * @return {promise} A promise that resolve nothing and reject the error.
 */
function writePromise(fd, string) {
  return new Promise((resolve, reject) => {
    fs.write(fd, string, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

/**
 * Wrap the fs.close into a promise version.
 * @param {number} fd The file's fd.
 * @return {promise} A promise that resolve nothing and reject the error.
 */
function closePromise(fd) {
  return new Promise((resolve, reject) => {
    fs.close(fd, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

exports.open = openPromise;
exports.write = writePromise;
exports.close = closePromise;
