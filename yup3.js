const yup = require("yup");

//const Person = require("./path_to_person_model");

//define schema
let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  createdOn: yup.date().default(() => new Date()),
});

//validate the schema
schema
  .validate({
    name: "kelly",
    age: 35,
    createdOn: "2024-05-19T19:25:25Z",
  })
  .then((validatedData) => {
    const kelly = new Person(validatedData);
    kelly
      .save()
      .then(() => {
        console.log("person saved");
      })
      .catch((err) => {
        console.error("Error saving person:", err);
      });
  })
  .catch((validationError) => {
    console.error("Validation failed:", validationError);
  });
