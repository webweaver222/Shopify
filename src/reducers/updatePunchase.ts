import { Punchase } from "../models/puchase";
import { Action, ActionTypes } from "../actions/punchase";

const initialPunchase: Punchase = {
  stage: 0,
  validate: false,
  valid_errors: {},
};

const updatePunchase = (punchase: Punchase, action: Action): Punchase => {
  if (typeof punchase === "undefined") return initialPunchase;

  switch (action.type) {
    case ActionTypes.CHANGE_PUNCHASE_STAGE: {
      return {
        ...punchase,
        stage: action.payload.stage,
        validate: false,
        valid_errors: {},
      };
    }

    case ActionTypes.VALIDATE_STAGE: {
      return {
        ...punchase,
        validate: true,
      };
    }

    case ActionTypes.VALIDATION_FAIL: {
      return {
        ...punchase,
        valid_errors: action.payload.errors,
      };
    }

    default:
      return punchase;
  }
};

export default updatePunchase;
