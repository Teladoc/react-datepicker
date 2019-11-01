import React, { Component } from "react";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
    startDate: new Date()
  };

  render() {
    const { startDate } = this.state;
    return (
      <DatePicker
        selected={startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={null}
        injectTimes={[
          setHours(setMinutes(new Date(), 1), 0),
          setHours(setMinutes(new Date(), 5), 12),
          setHours(setMinutes(new Date(), 59), 23)
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    );
  }

  handleChange = startDate => {
    this.setState({
      startDate
    });
  };
}

export default App;
