const getAllArtistNames = require("./getArtist");

test("getAllArtistNames returns all names", () => {
  // Arrange
  const allArtists = require("./artistData");

  // Act
  const names = getAllArtistNames(allArtists);

  // Assert
  expect(names).toHaveLength(7);
  expect(names[0]).toBe("Queen");
});
