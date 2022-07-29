import './Activity.css';
import Card from '../UI/Card';

const Acitvity = (props) => {
    const data = props.actData;

    return (
        <Card className='activity'>
            <h2>Aktivitas</h2>
            <div className='act-list'>
                {
                    data.map((act) => (
                        <div className='act-item'>
                    <h3>{act.logTitle}</h3>
                    <h4>{act.time}</h4>    
                </div>
                    ))
                }
            </div>
        </Card>
    )
};

export default Acitvity;