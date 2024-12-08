import AuthenticLayout from 'Authentic/Layout/DashboardLayout/DashboardLayout'
import React from 'react'
import Email from "./Email.json"

const ThousendEmailList: React.FC = () => {
  return (
    <>
      <AuthenticLayout>
        <hr />
        {/* Mapping over the Email data */}
        {Email.map(review => (
          <div key={review.props.review.id} className="review-item">
            {/* <p>Username: {review.props.review.username}@gmail.com</p> */}
            <p>{review.props.review.username}@gmail.com</p>
            {/* <p>Comment: {review.props.review.comment}</p>
            <p>Country: {review.props.review.reviewer_country}</p> */}
            {/* You can add more data points here */}
            {/* <p>length{Email.length }</p> */}
          </div>
        ))}
      </AuthenticLayout>
    </>
  );
}

export default ThousendEmailList;


// Email password below 
// ezbj bzbw ycos gfil
