import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { State } from "../../reducers";

import arrow from "../../resources/svg/arrowR.svg";

import Form from "../Form";
import ShippingForm from "../ShippingForm";
import BillingForm from "../BillingForm";
import PaymentForm from "../PaymentForm";

const PurchasePhase = ({ stageIdx, onChangeStage }) => {
  const Stage = [ShippingForm, BillingForm, PaymentForm][stageIdx];

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
        <li
          className={classnames(stageIdx === 2 && "active")}
          onClick={() => onChangeStage(2)}
        >
          Payment
        </li>
      </ul>
      <Form>
        <Stage />
      </Form>
    </div>
  );
};

const mapStateToProps = ({ punchase: { stage } }: State) => ({
  stageIdx: stage,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, null)(PurchasePhase);
