import { PunchaseValidErrors } from "../models/puchase";

export enum ActionTypes {
  CHANGE_PUNCHASE_STAGE = "CHANGE_PUNCHASE_STAGE",
  VALIDATE_STAGE = "VALIDATE_STAGE",
  VALIDATION_FAIL = "VALIDATION_FAIL",
}

export interface ChangePunchaseStage {
  type: ActionTypes.CHANGE_PUNCHASE_STAGE;
  payload: {
    stage: number;
  };
}

export interface ValidateStage {
  type: ActionTypes.VALIDATE_STAGE;
}

export interface ValidationFail {
  type: ActionTypes.VALIDATION_FAIL;
  payload: {
    errors: PunchaseValidErrors;
  };
}

export function changeStage(stage: number): ChangePunchaseStage {
  return {
    type: ActionTypes.CHANGE_PUNCHASE_STAGE,
    payload: {
      stage,
    },
  };
}

export function ValidationFail(errors: PunchaseValidErrors): ValidationFail {
  return {
    type: ActionTypes.VALIDATION_FAIL,
    payload: {
      errors,
    },
  };
}

export type Action = ChangePunchaseStage | ValidateStage | ValidationFail;
