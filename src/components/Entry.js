import React from "react";
import "./style.css";

class Entry extends React.Component {

  render() {
    const { entry } = this.props;
    return (
        
        <div className="hello">{entry.answers}</div>
    );
    
  }
}

export default Entry;
