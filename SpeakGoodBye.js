(function () {
    let byeSpeaker = (
        function speak(name) {
            console.log(speakWord + " " + name);
        }
    );
    let speakWord = "Good Bye";
    window.byeSpeaker = byeSpeaker;
})();