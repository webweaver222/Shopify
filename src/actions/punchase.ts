export enum ActionTypes {
  CHANGE_PUNCHASE_STAGE = "CHANGE_PUNCHASE_STAGE",
}

export interface ChangePunchaseStage {
  type: ActionTypes.CHANGE_PUNCHASE_STAGE;
  payload: {
    stage: number;
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

export type Action = ChangePunchaseStage;
