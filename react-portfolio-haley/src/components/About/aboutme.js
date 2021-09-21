import classes from '../About/About.module.css'
import PageHeader from '../PageHeader/PageHeader'
import me from './../../img/about-me.jpeg'
const About = () => {
    return (
        <div className={classes.AboutMe}>
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I'm Haley</h2>
                    <p>
                        Hello and thank you for viewing my portfolio. My name is Haley Brown and I am from charlotte
                        but I currently live in Rock Hill, SC. I am working on becoming a Full Stack Web developer at
                        the part time Full Stack Coding Bootcamp through the University of North Carolina at Charlotte.
                        While I am getting my certification in web developement, I am working full time at Dick's Sporting Goods
                        as a department lead. I have a background in customer service and I bring a unique perspective to programming. 
                        I am definetly looking for a career change and I can not wait to join your team. 
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="me"></img>
                </div>
            </div>
        </div>
    );
}
 
export default About;