import classes from '../PageHeader/PageHeader.module.css'

const PageHeader = () => {
    return (
        <div className={classes.Container}>
            <hr />
            <h1>{PaymentResponse.title}</h1>
        </div>
    );
}
 

export default PageHeader;