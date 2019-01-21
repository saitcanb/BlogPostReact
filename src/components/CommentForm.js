import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {

    render() {
        return (
            <div>
                <div className="card my-4">
                    <h5 className="card-header">Leave a Comment:</h5>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <textarea className="form-control" rows="3"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentForm;
