import React from "react";

class BackNext extends React.Component {
  BackNext = (e) => {
    let a = e.target.value;
    this.props.BackNext(parseInt(a));

  };

  render() {
    return (
      <div className="flex pt-4 justify-between">
        <button
          value='-1'
          className="bg-blue-400 text-white py-1 px-4  focus:outline-none rounded shadow"
          onClick={ this.BackNext}
        ><i class="fas fa-long-arrow-alt-left"></i>
         &nbsp; Back
        </button>
        <button
          value="1"
          className="bg-blue-400 text-white py-1 px-4  rounded shadow"
          onClick={ this.BackNext}
        >
          Next   &nbsp;<i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    );
  }
}
export default BackNext;
