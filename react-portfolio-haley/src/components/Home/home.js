import classes from './Home/Home.module.css'
import code from './../../img/background1.jpg'
import binaryWorld from './../../img/about-me.jpeg'
const Home = () => {
    return (
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Haley Brown</h1>
                <h1>Welcome to Portfolio</h1>
            </div>
            <img className={classes.Code} src={code} alt= "code"></img>
            <img className={classes.BinaryWorld} src={binaryWorld} alt= "me"></img>
        </div>
    );
}
 
export default Home;