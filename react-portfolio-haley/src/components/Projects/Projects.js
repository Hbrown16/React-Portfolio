import classes from './Projects.module.css'
import PageHeader from '../PageHeader/PageHeader'
import Superheroes from './../../img/Askoracle.gif'
import Music from './../../img/vibezs.gif'

const linkBtnSvg = (url) => {
    return (
        <div className={StyleSheet.linkButton}
        onClick={(e) => window.open(url, "_blank").focus}
        >
         <svg class="svg-icon" viewBox="0 0 20 20">
             <path 
             fill="none"
             d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
            ></path>
         </svg>
    </div>
   );
};

const projectClip = (url, thumbnail, description) => {
    return (
        <div className={StyleSheet.VideoContainer}>
            <div className={StyleSheet.Thumbnail}>
                {linkBtnSvg(url)}
                <img src={thumbnail} alt="thumbnail"></img>
            </div>
            <div className={StyleSheet.Text}>
                <p>{description}</p>
            </div>
        </div>
    );
};

const askOracleDescription = `Ask Oracle allows users to search all their favorite superheros and see what movies and comics they have played in.`;
const vibezDescription = `Vibez gives users the ability to download music on an app and still be able to listen to offline.`;

const Projects = () => {
    return (
        <div className={classes.Projects} id="projects">
            <PageHeader title={"Projects"} />
            <div className={classes.ProjectsContent}>
                <div className={classes.Paragraph}>
                    <p>
                        Click on the images below to view each Github repository for the follwoing projects. There you will find a
                        README.md file in each repo with a deployed link. Feel free to follow me on Github and reach out if you have 
                        any questions.
                    </p>
                </div>
                <div className={classes.Videos}>
                    {projectClip(
                       "https://github.com/Hbrown16/ask-oracle",
                       Superheroes,
                       askOracleDescription 
                    )}
                    {projectClip(
                        "https://github.com/Hbrown16/team_depot",
                        Music,
                        vibezDescription
                    )}
                </div>
            </div>
        </div>
    );
};
 
export default Projects;