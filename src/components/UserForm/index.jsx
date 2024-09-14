import { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions";

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("offline");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInfo(name, status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Status:
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="offline">Offline</option>
          <option value="online">Online</option>
        </select>
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (name, status) => dispatch(setUserInfo(name, status)),
});

export default connect(null, mapDispatchToProps)(UserForm);
