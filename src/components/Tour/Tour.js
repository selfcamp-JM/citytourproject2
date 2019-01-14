import React,{ Component} from "react";
import "./Tour.scss";

export default class Tour extends Component{
 render(){
     return(
         <article>
             <div className="img-container">
                <img width = "200"
                src="https://render.fineartamerica.com/images/images-profile-flow/350/images/artworkimages/medium/1/ascension-diego-fernandez.jpg" alt="" />
                
                <span className="close-btn">
                 <i className="fas fa-window-close"/>
                </span>
             
             </div>
             <div className="tour-info">
               <h3>City</h3>
               <h4>Name</h4>
               <h5>Info
                   <span>
                    <i className="fas fa-caret-square-down"/>
                   </span>
                   <p>Lorem sdasd ad daer sadg asda sdafda</p>
               </h5>
             </div>
         </article>
     )
 }
}