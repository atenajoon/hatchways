const Avatar = ({ student }) => {
  return <img className="avatar" alt="avatar icon" src={`${student.pic}`} />;
};

export default Avatar;
