import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddProjectTask extends Component {
    constructor(){
        super()
        this.state ={
            summary :"",
            acceptanceCriteria: "",
            status: ""
        };
    }

    onchange = (e) => {
        this.setState({[e.target.name] : e.target.value})
        // console.log(e);
    };

    render() {
        return (
            <div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Add /Update Project Task</h4>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="summary" value={this.state.summary} placeholder="Project Task summary" onChange={this.onchange} />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" value={this.state.acceptanceCriteria} name="acceptanceCriteria" onChange={this.onchange}></textarea>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg" name="status" value={this.state.status} onChange={this.onchange}>
                                <option value="">Select Status</option>
                                <option value="TO_DO">TO DO</option>
                                <option value="IN_PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default AddProjectTask;
