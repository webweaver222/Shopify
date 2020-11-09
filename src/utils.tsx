import React from "react";

const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((wrapped, func) => func(wrapped), comp);
};

const filterObjectProps = (raw: object, allow: string) =>
  Object.keys(raw)
    .filter((p) => p.indexOf(allow) > -1)
    .reduce((obj, key) => {
      obj[key] = raw[key];
      return obj;
    }, {});

const renderErrors = (arr: string[]) => arr.map((e, i) => <li key={i}>{e}</li>);

export { compose, filterObjectProps, renderErrors };
