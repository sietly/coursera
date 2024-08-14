(function () {
    let helloSpeaker = (
        function speak (name) {
            console.log(speakWord + " " + name);
        }
    )
    let speakWord = "Hello";
    window.helloSpeaker = helloSpeaker;
})();
