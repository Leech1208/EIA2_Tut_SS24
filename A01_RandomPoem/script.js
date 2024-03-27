"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // console.log(subject);
    // console.log(predicate);
    // console.log(object);
    for (let i = subject.length; i >= 1; i--) {
        // console.log(i);
        console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let randomNumber;
        randomNumber = Math.floor(Math.random() * _subject.length);
        verse = verse + _subject.splice(randomNumber, 1) + " ";
        randomNumber = Math.floor(Math.random() * _predicate.length);
        verse = verse + _predicate.splice(randomNumber, 1) + " ";
        randomNumber = Math.floor(Math.random() * _object.length);
        verse = verse + _object.splice(randomNumber, 1) + "!";
        // console.log(verse);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script.js.map