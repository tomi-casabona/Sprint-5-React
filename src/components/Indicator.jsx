export const Indicator = ({pasos, className, quantity}) => {
    return(
        <div className={className}> {pasos+1}-{quantity} </div>
    )
}