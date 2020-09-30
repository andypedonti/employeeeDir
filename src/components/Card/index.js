import React from "react";


function UserCard({ data }) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={data.name.last} src={data.picture.thumbnail} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>FirstName:</strong> {data.name.first}
                    </li>
                    <li>
                        <strong>LastName:</strong> {data.name.last}
                    </li>
                    <li>
                        <strong>email:</strong> {data.email}
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default UserCard;