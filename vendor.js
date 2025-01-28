


let letters = []; // Array to store letters (a-z)
let dataNumbers = []; // Array to store the positions of the letters (e.g., a = 1, b = 2)

// Listen for keydown events on the input field
document.querySelector('.my_name').addEventListener("keydown", (event) => {
    letters = []; // Reset the letters array for every key press

    if (event.key === "Backspace") {
        // If the Backspace key is pressed, call the delete function
        funcDelete(event);
    } else {
        // Populate the letters array with lowercase letters (a-z)
        for (let i = 97; i <= 122; i++) {
            letters.push(String.fromCharCode(i)); // Convert ASCII codes to letters
        }

        // Process the pressed key
        renderLetters(event);
    }
});

// Function to process the pressed key and add its position to the array
function renderLetters(e) {
    const myLetter = e.key.toLowerCase(); // Convert the pressed key to lowercase

    // Find the position of the letter and add it to the dataNumbers array
    letters.forEach((letter, index) => {
        if (letter === myLetter) {
            let myNameNumber = index + 1; // Get the letter's position (1-based index)
            dataNumbers.push(myNameNumber); // Add the position to the array
        }
    });

    funcAccumulator(); // Update the total sum
}

// Function to handle Backspace key and delete the corresponding value
function funcDelete(event) {
    const inputField = event.target; // Get the input field
    const cursorPosition = inputField.selectionStart; // Get the cursor position

    if (cursorPosition > 0) {
        // Remove the corresponding value from dataNumbers
        dataNumbers.splice(cursorPosition - 1, 1);
    }

    funcAccumulator(); // Update the total sum
}

// Function to calculate the sum of all values in dataNumbers and display it
function funcAccumulator() {
    // Calculate the total sum of the array
    let total = dataNumbers.reduce((acc, tot) => tot + acc, 0);

    // Display the total in the element with the class 'my_name-count'
    document.querySelector('.my_name-count').textContent = `Your score is ${total}`;
}
















