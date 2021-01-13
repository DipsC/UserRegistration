import React from "react";

const UserRow = ({ data, index, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.gender}</td>
      <td>{data.phoneNumber}</td>
      <td>{data.address}</td>
      <td>{data.designation}</td>
      <td>
        <button className="btn btn-dark" onClick={() => onEdit(index)}>Edit</button>
      </td>
      <td>
        <button className="btn btn-dark" onClick={() => onDelete(index)}>Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
