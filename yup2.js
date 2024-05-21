const yup = require("yup");

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(() => new Date()),
});

// check validity
schema
  .isValid({
    name: "Jimmy",
    age: 55,
    email: "jimmy@gmail.com",
    website: "https://FreaksandGeeks.com",
    createdOn: new Date(),
  })
  .then((valid) => {
    console.log(valid);
  })
  .catch((error) => {
    console.error("Validation failed:", error);
  });
