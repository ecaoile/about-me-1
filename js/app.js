'use strict'

/* This is Harry's Code */
/* 
    Question 1: Did I live in Hawaii? 
    Yes.

    Question 2: Was I born in Germany?
    No.

    Question: 3: Do I like seafood?
    Yes.

    Question 4: Did I go scuba diving?
    No.

    Question 5: Do I have any siblings?
    Yes.

    Question 6: Guess what number I'm thinking of.
    8

    Question 7: What states did I visit?
    Washington, Wyoming, New York

*/

var theScoreTally = 0;
var questionDone = false;

// Question 1
while (questionDone === false) {
    var homeHawaii = prompt('Did I live in Hawaii?');
    var lowerCaseHomeHawaii = homeHawaii.toLowerCase();
    if (lowerCaseHomeHawaii === 'y' || lowerCaseHomeHawaii === 'yes') {
        alert('Correct!');
        theScoreTally++;
        questionDone = true;
    } else if (lowerCaseHomeHawaii === 'n' || lowerCaseHomeHawaii === 'no') {
        alert('Incorrect!');
        questionDone = true;
    } else if (lowerCaseHomeHawaii.length < 1) {
        alert('Oops! You didn\'t answer! Please answer again.');
    } else {
        alert('Invalid input. Please answer again.');
    }
}

// Question 6
theScoreTally = false;

