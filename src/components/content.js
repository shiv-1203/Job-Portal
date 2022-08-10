import React from "react";
import '../App.css';
import openings from "./openings.json";
class Content extends React.Component{
    render(){
        var item1=openings.data;
        return(
            <div className="cont">
            {item1 && item1.map((item1)=>(
                <div className="maincont">
                    <h2 className="designaton">{item1.designation}</h2>
                    <img src={'https://logo.clearbit.com/www.'+item1.company.replace(' ','')+'.com'} alt="logo" style={{width:70,height:70}} className="logo"></img>
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