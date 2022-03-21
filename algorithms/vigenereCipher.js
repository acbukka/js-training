// Без удаления пробелов:
class VigenereCipheringMachine {
  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    let diff = Math.ceil(text.length / key.length);
    key = key.repeat(diff).toUpperCase();
    console.log(text.length, key.length);
    let startA = "A".charCodeAt(0);
    let alphabet = 26;
    let result = [];
    let keyCount = 0;
    for (let i = 0; i < text.length; i++) {
      if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(text[i])) {
        result.push(text[i]);
        keyCount--;
      } else {
        let letterIndex = text[i].charCodeAt(0) - startA;
        let shift = key[keyCount].charCodeAt(0) - startA;
        result.push(
          String.fromCharCode(startA + ((letterIndex + shift) % alphabet))
        );
      }
      keyCount++;
    }
    if (this === reverseMachine) {
      return result.reverse().join("");
    } else {
      return result.join("");
    }
  }
  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let newText = text.toUpperCase();
    let diff = Math.ceil(newText.length / key.length);
    key = key.repeat(diff).toUpperCase();
    let startA = "A".charCodeAt(0);
    let alphabet = 26;
    let result = [];
    let keyCount = 0;
    for (let i = 0; i < newText.length; i++) {
      if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(newText[i])) {
        result.push(newText[i]);
        keyCount--;
      } else {
        let letterIndex = text[i].charCodeAt(0) - startA;
        let shift = key[keyCount].charCodeAt(0) - startA;
        result.push(
          String.fromCharCode(
            startA + ((letterIndex - shift + alphabet) % alphabet)
          )
        );
      }
      keyCount++;
    }
    if (this === reverseMachine) {
      return result.reverse().join("");
    } else {
      return result.join("");
    }
  }
}
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

// // console.log(directMachine === true, reverseMachine);
console.log(directMachine.encrypt("attack at dawn!", "alphonse"));
// // console.log(directMachine.encrypt("Same length key", "Samelengthkey"));
// console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
// console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
// console.log(directMachine.encrypt("MY NAME IS ANTON", "JAVASCRIPT"));
console.log(
  directMachine.encrypt("Example of sequence: 1, 2, 3, 4.", "lilkey")
);

console.log(65 + (18 % 26));

console.log("A".charCodeAt(0) + 22);
console.log("N".charCodeAt(0));
console.log(String.fromCharCode(83));

// Нужно переписать без удаления пробелов

// while (key.length > text.length) {
//   key = key.slice(0, -1);
// }

// class VigenereCipheringMachine {
//   encrypt(text, key) {
//     if (text === undefined || key === undefined) {
//       throw new Error("Incorrect arguments!");
//     }
//     let newText = text.toUpperCase().replace(/ /g, "");
//     let diff = Math.ceil(newText.length / key.length);
//     key = key.repeat(diff).toUpperCase();
//     while (key.length > newText.length) {
//       key = key.slice(0, -1);
//     }
//     console.log(text.length, key.length);
//     let startA = "A".charCodeAt(0);
//     let alphabet = 26;
//     let result = [];
//     for (let i = 0; i < newText.length; i++) {
//       if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(newText[i])) {
//         result.push(newText[i]);
//       } else {
//         let letterIndex = newText.charCodeAt(i) - startA;
//         let shift = key.charCodeAt(i) - startA;
//         result.push(
//           String.fromCharCode(startA + ((letterIndex + shift) % alphabet))
//         );
//       }
//     }
//     for (let p = 0; p < newText.length; p++) {
//       if (text[p] === " ") {
//         result.splice(p, 0, text[p]);
//       }
//     }
//     if (this === reverseMachine) {
//       return result.reverse().join("");
//     } else {
//       return result.join("");
//     }
//   }
//   decrypt(text, key) {
//     if (text === undefined || key === undefined) {
//       throw new Error("Incorrect arguments!");
//     }
//     let newText = text.toUpperCase().replace(/ /g, "");
//     let diff = Math.ceil(newText.length / key.length);
//     key = key.repeat(diff).toUpperCase();
//     let startA = "A".charCodeAt(0);
//     let alphabet = 26;
//     let result = [];
//     for (let i = 0; i < newText.length; i++) {
//       if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(newText[i])) {
//         result.push(newText[i]);
//       } else {
//         let letterIndex = newText.charCodeAt(i) - startA;
//         let shift = key.charCodeAt(i) - startA;
//         result.push(
//           String.fromCharCode(
//             startA + ((letterIndex - shift + alphabet) % alphabet)
//           )
//         );
//       }
//     }
//     for (let p = 0; p < text.length; p++) {
//       if (text[p] === " ") {
//         result.splice(p, 0, text[p]);
//       }
//     }
//     if (this === reverseMachine) {
//       return result.reverse().join("");
//     } else {
//       return result.join("");
//     }
//   }
// }
// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);
// // console.log(directMachine === true, reverseMachine);
// console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
// console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
// // console.log(directMachine.encrypt("MY NAME IS ANTON", "JAVASCRIPT"));
// console.log(directMachine.encrypt("Same length key", "Samelengthkey"));
// // console.log(directMachine.encrypt("attack at dawn!", "alphonse"));
// console.log(
//   directMachine.encrypt("Example of sequence: 1, 2, 3, 4.", "lilkey")
// );

// class VigenereCipheringMachine {
//   constructor(isRight = true) {
//     this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     this.type = isRight;
//   }
//   encrypt(...args) {
//     if (args[0] === undefined || args[1] === undefined) {
//       throw new Error("Incorrect arguments!");
//     }
//     let text = args[0].toUpperCase();
//     let key = args[1].toUpperCase();
//     let diff = Math.ceil(text.length / key.length);
//     key = key.repeat(diff).toUpperCase();
//     let result = "";
//     let p = 0;
//     for (let i = 0; i < text.length; i++) {
//       if (this.alphabet.includes(text[i])) {
//         let localAlp =
//           this.alphabet.slice(this.alphabet.indexOf(key[p])) + this.alphabet;
//         result += localAlp[this.alphabet.indexOf(text[i])];
//       } else {
//         result += text[i];
//         p--;
//       }
//       p++;
//     }
//     return this.type ? result : result.split("").reverse().join("");
//   }
//   decrypt(...args) {
//     if (args[0] === undefined || args[1] === undefined) {
//       throw new Error("Incorrect arguments!");
//     }
//     let text = args[0].toUpperCase();
//     let key = args[1].toUpperCase();
//     let diff = Math.ceil(text.length / key.length);
//     key = key.repeat(diff).toUpperCase();
//     let result = "";
//     let p = 0;
//     for (let i = 0; i < text.length; i++) {
//       if (this.alphabet.includes(text[i])) {
//         let localAlp =
//           this.alphabet.slice(this.alphabet.indexOf(key[p])) + this.alphabet;
//         result += this.alphabet[localAlp.indexOf(text[i])];
//       } else {
//         result += text[i];
//         p--;
//       }
//       p++;
//     }
//     return this.type ? result : result.split("").reverse().join("");
//   }
// }
