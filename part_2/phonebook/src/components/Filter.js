import React from "react";

const Filter = ({newFilter, handleFilter }) => {
    return (
        <div>
        Filter shown with: <input value={newFilter}
            onChange={handleFilter}/><br/>
        </div>
    )
}

export default Filter