import React, { Component } from "react";
import Star from "./Star";

class Rating extends Component {
  static defaultProps = { max: 5 };
  constructor(props) {
    super(props);
    this.state = {
      dynamicValue: props.stars,
      value: 0,
    };
    this._colors = {
      1: "#CC3232",
      2: "#DB7B2B",
      3: "#E7B416",
      4: "#99C140",
      5: "#2DC936",
    };
    this._meanings = {
      0: "No Rating 🚫",
      1: "Terrible 🤮",
      2: "Mediocre 😒",
      3: "Average 😐",
      4: "Solid 🙂",
      5: "Fantastic 🔥",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleClick(newValue) {
    this.setState({
      value: newValue,
      dynamicValue: newValue,
    });
  }
  handleMouseEnter(newValue) {
    this.setState({ dynamicValue: newValue });
  }

  handleMouseLeave(newValue) {
    this.setState({ dynamicValue: this.state.value });
  }

  render() {
    const { dynamicValue, value } = this.state;
    const starSpans = [];
    const max = this.props.max;
    let count = dynamicValue;
    // for (let v = 1; v <= max; v++) {
    //   if (v <= dynamicValue) {
    //     count++;
    //   }
    // }
    for (let v = 1; v <= max; v++) {
      starSpans.push(
        <Star
          key={v}
          color={this._colors[count]}
          isFilled={v <= dynamicValue}
          value={v}
          handleHover={this.handleMouseEnter}
          handleHoverLeave={this.handleMouseLeave}
          handleClick={this.handleClick}
        />
      );
    }
    return (
      <div>
        <p>{this._meanings[value]}</p>
        {starSpans}
      </div>
    );
  }
}
export default Rating;
