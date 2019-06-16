import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const { data } = props;
  return (
    <div className="row">
      {data.moviesByYear ? (
        <ul className="collection col s6 offset-s3">
          {data.moviesByYear.map((mov, i) => (
            <li key={i} className="collection-item avatar">
              <i className="material-icons circle teal">movie</i>
              <p>Year - {mov.year}</p>
              <p>Movies - {mov.movies}</p>
            </li>
          ))}
          <br />
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired
};

export default List;
