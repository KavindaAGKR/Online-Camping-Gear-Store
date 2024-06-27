
import './Account.css';
const Account = () => {
  const user = {
    name: 'John',
    email: 'john@gmail.com',
    address: 'colombo',
    phone: '0123456789',
  };
  return (
    <div className="account">
      <h2>My Account</h2>
      <div className="user-info">
        <div className="info-field">
          <label>Name:</label>
          <span>{user.name}</span>
        </div>
        <div className="info-field">
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
        <div className="info-field">
          <label>Address:</label>
          <span>{user.address}</span>
        </div>
        <div className="info-field">
          <label>Phone:</label>
          <span>{user.phone}</span>
        </div>
      </div>
      <button className="edit-profile-button">Edit Profile</button>
    </div>
    
  );
};

export default Account;
