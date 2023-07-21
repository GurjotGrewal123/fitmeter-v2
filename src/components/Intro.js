import '../styles/Intro.css';
import { Link } from 'react-router-dom';


const Intro = () => {

    return (
        <div class="main-page">
            <div class="main-page-title">
                <p>FitMeter</p>
            </div>

            <div class="slogan">
                <div class="main-page-slogan">
                    <p>Fitness and Health Tracking</p>
                </div>
            </div>
            <li class="navbar-book-now">
                <button class="navbar-book-btn"><Link to="/fitmeter-v2/Nutrition">BUY NUTRITION</Link></button>
            </li>
        </div>
    );
}

export default Intro
