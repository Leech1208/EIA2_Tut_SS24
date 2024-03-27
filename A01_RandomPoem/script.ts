namespace RandomPoem {

    let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    // console.log(subject);
    // console.log(predicate);
    // console.log(object);

    for (let i = subject.length; i >= 1; i--) {

        // console.log(i);
        console.log(getVerse(subject, predicate, object));

    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {

        let verse: string = "";
        let randomNumber: number;

        randomNumber = Math.floor(Math.random() * _subject.length);
        verse = verse + _subject.splice(randomNumber, 1) + " ";

        randomNumber = Math.floor(Math.random() * _predicate.length);
        verse = verse + _predicate.splice(randomNumber, 1) + " ";

        randomNumber = Math.floor(Math.random() * _object.length);
        verse = verse + _object.splice(randomNumber, 1) + "!";

        // console.log(verse);
        return verse;

    }

}