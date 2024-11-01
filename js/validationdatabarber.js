// Note: All documents have been formatted and indented using the Prettier extension in Visual Studio Code

const form = document.querySelector(".talkbox");
// Getting a form through the DOM. Manipulating the form on the page, which is where the user will enter their data.
// Using the querySelector function on "talkbox" to locate in the page code "contact" the code that
// has the item "talkbox". And also storing the variable "form".
// This is what allows us to connect with the user on the other side, validating and sending the form.

const fields = document.querySelectorAll(".required");
// With the same idea as the previous command, using querySelectorAll, but now to find in the HTML line the item "required".
// And this way also storing the data in the variable "fields", which will store all the data that the user will enter,
// such as: Name, Email, Telephone, and the final Message.
// Storing and validating the user's inputs, generating interaction and ease for the user.

const spans = document.querySelectorAll(".spanrequired");
// Now we will see all the fields that have the span item, that is, that have the error message if the user does not fill out the form adequately.
// Here we will get all the "span" items that have the class "spanrequired."
// In this way, if the user enters only the email incorrectly, only the email will show an error message for him. And he will immediately
// know what to do, just retype the email.
// This kind of thing improves the user experience.

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// Here we are going to create a digit function to check if the user really entered an email.
// In this variable called "emailRegex," it has this name because what we are going to use here is regex, which is a validation tool.
// Thus, by building the expression after "=", we can capture all the items that will be, for example, before the @.
// Clearly, if the email entered by the user has any of these characters, a message will appear for the user
// to add a valid email. For the user to also add a "@" symbol and a dot.
// This is also a very effective way to prevent typing errors from the user.

function setError(index) {
  // It is the SET function to configure the error, displaying the error to the user.
  fields[index].style.border = "2px solid #e63636";
  // Here, we will add a red border to the input with the error as well, so the user knows exactly where to correct.
  // Adding a red border to the field that is wrong.
  // The idea is exactly this: to show the field with the failure, with a faulty border style.

  spans[index].style.display = "inline";
  // Here, we go beyond adding the red border to show the error message as well.
  // We set it to inline so that it only shows the error on that line.
  // The span will be set to none by default; therefore, if there is an error, this line of code will change the color of the span message line.
  // And also making the line appear quickly, showing that that input, at that moment, was what caused the error.
}

function removeError(index) {
  fields[index].style.border = "";
  // The field "". I made it so that the border does not exist, that is, it removes the border.
  // Function that removes the error when the user corrects it.
  // And it also removes the red border from the field.
  // What way does the user have to know if he corrected the problem? After the previous function puts the red border and the phrase in red indicating an error?
  // Exactly by removing the border and returning the style to normal, as that is what this line does.

  spans[index].style.display = "none";
  // Hides the error message.
  // This line hides the error message corresponding to the field, indicating that there is no more error to be corrected.
  // This positively interacts with the user; he realizes that he is able to fill out the form.
}

function nameValidate() {
  // Function to validate the "Name" field.
  fields[0].value = fields[0].value.replace(/[0-9]/g, "");
  // And here we will also remove any number that is typed in the "Name" field, avoiding many typing errors.
  // By order, field 0, as the field is the first input, its numeric value is 0.
  // Therefore, we remove everything that is before the comma, that is, (/[0-9]/g), which is the content before the comma,
  // by the content after the comma ("") in this case is empty.
  // In this way, the user can only enter letters.

  if (fields[0].value.length < 3) {
    // I added this characteristic to generate an error for names shorter than 3 digits.
    // To ensure that the user will enter their name.
    setError(0);
    // Again calling the function for field 0, which refers to the Name field, being the first field,
    // with an absolute value of 1, but since it's in an array, the counting in programming languages always starts at 0. Therefore, "Name" is field 0 here.
    // And then, if the name has fewer than 3 digits, we call "setError".
  } else {
    // Else = On the contrary, that is, if there is no error on the user's part.
    removeError(0);
    // In this way, we call "removeError", thereby removing the span msg from the screen,
    // and showing the user that they filled it out correctly.
  }
}

function emailValidated() {
  // Function to validate the "Email" field
  // Since we created the regex pattern back then, we will apply it here now,
  // in such a way that, if the user does not meet this pattern, the error will appear.
  if (!emailRegex.test(fields[1].value)) {
    setError(1);
    // Test is a method that is part of the regex pattern in JS.
    // Therefore, if the user does not follow the "emailRegex" pattern in the test in field [1], a red span message will appear to alert the user.
    // (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    // This is the Regex pattern, where \ marks the start and end of the pattern.
    // Thus, each set is defined by [].
    // (\w) represents any word character, that is, any letter, number, and underscore as well.
    // Following with (\.) so that the function sees a dot as a normal dot.
    // The @ is the standard symbol for an email.
    // Again [\w-] for word characters.
    // {2,4} This means that, after the ., there must be 2 to 4 letters, like for example: .ie, .uk, .com, .br, etc.
    // $ Indicates the end of the string.
    // Therefore, we have "setError," which will show the error for the user to make the correct input.
  } else {
    removeError(1);
    // Here we simply have the opposite, removing the error with "removeError," allowing the user to proceed.
    // For this, the email must be correct.
  }
}

