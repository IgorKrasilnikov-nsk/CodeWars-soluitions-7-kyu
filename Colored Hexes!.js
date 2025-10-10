/*
You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000
We need a way to tell which is red, and which is blue!
That's where you create hex color !!!
It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!
But, if multiple colors are of equal concentration, you should return their mix!
red + blue = magenta
green + red = yellow
blue + green = cyan
red + blue + green = white
One last thing, if the string given is empty, or has all 0's, return black!

Examples:

codes = "087 255 054" -> "green"
codes = "181 181 170" -> "yellow"
codes = "000 000 000" -> "black"
codes = "001 001 001" -> "white"
*/

function hexColor(codes){
  let arr = codes.split(" ").map(items => +items);
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[1] && arr[0] == arr[2]) {
      return "magenta" 
    } else if (arr[0] == arr[1] && arr[0] > arr[2]) {
      return "yellow";
    } else if (arr[1] == arr[2] && arr[0] < arr[2]) {
      return "cyan";
    } else if (arr[0] == 0 && arr[1] == 0 && arr[2] == 0) {
      return "black";
    } else if (arr[0] == arr[1] && arr[0] == arr[2]) {
      return "white";
    } else if (arr[0] > arr[1] && arr[0] > arr[2]) {
      return "red";
    } else if (arr[1] > arr[0] && arr[1] > arr[2]) {
      return "green";
    } else if (arr[2] > arr[0] && arr[2] > arr[1]) {
      return "blue";
    } else {
      return "black";
    }
  }
}
