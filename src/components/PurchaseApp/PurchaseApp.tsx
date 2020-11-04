import React from "react";
import { connect } from "react-redux";
import "./PurchaseApp.sass";

import PurchasePhase from "../PurchasePhase";

const PurchaseApp = () => {
  return (
    <div className="PurchaseAppWrapper">
      <PurchasePhase />
    </div>
  );
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseApp);
