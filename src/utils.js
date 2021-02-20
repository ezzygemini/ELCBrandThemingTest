import BEMHelper from "react-bem-helper";

export const pdpClasses = ({ prefix = "pdp-", name = "block-element" }) =>
  new BEMHelper({
    name,
    prefix,
  });

export const blockClasses = (blockName) => pdpClasses({ name: blockName });

export const pdpProductClasses = () => blockClasses("product");

export const pdpProductElementClasses = (element) => (...args) =>
  pdpProductClasses()(element, ...args);
