const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <div>
        <img src ={student.imageUrl} width="200" height="200"></img>

      </div>
      <div>
      {student.email}

       <h2>GPA = {student.gpa}</h2>
      </div>
      <h3>
      {student.campus.name}
      </h3>
    </div>
  );

};

export default StudentView;
