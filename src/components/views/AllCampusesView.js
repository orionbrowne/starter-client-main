import PropTypes from "prop-types";
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

const AllCampusesView = (props) => {
  const classes = useStyles();

  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  function show_image(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
  }

  document.body.style.backgroundImage = "url('https://millikin.edu/sites/default/files/styles/hero_slide__1400_x_680_/public/meaningful_hero_0.jpg?itok=1BE-z2Dz')";
  return (
    <div>
    <Link className={classes.links} to={'/'} >
      <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
      Home Page
      </Button>
    </Link>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <div><img src ={campus.imageUrl} width="200" height="200"></img></div>
        </div>
      ))}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
