import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// Can modify this line to run specific test
// e.g.:
// const context = require.context(".", true, /inject_times_test$/);
const context = require.context(".", true, /_test$/);

context.keys().forEach(context);
