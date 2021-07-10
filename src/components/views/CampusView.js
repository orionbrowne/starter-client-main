

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <p>{campus.address}</p>
      <img src ={campus.imageUrl} width="200" height="200"></img>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>{name}</li>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;
