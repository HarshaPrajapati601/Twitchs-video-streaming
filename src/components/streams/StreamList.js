import React from 'react';
import { connect } from 'react-redux';
import { fetchAllStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchAllStreams();
    }

    renderAdmin(currentStream) {
        if(currentStream?.userId === this.props.currentUserID) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">
                        Edit
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="Large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}

                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div> <h2> Streams</h2>
            <div className="ui celled list">
                {this.renderList()}
            </div>
            </div>
        )
    }
}

//to get the response list as the props
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserID: state.auth.userId
    }
}

export default connect(mapStateToProps, {fetchAllStreams})(StreamList);