import '../Stylesheets/mystyle.css'

const percentToDecimal = (decimal) => {
    return (decimal.toFixed(2) + '%')
}

const calculateScore = (total, goal) => {
    return percentToDecimal(total/goal)
}

export const CalculateScore = ({Name, School, total, goal}) => (
    <div className='formatstyle'>
        <h1><font color = "#FBDB93">Student Details: </font></h1>

        <div className='Name'>
            <b><span>Name: </span></b>
            <span>{Name}</span>
        </div>

        <div className='School'>
            <b><span>School: </span></b>
            <span> {School}</span>
        </div>

        <div className='Total'>
            <b><span>Total: </span></b>
            <span> {total}</span>
            <span> Marks </span>
        </div>

        <div className='Score'>
            <b> Score: </b>
            <span>
                {calculateScore(total, goal)}
            </span>
        </div>
    </div>
)