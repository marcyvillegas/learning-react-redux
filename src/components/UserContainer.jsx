import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ fetchUsers, userData }) {

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            <h1>From UserContainer Async Actions {"(Fetching from API)"}</h1>
            {
                userData.loading
                    ? <h3>Loading...</h3>
                    : userData?.data?.map(
                        item => (
                            <p key={item.id}>{item.name}</p>
                        ))
            }

            {
                userData?.error !== "" && <p>{userData.error}</p>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
