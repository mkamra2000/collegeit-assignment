import "../App.css";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  // Handle Click for Each User
  function handleClick(id) {
    navigate("user/" + id);
  }
  return (
    <div className="App">
      <header className="App-header">CollegeIt Assignment</header>
      <div className="App-header" style={{ marginTop: "6px" }}>
        Users List
      </div>
      {props.data.length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {/* Display Each Row */}
              {props.data.map((row) => {
                return (
                  <tr
                    key={row.login.uuid}
                    onClick={() => handleClick(row.login.uuid)}
                  >
                    <td>
                      <strong>
                        {row.name.title +
                          " " +
                          row.name.first +
                          " " +
                          row.name.last}
                      </strong>
                    </td>
                    <td>
                      {row.gender.charAt(0).toUpperCase() + row.gender.slice(1)}
                    </td>
                    <td>{row.location.city}</td>
                    <td>{row.location.state}</td>
                    <td>{row.location.country}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
