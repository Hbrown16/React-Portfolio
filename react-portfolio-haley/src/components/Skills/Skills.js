import classes from '../Skills/Skills.module.css'
import PageHeader from '../PageHeader/PageHeader'

const listTitleStyle = {fontWeight: 900, color:'#9B1FE8', marginBottom: '4px' }

const backendSkills =
<ul>
    <li style={ listTitleStyle }>BackEnd</li>
    <li>Java - SQL - mySQL</li>
    <li>Node.js - Express.js - PHP</li>
    <li>Sails</li>
</ul>

const frontendSkills =
<ul>
    <li style={ listTitleStyle }>Frontend</li>
    <li>HTML - ReactJS - CSS</li>
</ul>

const microsoft =
<ul>
    <li style={ listTitleStyle }>Microsoft Skills</li>
    <li>Word - Powerpoint - Excel</li>
    <li>Outlook</li>
</ul>

const otherProgramming = 
<ul>
    <li style={ listTitleStyle }>Other Programming Apps</li>
    <li>Github - Heroku - Squarespace</li>
</ul>

const otherApp = 
<ul>
    <li style={ listTitleStyle }>Other Applications</li>
    <li>Insomnia - Intera</li>
</ul>

const moreSkills = 
<ul>
    <li style={ listTitleStyle }>More Skills</li>
    <li>Photographer - Department Lead</li>
</ul>

const totalSkills = [backendSkills, frontendSkills, microsoft, 
                     otherProgramming, otherApp, moreSkills]

const Skills = () => {
    return (
        <div className={classes.Skills}>
            <PageHeader title={'Check out my skills'}/>
            <p>
                Full Stack Web Developer using my background in Warehouse operations and Customer Service to apply 
                problem solving and creativity to develop more user friendly applications. Always ready for a challenge,
                self driven, but also loves working in a team. Committed to always giving 110%.
            </p>
            <div className={classes.Container}>
                {totalSkills.map(skills => {
                    return (
                        <div className={classes.List}>
                            {skills}
                        </div>   
                    )
                })}
            </div>
        </div>

    );
}
 
export default Skills;