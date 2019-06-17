import React from "react";
import PropTypes from "prop-types";
import Badget from "../badget/Badget";

const List = props => {
  const { data } = props;
  return (
    <div className="row">
      {data.total > 0 && (
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
      )}
      {data.total < 1 && <Badget msg="No Movies Found!" color="red" />}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.object.isRequired
};

export default List;
