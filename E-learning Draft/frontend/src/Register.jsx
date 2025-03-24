import './App.css';

function Registration() {
  return (
    <div className="register-container">
    <h2>Register</h2>
    <div className="input-row">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
    </div>
    <input type="email" placeholder="Email" className="full" />
    <input type="password" placeholder="Password" className="full"  />
    <select className="full-width" >
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
    </select>
    <div className="btn-group">
      <button className="register-btn">Register</button>
      <button className="cancel-btn">Cancel</button>
    </div>
  </div>
  );
}

export default Registration;
