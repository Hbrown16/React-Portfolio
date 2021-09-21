import classes from '../About/About.module.css'
import PageHeader from '../PageHeader/PageHeader'
const About = () => {
    return (
        <div className={classes.AboutMe}>
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I'm Haley</h2>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default About;