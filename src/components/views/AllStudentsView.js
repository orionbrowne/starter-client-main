import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif',
    fontSize: '35px',
    color: '#CDDC39'
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  const classes = useStyles();


  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`student/new`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }

  return (
    <div>
    <Link className={classes.links} to={'/'} >
      <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
      Home Page
      </Button>
    </Link>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
  );
};


export default AllStudentsView;
