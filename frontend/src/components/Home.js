import React,{Component} from 'react';


export class Home extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                <h1 className="text-primary">Django React CRUD App</h1>
                <p className="text-primary">This is masterpiece 
                tutorial of Django, Rest API framework, React JS and MySQL
                </p>
                <h4>Technologies Used</h4>
               <ul className="text-secondary">
                   <li>Django Web Framework</li>
                   <li>Django Rest API Framework</li>
                   <li>React JS</li>
                   <li>MySQL</li>
                   </ul> 
                </div>
                

            </div>
        )
    }
}