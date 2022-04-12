import { unitLookup } from "uom-units";
import { PropertyValueSet } from "@promaster-sdk/property";

const seriliazedString =
  "GasCost=7.25E-06:OnePerJoule;GasCostpriceinc=0.04:One";
(function () {
  console.log("before convertion", seriliazedString);
  const pvs = PropertyValueSet.fromString(seriliazedString, unitLookup);
  const toStringAgain = PropertyValueSet.toString(pvs);
  console.log("to string again ", toStringAgain);
})();
