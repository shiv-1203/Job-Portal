import '../logo.svg'
import React from "react"
import '../App.css'
import details from "./details"
class Profiledisp extends React.Component{
    constructor(props) {
		super(props);

		this.state = {
			ishidden:true
		};
	}
	funcn(){
		this.setState({
			ishidden:!this.state.ishidden
		})
	}
	render() {
		const item1 = details.data;
        return(
            <div className="Profiledisp">
			<img src={item1.pictureUrl} alt="Profile" className="img" onClick={this.funcn.bind(this)}/>
			<div className="details">
            {!this.state.ishidden && (<div className="inner">
				<img src={item1.pictureUrl} alt="Profile" className="img1" /><br></br>
                id: {item1.id}<br></br>
                User_Name: {item1.name}<br></br>
                College: {item1.college}
			</div>)}
			</div>
            </div>
        );
	}
}
export default Profiledisp;