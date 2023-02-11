import './css/TaskBar.css';
import win95 from '../assets/win95.png';



function TaskBar() {
    return (
        //navbar from ./css/TaskBar.css
        <div className='wrapper'>
            <div className='bar-container' id='task-bar'>
                <div className="start-menu">
                    <div className="container-border">
                        <img src={win95} alt='win-logo' />
                        <div className="start-menu-text">
                            <span>Start</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TaskBar;
