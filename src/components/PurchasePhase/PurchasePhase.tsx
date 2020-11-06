import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { State } from "../../reducers";
import { changeStage } from "../../actions/punchase";

import arrow from "../../resources/svg/arrowR.svg";

import Form from "../Form";
import ShippingForm from "../ShippingForm";
import BillingForm from "../BillingForm";

const PurchasePhase = ({ stageIdx, onChangeStage }) => {
  const Stage = [ShippingForm, BillingForm][stageIdx];

  return (
    <div className="PurchasePhaseWrapper">
      <ul className="phase-menu">
        <li
          className={classnames(stageIdx === 0 && "active")}
          onClick={() => onChangeStage(0)}
        >
          Shipping
        </li>
        <img src={arrow} alt="arrow" />
        <li
          className={classnames(stageIdx === 1 && "active")}
          onClick={() => onChangeStage(1)}
        >
          Billing
        </li>
        <img src={arrow} alt="arrow" />
        <li>Payment</li>
      </ul>
      <Form>
        <Stage />
      </Form>
      <button onClick={() => onChangeStage(stageIdx + 1)}>Continue</button>
    </div>
  );
};

const mapStateToProps = ({ punchase: { stage } }: State) => ({
  stageIdx: stage,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeStage: (stage: number) => dispatch(changeStage(stage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchasePhase);
