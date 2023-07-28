import classes from "./ShowTotalPrice.module.css"

function ShowTotalPrice(props){
    return(
        <div className={classes.div}>
            <h2>
                Total value of the whole products is = Rs.{props.totalAmount}
            </h2>
        </div>
    )
}
export default ShowTotalPrice