import React from "react";

export default class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("from class component")
    this.state = ({
        showPhone: false,
        count: 10
      });
  }
  componentDidMount(){
    console.log("from didMount")
    this.timer = this.state.showPhone && setInterval(() => {
       console.log("understanding componentwillUnmount lifecycle") 
      }, 1000);
  }

  componentWillUnmount() {
    console.log("from willUnmount")
    clearInterval(this.timer);

  }

  render() {
    const { phone, website, email } = this.props;
    return (
      <>
        <h4>{website}</h4>
        <h4>{email}</h4>
        <h4>{this.state.showPhone && phone }</h4>
        <button onClick={() => this.setState({showPhone: !this.state.showPhone})}>Contact</button>
      </>
    );
  }
}
