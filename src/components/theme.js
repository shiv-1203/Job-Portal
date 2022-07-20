import React from 'react';
import '../App.css';
import $ from 'jquery';
import Content from './content.js';
import Profiledisp from './Profiledisp.js';
class Theme extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ishidden:true
        };
    }
    func(){
        this.setState({
            ishidden:!this.state.ishidden
        })
    }
    render(){
        $(document).ready(function() {
            $("#darkbluecolor").click(function(){
                $(".apply").css("background-color","darkblue"); 
                $(".Navbar").css("background-color","darkblue"); 
                $(".details").css("background-color","darkblue"); 
                $(".theme1").css("background-color","darkblue"); 
            });
            $("#blackcolor").click(function(){
                $(".apply").css("background-color","black"); 
                $(".Navbar").css("background-color","black"); 
                $(".details").css("background-color","black"); 
                $(".theme1").css("background-color","black"); 
            });
            $("#Marooncolor").click(function(){
                $(".apply").css("background-color","maroon"); 
                $(".Navbar").css("background-color","maroon"); 
                $(".details").css("background-color","maroon"); 
                $(".theme1").css("background-color","maroon"); 
            });
            $("#greencolor").click(function(){
                $(".apply").css("background-color","green"); 
                $(".Navbar").css("background-color","green"); 
                $(".details").css("background-color","green"); 
                $(".theme1").css("background-color","green"); 
            });
            $("#Purplecolor").click(function(){
                $(".apply").css("background-color","purple"); 
                $(".Navbar").css("background-color","purple"); 
                $(".details").css("background-color","purple"); 
                $(".theme1").css("background-color","purple"); 
            });
        });
        return(
            <div className='theme'>
            <a onClick={this.func.bind(this)}>Theme</a>
            <div className="theme1">
                {!this.state.ishidden && (
                    <div className='themeinner'>
                        <div className='color' id='blackcolor'>Black (default)</div><hr style={{color:"white"}}></hr>
                        <div className='color' id='darkbluecolor'>Dark Blue</div><hr style={{color:"white"}}></hr>
                        <div className='color' id='Marooncolor'>Maroon</div><hr style={{color:"white"}}></hr>
                        <div className='color' id='greencolor'>Green</div><hr style={{color:"white"}}></hr>
                        <div className='color' id='Purplecolor'>Purple</div>
                    </div>
                )}
            </div>
            </div>
        );
    }
}
export default Theme;