function phoneValidated() {
  // Function to validate the "Phone" field.
  fields[2].value = fields[2].value.replace(/[^0-9]/g, "");
  // Here we will also remove characters, but this time, we will remove anything that is not a number.
  // And as we did before with the name, cleaning the numbers, here we will clean what is not a number.
  // Using (/[^0-9]/g, ""), this way, the numbers from 0 to 9 will be replaced by "".
  // I added this because I believe it is important not to allow this type of error and for the email to reach the recipient with the wrong data.

  if (fields[2].value.length < 9) {
    // Here we are simply validating the length of the phone number,
    // which must contain 9 digits.
    setError(2);
    // So we also have to call the "setError" function if the user has typed any letters or has not yet typed the complete phone number.
    // This provides immediate feedback to the user, allowing them to know that they need to provide a complete number.
  } else {
    removeError(2);
    // And since we have "setError", we will always have "removeError", which is the one that will
    // stop displaying the error to the user when they correct the phone number.
  }
}

function messageValidate() {
  // Function to validate the "Message" field that the user will send.
  const messageField = document.getElementById("message");
  // In the HTML code, we created an ID to differentiate because it has some different characteristics, such as the size of the box
  // and it is also not an input; it is a textarea.
  // Here we are just accessing its textarea field by id="message".

  if (messageField.value.trim() === "") {
    // And, however, we don't have much to validate here for the user; we can only prevent them from sending a blank message.
    // And that's why we will use trim here, so that all whitespace characters that are BEFORE the first character with a value are removed.
    // It does not remove any spaces or line breaks AFTER the first character with a value. Only if the message has not started yet.

    setError(3);
    // Thus, if it is blank, we will use the function "setError", with index 3, because the textarea is the fourth item in the form.
    // And the span is only displayed if nothing is typed.
    // In this way, we ensure that the user does not send any blank characters, thinking they have sent an important message when, in fact, they have not.
  } else {
    removeError(3);
    // And again, there will always be a "setError" for every "removeError", in such a way that it removes the error when the user types a valid character.
  }
}

function validateForm(event) {
  // Function to validate the entire form.
  event.preventDefault();
  // Here we use this "preventDefault" function, which works from an event that occurs.
  // In the case of a form, the event is the click on the "Submit" button by the user.
  // To prevent the form from being submitted before performing the validations,
  // we check everything again, calling each of the validations.

  nameValidate();
  // Validating names longer than 3 digits and without numbers
  emailValidated();
  // Validating the correct standard email.
  phoneValidated();
  // Validating the phone number with 9 digits and no letters
  messageValidate();
  // Validating that the textarea field is not empty.

  const hasErrors = [...spans].some((span) => span.style.display === "inline");
  // First, here we will create a constant "hasErrors".
  // "...spans" we are using so that the constant "hasErrors" can see if there is any span that is still being displayed in the form.
  // In the line "span.style.display === inline", it is as if the displayed inline style alerts us that there is an active span.
  // That's why the "some" method checks if there is any active span or not.

  const hasEmptyFields = [...fields].some((field) => field.value.trim() === "");
  // Checks if any required field is empty
  // Almost similar to the previous line, here the "some" function analyzes if there is any empty field using ("trim() === "").
  // This is how we will ensure that the form has all lines filled in.

  if (!hasErrors && !hasEmptyFields) {
    // This is the line where the user feels relieved after correctly filling out and receiving the success message.
    // The line means "!hasError" = If there are no errors
    // && = And, which means it’s not enough to just have no errors, but
    // "!hasEmptyFields" = there must also be no empty input or textarea.

    alert("Formulário enviado com sucesso!");
    // There it is, the form shows the message that it was successfully sent in the middle of the screen.
    // providing visual feedback for the user, and they can be sure that they sent the message.
    form.reset();
    // And for the user to be even more certain that they did everything correctly, after clicking on the "sent successfully" message,
    // the user, by clicking ok, will see that the form will have its inputs and textarea reset, that is, blank again.
  }
}

document.getElementById("message").addEventListener("input", messageValidate);
// When we are filling something out as users, we would like to receive simultaneous feedback
// so we don’t waste time. And that’s what this command does.
// It’s as if it listens to what the user is "saying" at the moment and comments to help them.
// In this way, the event will always be triggered to assist the user.
// In other words, providing real-time feedback to the person.

form.addEventListener("submit", validateForm);
// This is just one more second layer of validation, at the moment the user acts,
// when they click to submit the form, the form receives another fine-tooth validation of the 3 inputs and the textarea.
// It's just one more layer of security for the user.
