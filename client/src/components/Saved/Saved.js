import React from "react";
import "./Saved.css";

const Saved = props =>

<div class="row">
<div class="col-md-12">
    <div class="card mt-5 mb-5 card-box">
        <div class="card-header"><i class="fas fa-th"></i> Saved Articles</div>
        <div className="card-body">
        <a className="url" href={props.link}><span className="title">{props.title}</span> </a>
      <p className="summary">{props.summary}</p><button type="button"  onClick={props.handleDeleteArticle} data-id={props.id} class="btn btn-info" id="deleteButton"><i className="fas fa-search"></i>Delete</button>
    </div>
    </div>
</div>
</div>


export default Saved;