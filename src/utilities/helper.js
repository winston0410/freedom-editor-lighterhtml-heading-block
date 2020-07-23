const getSavedData = (savedData) => {
  if (savedData) {
    return savedData.data.heading
  }
}

module.exports = {
  getSavedData
}
