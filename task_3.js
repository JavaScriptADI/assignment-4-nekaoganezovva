/*
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will
be a string containing only one character (for example, "b"). The first character has position 0, which
causes the last one to be found at position string.length - 1. In other words, a two-character string has
length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that
indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument
that indicates the character that is to be counted (rather than counting only uppercase “B”
characters). Rewrite countBs to make use of this new function.

"string"[N] -ის დაწერით შენ შეგიძლია ამოიღო N პოზიციაზე მდგომი სიმბოლო ან ასო სტრინგიდან. დაბრუნებული
მნიშვნელობა იქნება სტრინგი, რომელცი შეიცავს მხოლოდ 1 character-ს (მაგალითად "b"). პირველ character-ის
პოზიცია არის 0, ხოლო ბოლო string.length - 1. სხვა სიტყვებით, თუ გვაქვს 2 character-ი მაშინ სტრინგის ზომა 2-ია,
და გვაქვს მხოლოდ 2 პოზიცია 0 და 1.

1. დაწერეთ ფუნქცია countBs, რომელიც იღებს სტრინგს (მხოლოდ 1 არგუმენტი) და აბრუნებს რიცხვს, რომელიც ინდიკატორია იმისა,
თუ რამდენი "B" (მაღალ რეგისტრში) character-ია ამ სტრინგში.
2. დაწერეთ ფუნქცია, რომელიც იგივე ნარიად იქცევა როგორც countBs, მაგრამ ასევე იღებს მეორე პარამეტრს, რა character-ის დათვლა გვსურს.
*/

//solution1
function countBs(string) {
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'B') {
        count++;
      }
    }
    return count;
  }
  
  //test
  let res = countBs("Billie Eilish preforms at SuperBowl with Alek Baldwin and Drew Barrymore.");
  console.log(res);

  //solution2
  function countChar(string, char) {
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] === char) {
        count++;
      }
    }  
    return count;
  }
  
  //test
  let resChar = countChar("Billie Eilish preforms at SuperBowl with Alek Baldwin and Drew Barrymore.", "w");
  console.log(resChar); 
  
  