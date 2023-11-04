const Calculation = {
    currInput: "",
    currResult: 0,
    lastResult: 0,

    inputClicked: function(event) {
        const button = event.target;
        console.log("you clicked " + button.textContent);
        this.currInput = this.currInput.concat(button.textContent);
        document.querySelector(".outputSpace").textContent = this.currInput;
    },

    equalsClicked: function(event) {
        const button = event.target;
        console.log("you clicked BIG " + button.textContent);
        console.log(this.currInput);
        this.currResult = eval(this.currInput);
        document.querySelector(".outputSpace").textContent = this.currResult;
        this.currInput = "";
    }

};

document.addEventListener("DOMContentLoaded", function() {
    
    let inputButtons = document.querySelectorAll(".standardInputButton");

    inputButtons.forEach(function(button) {
        button.addEventListener('click', Calculation.inputClicked.bind(Calculation));
    });

    const equalsButton = document.querySelector(".bigInputButton");
    equalsButton.addEventListener("click", Calculation.equalsClicked.bind(Calculation));
    



});
