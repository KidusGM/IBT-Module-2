const signupForm = document.querySelector("#signup-form");

const fullName = document.querySelector("#full-name");
const phoneNumber = document.querySelector("#phone-number");
const email = document.querySelector("#email");
const age = document.querySelector("#age");

const message = document.querySelector("#message");

const totalPeople = document.querySelector("#total-people");

const studentList = document.querySelector("#student-list");


const phonePattern = /^(?:\+251|0)9\d{8}$/;


/* -----------------------------
   LOAD STUDENTS
----------------------------- */

function loadStudents() {

  try {

    const savedStudents =
      localStorage.getItem("registeredPeople");


    if (savedStudents === null) {
      return [];
    }


    const students = JSON.parse(savedStudents);


    if (!Array.isArray(students)) {
      return [];
    }


    return students;

  } catch (error) {

    return [];

  }
}


/* -----------------------------
   SAVE STUDENTS
----------------------------- */

function saveStudents() {

  localStorage.setItem(
    "registeredPeople",
    JSON.stringify(students)
  );

}


/* -----------------------------
   VALIDATION
----------------------------- */

function checkInput(
  name,
  phone,
  emailAddress,
  studentAge
) {

  if (name.length < 2) {

    return "Please enter at least two characters for your name.";

  }


  if (!phonePattern.test(phone)) {

    return "Please enter a valid Ethiopian phone number.";

  }


  if (emailAddress === "") {

    return "Please enter your email address.";

  }


  if (studentAge === "") {

    return "Please enter your age.";

  }


  if (Number(studentAge) < 18) {

    return "You must be at least 18 years old.";

  }


  if (Number(studentAge) > 100) {

    return "Please enter a valid age.";

  }


  return null;
}


/* -----------------------------
   GET SAVED STUDENTS
----------------------------- */

const students = loadStudents();


/* -----------------------------
   UPDATE COUNTER
----------------------------- */

function updateTotal() {

  totalPeople.textContent =
    `Registered people: ${students.length}`;

}


/* -----------------------------
   DISPLAY STUDENTS
----------------------------- */

function displayStudents() {

  // Clear the existing table
  studentList.textContent = "";


  students.forEach(function (student, index) {

    const row = document.createElement("tr");


    const numberCell =
      document.createElement("td");

    const nameCell =
      document.createElement("td");

    const phoneCell =
      document.createElement("td");

    const emailCell =
      document.createElement("td");

    const ageCell =
      document.createElement("td");


    numberCell.textContent = index + 1;

    nameCell.textContent = student.name;

    phoneCell.textContent = student.phone;

    emailCell.textContent = student.email;

    ageCell.textContent = student.age;


    row.appendChild(numberCell);

    row.appendChild(nameCell);

    row.appendChild(phoneCell);

    row.appendChild(emailCell);

    row.appendChild(ageCell);


    studentList.appendChild(row);

  });

}


/* -----------------------------
   FORM SUBMISSION
----------------------------- */

signupForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    const nameValue =
      fullName.value.trim();

    const phoneValue =
      phoneNumber.value.trim();

    const emailValue =
      email.value.trim();

    const ageValue =
      age.value.trim();


    message.textContent = "";


    const problem = checkInput(
      nameValue,
      phoneValue,
      emailValue,
      ageValue
    );


    if (problem !== null) {

      message.textContent = problem;

      message.className = "error";

      return;
    }


    /* Create new student */

    const newStudent = {

      name: nameValue,

      phone: phoneValue,

      email: emailValue,

      age: Number(ageValue)

    };


    /* Add student to array */

    students.push(newStudent);


    /* Save array */

    saveStudents();


    /* Success message */

    message.textContent =
      "Registration completed successfully!";

    message.className = "success";


    /* Clear form */

    signupForm.reset();


    /* Update number */

    updateTotal();


    /* Update table */

    displayStudents();


    console.log(students);

  }
);


/* -----------------------------
   RUN WHEN PAGE LOADS
----------------------------- */

updateTotal();

displayStudents();

