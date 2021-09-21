import classes from '../Youtube/Youtube.module.css'
import PageHeader from '../PageHeader/PageHeader'
const Youtube = () => {
    return (
        <div className={classes.Projects}>
            <PageHeader title={"Projects"} />
            <div className={classes.ProjectsContent}>
                <div className={classes.Paragraph}>
                    <p>
                        Click on the images below to view each Github repository for the follwoing projects. There you will find a
                        README.md file in each repo with a deployed link. Feel free to follow me on Github and reach out if you have 
                        any questions.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Youtube;