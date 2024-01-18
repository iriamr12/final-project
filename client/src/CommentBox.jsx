import React, { useState } from 'react';

const CommentBox = () => {

  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Comment submitted:', comment);
   
    setComment('');
  };

  return (
    <div>
      <h2>Comment Box</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your comment here..."
          value={comment}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default CommentBox;
