const searchDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavouritecats.com",
];

const searchInfo = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(searchInfo("cat", searchDatabase));

module.exports = searchInfo;

// unit testing --> funtionality --90%
// integrating testing --> database
// End to end testing
