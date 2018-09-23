import React from "react";
import "./Search.css";

const Search = props =>

<div class="row">
            <div class="col-md-12">
                <div class="card mt-5">
                    <div class="card-header"><i class="fas fa-newspaper"></i> Search Parameters</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <form>
                                <div class="form-group">
                                    <label for="search-input">Search Term:</label>
                                    <input type="text" class="form-control" id="search-input" placeholder="Japan"/>
                                </div>
                                <div class="form-group">
                                    <label for="start-year-input">Start Year (Optional):</label>
                                    <input type="text" class="form-control" id="start-year-input" placeholder="YYYYMMDD"/>
                                </div>
                                <div class="form-group">
                                    <label for="end-year-input">End Year (Optional):</label>
                                    <input type="text" class="form-control" id="end-year-input" placeholder="YYYYMMDD"/>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-info" id="sButton"><i class="fas fa-search"></i> Search</button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


export default Search;