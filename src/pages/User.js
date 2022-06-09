import { useParams } from "react-router-dom";

function User(props) {
  const params = useParams();
  // Get Id Parameter from Url
  const id = params.id;
  // Get User with associated Id
  const user = props.data.filter((element) => element.login.uuid === id);
  const birthdayDate = new Date(Date.parse(user[0].dob.date));
  const currentDate = new Date(Date.now());
  if (currentDate.getMonth() > birthdayDate.getMonth()) {
    birthdayDate.setFullYear(currentDate.getFullYear() + 1);
  } else {
    birthdayDate.setFullYear(currentDate.getFullYear());
  }
  const diffTime = Math.abs(birthdayDate - currentDate);
  // Days to Next Birthday
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div className="user">
      <div className="App-header">User Details</div>
      <div className="user-info">
        <div id="user-header">
          {user[0].name.title +
            " " +
            user[0].name.first +
            " " +
            user[0].name.last}
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
          <div style={{width:"300px",height:"300px",paddingTop:"20px",paddingBottom:"20px"}}><img src={user[0].picture.large} alt="user" /></div>
          <div style={{paddingLeft:"20px"}}>
            <div>
              <strong>Phone No:</strong> {user[0].phone}
            </div>
            <div>
              <strong>Cell No:</strong> {user[0].cell}
            </div>
            <div>
              <strong>DOB:</strong>{" "}
              {new Date(Date.parse(user[0].dob.date)).toLocaleDateString()}
            </div>
            <div>
              <strong>Days to Next Birthday:</strong> {diffDays} Days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
