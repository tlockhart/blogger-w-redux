import React from 'react';
import PropTypes from 'prop-types';

const Post = ({id, userId, title, body}) => {
    return (
        <>
              <h2>{title}</h2>
              <p>
                <strong>User Id</strong>{userId}
              </p>
              <p>
                <strong>Post Id</strong> {id}
              </p>
              <p>{body}</p>
            </>
    );
};

Post.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;