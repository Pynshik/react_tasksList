const inputsValidation = () => {
  const task = Object.assign({}, Task);
  const firstNameErr = {};
  const lastNameErr = {};
  const emailErr = {};
  const regex = /^\S+@\S+\.\S+$/;
  let isValid = true;

  if (!task.firstName) {
    firstNameErr.noFirstName = 'Enter your first name';
    isValid = false;
  }

  if (!task.lastName) {
    lastNameErr.noFirstName = 'Enter your last name';
    isValid = false;
  }

  if (!regex.test(task.email)) {
    emailErr.emailIncorrect = 'Incorrect email';
    isValid = false;
  }

  setFirstNameErr(firstNameErr);
  setLastNameErr(lastNameErr);
  setEmailErr(emailErr);

  return isValid;
};

export default inputsValidation;
