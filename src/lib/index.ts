export { default as connect } from "./connect";
export { getInstantSearchContext } from "./instantSearchContext";
export { getServerState } from "./getServerState";
export { default as setup, searchStore } from "./setup";
export * from "./widgets";
export * from "./utils";

// Include only the reset
import "instantsearch.css/themes/reset.css";
