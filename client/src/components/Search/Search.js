import React from "react";
import "./Search.css";

const Search = props =>

<div className="row">
            <div className="col-md-12">
                <div className="card mt-5">
                    <div className="card-header"><i className="fas fa-newspaper"></i> Search Parameters</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <form>
                                <div className="form-group">
                                    <label>Search Term:</label>
                                    <input 
                                     onChange={props.handleInputChange}
                                     value={props.value}
                                     name="search"
                                    type="text" className="form-control" id="search-input" placeholder="Search for an Article"/>
                                </div>
                                <div className="form-group">
                                    <label>Start Date:</label>
                                    <input 
                                    onChange={props.handleInputChange}
                                    value={props.value}
                                    name="startDate"
                                    type="text" className="form-control" id="start-date-input" placeholder="YYYYMMDD"/>
                                </div>
                                <div className="form-group">
                                    <label>End Date:</label>
                                    <input 
                                      onChange={props.handleInputChange}
                                      value={props.value}
                                      name="endDate"
                                    type="text" className="form-control" id="end-date-input" placeholder="YYYYMMDD"/>
                                </div>
                                <div>
                                    <button type="button"  onClick={props.handleFormSubmit} className="btn btn-info" id="sButton"><i className="fas fa-search"></i> Search</button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


export default Search;