const Calculation = {
    currInput: "",
    currResult: 0,
    lastResult: 0,

    inputClicked: function(event) {
        const button = event.target;
        console.log("you clicked " + button.textContent);
        const input = button.textContent;
        switch (input) {
            case "DEL":
                this.currInput = "";
                this.currResult = 0;
                break;
            case "MOD":
                this.currInput = this.currInput.concat("%");
                break;
            case "÷":
                this.currInput = this.currInput.concat("/");
                break;
            case "^":
                this.currInput = this.currInput.concat("**");
                break;
            case "√":
                this.currInput = this.currInput.concat("**0.5");
                break;
            case "+/-":
                this.currInput = this.currInput.concat("-");
                break;
            default:
                this.currInput = this.currInput.concat(input);

        }
        console.log("this" + this.currInput);
        document.querySelector(".outputSpace").textContent = this.currInput;
    },

    equalsClicked: function(event) {
        const button = event.target;
        console.log("you clicked BIG " + button.textContent);
        console.log(this.currInput);
        try{
            this.currResult = eval(this.currInput);
            document.querySelector(".outputSpace").textContent = this.currResult;
            this.currInput = "";
        }
        catch(err) {
            this.currInput = "";
            document.querySelector(".outputSpace").textContent = "Invalid Expression";
        }
        
    },

};

document.addEventListener("DOMContentLoaded", function() {
    
    let inputButtons = document.querySelectorAll(".standardInputButton");

    inputButtons.forEach(function(button) {
        button.addEventListener('click', Calculation.inputClicked.bind(Calculation));
    });

    const equalsButton = document.querySelector(".bigInputButton");
    equalsButton.addEventListener("click", Calculation.equalsClicked.bind(Calculation));

});