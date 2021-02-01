import React from 'react';
import API from "../../utils/API";

const Submit = (props) => {
    
        //submitting data to back end
        handleSubmit = (e) => {
            e.preventDefault();
            API.savePost({
              moves: this.state.moves
            })
              .then(result => {
                console.log({moves})
              })
              .catch(err => console.log(err));
        };
    
    return(
    <div>
    <button className="btn btn-success" type="submit" onClick={handleSubmit}>Submit</button>
    </div>
    )
};

export default Submit;