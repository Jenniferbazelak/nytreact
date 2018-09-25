import React from "react";
import "./Results.css";

const Results = props => (

<div className="row">
<div className="col-md-12">
    <div className="card mt-5 mb-5 card-box">
        <div className="card-header"><i className="fas fa-th"></i> Top Articles</div>
        {props.results.map(result => (
                  <div className="card-body" key={result.id}>
                    <a className="url" href={result.link}><span className="title">{result.title}</span> </a>
                    <p className="summary">{result.summary}</p> <button type="button" onClick={this.state.handleSaveArticle} data-id={result.id} class="btn btn-info" id="saveButton"><i className="fas fa-search"></i> Save</button></div>
              ))}
</div>
</div>
</div>
);


export default Results;