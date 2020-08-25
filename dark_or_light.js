function ReturnDarkOrLight(strColor) {
    strColor = strColor.toLowerCase();

    switch (strColor) {
        case "yellow":
          strColor = "light color";
          break;
        case "pink":
            strColor = "light color";
            break;
        case "orange":
            strColor = "light color";
            break;
        case "blue":
          strColor = "dark color";
          break;
        case "purple":
          strColor = "dark color";
          break;
        case "brown":
          strColor = "dark color";
          break;
        default:
            strColor = "Unknown color";
      }

      return strColor;
}

console.log(ReturnDarkOrLight("orange"));
console.log(ReturnDarkOrLight("PINK"));
console.log(ReturnDarkOrLight("red"));