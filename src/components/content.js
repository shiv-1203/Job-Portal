import React from "react";
import '../App.css';
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }
    componentDidMount(){
        fetch('http://refertest.pythonanywhere.com/job/openings')
        .then(res=>res.json())
        // .then(res=>console.log(res.data[0].company))
        .then((json)=>{
            this.setState({
                items:json.data
            });
        })
    }
    render(){
        var item1=this.state.items;
        return(
            <div className="cont">
            {item1 && item1.map((item1)=>(
                <div className="maincont">
                    <h2 className="designaton">{item1.designation}</h2>
                    <img src={'https://logo.clearbit.com/www.'+item1.company.replace(' ','')+'.com'} style={{width:70,height:70}} className="logo"></img>
                    <div className="company"><strong>Company :</strong> {item1.company}</div><br></br>
                    <div className="location"><strong>Location :</strong> {item1.location}</div>
                    <div className="id"><strong>id :</strong> {item1.id}</div>
                    <div className="experience"><strong>Min-Experience :</strong> {item1.min_experience}</div>
                    <div className="skills"><strong>Skills Required :</strong> {item1.skills.join(', ')}</div>
                    <div className="apply">Apply Now</div>
                </div>
            ))}
            </div>
        );
    }
}
export default Content;