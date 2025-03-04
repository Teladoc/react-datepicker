import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

// Can modify this line to run specific test
// e.g.:
// const context = require.context(".", true, /inject_times_test$/);
const context = require.context(".", true, /_test$/);

context.keys().forEach(context);
