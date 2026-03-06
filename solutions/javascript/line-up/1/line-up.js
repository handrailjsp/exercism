//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
 
  let numStr = number.toString();
  let ending = "";

  if (numStr.endsWith("11")) {
    ending = "th";
  } else if (numStr.endsWith("12")) {
    ending = "th";
  } else if (numStr.endsWith("13")) {
    ending = "th";
  } else {
   
    let lastChar = numStr.charAt(numStr.length - 1);

    if (lastChar === "1") {
      ending = "st";
    } else if (lastChar === "2") {
      ending = "nd";
    } else if (lastChar === "3") {
      ending = "rd";
    } else {
      ending = "th";
    }
  }


  let messageStart = name + ", " + "you are the ";
  let messageMiddle = number + ending;
  let messageEnd = " customer we serve today. Thank you!";
  
  let result = messageStart + messageMiddle + messageEnd;

  console.log(result);
  return result;
};
