import { useRef } from "react";

function useDebug(name, props) {
  const renderNumber = useRef(0);

  renderNumber.current += 1;

  const prevValues = useRef(null);

  if (prevValues.current === null) {
    prevValues.current = { number: renderNumber.current, props };
  }

  const getDelta = (props, prevProps, recursiveFields) => {
    const printValue = (x) =>
      x === undefined
        ? "=undefined"
        : x === null
        ? "=null"
        : x === ""
        ? '=""'
        : x === false
        ? "=false"
        : x === true
        ? "=true"
        : x === 0
        ? "=0"
        : typeof x === "number"
        ? isNaN(x)
          ? "=NaN"
          : "=#"
        : typeof x === "string"
        ? `="${x.substring(0, 5)}${x.length > 5 ? ".." : ""}"`
        : Array.isArray(x)
        ? x.length > 0
          ? `=[...${x.length}]`
          : "=[]"
        : typeof x === "object"
        ? Object.keys(x).length > 0
          ? `={...${Object.keys(x).length}}`
          : "={}"
        : typeof x === "function"
        ? "=f()"
        : "";

    const arr = Object.keys(props)
      .map((k) => {
        let recursiveChanges = null;
        if (recursiveFields.includes(k)) {
          recursiveChanges = getDelta(props[k], prevProps[k], []);
        }
        return {
          changed: recursiveChanges
            ? recursiveChanges.changed
            : props[k] !== prevProps[k],
          log: `${String(k)}${
            recursiveChanges ? recursiveChanges.log : printValue(props[k])
          }`,
        };
      })
      .filter((x) => x.changed || renderNumber.current === 1);
    return {
      changed: arr.length > 0,
      log: `=|${arr.map((x) => x.log).join(", ")}|`,
    };
  };

  const delta = getDelta(props, prevValues.current.props, ["loading"]);

  if (delta.changed) {
    console.log(
      `[DEBUG-${name}]${renderNumber.current === 1 ? " [MOUNT]" : ""} (dN ${
        renderNumber.current - prevValues.current.number
      }) >> ${renderNumber.current === 1 ? "init" : "changed"}: ${delta.log}`
    );
    prevValues.current = { number: renderNumber.current, props };
  }
}

export default useDebug;
