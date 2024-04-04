let spech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", ()=>{
    spech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(spech);
})