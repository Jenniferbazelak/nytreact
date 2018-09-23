import React from "react";
import "./Results.css";

const Results = props =>

<div className="row">
<div className="col-md-12">
    <div className="card mt-5 mb-5 card-box">
        <div className="card-header"><i className="fas fa-th"></i> Top Articles</div>
        <div className="card-body">
        <a className="url" href={props.results.link}><span className="title">{props.title}</span> </a>
      <p className="summary">{props.summary}</p> <button type="button"  onClick={props.handleSaveArticle} data-id={props.id} class="btn btn-info" id="saveButton"><i className="fas fa-search"></i> Save</button>
    </div>
</div>
</div>
</div>



export default Results;