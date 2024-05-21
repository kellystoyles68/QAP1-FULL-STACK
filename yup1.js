// YUP - npm i yup

const yup = require("yup");

// Define a schema
const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
});

// Validate an object against the schema
const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

schema
  .validate(user)
  .then(function (valid) {
    console.log(valid); // => true
  })
  .catch(function (err) {
    console.error(err);
  });
