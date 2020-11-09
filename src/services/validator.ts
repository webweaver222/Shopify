import { PunchaseValidErrors, PunchaseFormValues } from "../models/puchase";

class Validator {
  errors = {};

  validateFields = function (userData: {
    login?: string;
    email?: string;
    password?: string;
  }) {
    this.errors = {};

    Object.keys(userData).forEach((field) => {
      if (userData[field] === "") {
        if (!this.errors.hasOwnProperty(field)) this.errors[field] = [];
        this.errors[field].push(`Empty ${field}`);
      }
    });
  };
}

export class PunchaseValidator {
  valid_errors: PunchaseValidErrors = {};

  validateFields = function (userData: PunchaseFormValues) {
    this.valid_errors = {};

    Object.keys(userData).forEach((field) => {
      if (userData[field].trim() === "") {
        if (!this.valid_errors.hasOwnProperty(field))
          this.valid_errors[field] = [];
        this.valid_errors[field].push(`Empty ${field}`);
      }
    });
  };
}

export default Validator;
