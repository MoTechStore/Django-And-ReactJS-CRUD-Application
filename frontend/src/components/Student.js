import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';



export class Student extends Component{

    constructor(){
        super();
        this.state={
            deps:[]
        }
    }

    refreshList(){
        fetch('http://127.0.0.1:8000/student/')
        .then(response=>response.json())
        .then(deps=>{
            this.setState({
                deps:deps
            });
            console.log(deps);

        })};


    componentDidMount(){
        this.refreshList();
        }

    componentDidUpadte(){
        this.refreshList();
            }
            

    render(){
        const stuData = this.state.deps;
        const rows = stuData.map((stu) =>
        <tr key={stu.id}>
            <td>{stu.studentId}</td>
            <td>{stu.Firstname}</td>
            <td>{stu.Lastname}</td>
            <td>{stu.Email}</td>
            <td>{stu.Course}</td>      


      </tr>
        );

        return(
         
            <div>
                <p id="before-table"></p>
               <Table className="table table-bordered" id="dataTable">
                <thead>
                    <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Course</th>

                </tr>
                </thead>
                <tbody>
                    {rows} 
                </tbody>
                </Table>
            </div>

        )
    }
}
