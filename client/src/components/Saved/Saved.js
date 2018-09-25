import React from "react";

const Saved = ({ children }) =>

<div className="row">
<div className="col-md-12">
    <div className="card mt-5 mb-5 card-box">
        <div className="card-header"><i className="fas fa-th"></i> Saved Articles</div>
        {children}
    </div>
</div>
</div>


export default Saved;