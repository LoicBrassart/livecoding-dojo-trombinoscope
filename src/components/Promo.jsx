import React from "react";
import Wilder from "./Wilder";

class Promo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.title}</h2>
        <ul className="Promo">
          {this.props.students.map((student, i) => {
            return (
              <Wilder
                key={i}
                firstName={student.firstName}
                lastName={student.lastName}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
export default Promo;
