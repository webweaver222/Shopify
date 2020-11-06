import { Punchase } from "../models/puchase";
import { Action, ActionTypes } from "../actions/punchase";

const initialPunchase: Punchase = {
  stage: 0,
};

const updatePunchase = (punchase: Punchase, action: Action): Punchase => {
  if (typeof punchase === "undefined") return initialPunchase;

  switch (action.type) {
    case ActionTypes.CHANGE_PUNCHASE_STAGE: {
      return {
        ...punchase,
        stage: action.payload.stage,
      };
    }

    default:
      return punchase;
  }
};

export default updatePunchase;
