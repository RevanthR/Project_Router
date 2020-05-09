import React from 'react';

const Form = () =>{
    return(
        <form action="">
            <div className="row">
                <div className="col">
                    <input type="text" class="form-control" placeholder="SSO"></input>
                </div>
                <div className="col">
                    <input type="text" class="form-control" placeholder="Employee name"></input>
                </div>
                <div className="col">
                    <input type="text" class="form-control" placeholder="Temperature"></input>
                </div>
                <div className="col">
                    <input type="text" class="form-control" placeholder="Time"></input>
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
            </div>
        </form>
     
    );
};

export default Form;