const readTextFile = (filePath) => {
    return fetch(filePath)
    .then(response => response.text())
    .catch(error => {
      console.error('Error reading the file', error);
    });
}

export {readTextFile};