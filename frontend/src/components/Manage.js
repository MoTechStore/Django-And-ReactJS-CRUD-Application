import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { AddStudentModal } from "./AddStudentModal";

export class Manage extends Component{
    constructor(){
        super();
        this.state = {
            student:[], addModalShow:false, editModalShow:false
        }
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/student/')
        .then(response=>response.json())
        .then((data) =>{
            this.setState({
                student:data
            });
            console.log(data);
        })};

        componentDidMount(){
            this.fetchData();
        }

        componentDidUpdate(){
            this.fetchData();
        }

        deleteDep(stuid){
            if(window.confirm('Are you sure ?')){
                fetch('http://127.0.0.1:8000/student/' + stuid, {
                    method:'DELETE',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'}
                })
            }

        }

    render(){
        const {student, stuid, fname, lname, course, email} = this.state;
        let AddModelClose=()=>this.setState({addModalShow:false});
        return(
            <div>

            <p id="manage"></p>

<Table className="table table-bordered hover" id="dataTable">
                        <thead>
                        <tr>
                          <th>ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Course</th>
                          <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
        { student.map((stu) => 
                         
        <tr key={stu.id}>
        <td>{stu.studentId}</td>
        <td>{stu.Firstname}</td>
        <td>{stu.Lastname}</td>
        <td>{stu.Email}</td>
        <td>{stu.Course}</td>
        <td><ButtonToolbar>


            <Button className="mr-2" variant="danger" 
            onClick={()=>this.deleteDep(stu.studentId)}>
                Delete
            </Button>
            </ButtonToolbar> </td>
  </tr>)}

                        </tbody>
                    </Table>
                    <ButtonToolbar>
                        <Button variant="primary" onClick={()=>this.setState({addModalShow:true})}>
                        Add Student
                        </Button>
                        <AddStudentModal show={this.state.addModalShow}
                        onHide={AddModelClose}></AddStudentModal>
                    </ButtonToolbar>
            
        </div>
        )
    }
}