const UserDetail = ({ name = "guest", age }) => {
  return (
    <div>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
    </div>
  );
};

export default UserDetail;
