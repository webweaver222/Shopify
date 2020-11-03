class Validator {
  errors = {};

  validateFields = function (userData: {
    login?: string;
    email?: string;
    password?: string;
  }) {
    this.errors = {};

    Object.keys(userData).forEach(field => {
      if (userData[field] === "") {
        if (!this.errors.hasOwnProperty(field)) this.errors[field] = [];
        this.errors[field].push(`Empty ${field}`);
      }
    });
  };
}

export default Validator;
