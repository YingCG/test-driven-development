// fahrenheit to celsius
// 32 Farenheit = 0 Degree celsius
// 33.8 Farenheit = 1 degree celsius
// (33.8°F − 32) × 5/9 = 1°C
// (32°F − 32) × 5/9 = 0°C

// function getCelcius(f) {
//   degree = ((f - 32) * 5) / 9;
//   return degree;
// }

function getCelcius(f) {
  // degree = ((f - 32) * 5) / 9;
  degree = f.map((value) => ((value - 32) * 5) / 9);
  return degree;
}
