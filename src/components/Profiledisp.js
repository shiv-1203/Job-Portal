import '../logo.svg'
import React from "react";
import '../App.css'
class Profiledisp extends React.Component{
    constructor(props) {
		super(props);

		this.state = {
			items: [],
			ishidden:true
		};
	}
	componentDidMount() {
		fetch("http://refertest.pythonanywhere.com/user/data")
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				items: json.data
			});
		})
	}
	funcn(){
		this.setState({
			ishidden:!this.state.ishidden
		})
	}
	render() {
		const item1 = this.state.items;
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