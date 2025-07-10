import LennyFaceBlink from './lennyfaceblink'
import { FaReddit, FaTwitter, FaChartLine, FaTelegram } from 'react-icons/fa';

export default function Footer(){
    return(
    <footer className='footer'>

        <div  className='footer-text'>
            <p>© 2025 $Lenny Face Universe.</p>
            <p>Not Financial Advice. Get Rekt (ง’̀-‘́)ง</p>
            <div className="footer-icons">
                <a href=''>X<FaTwitter className='social-iconX'/>|</a>
                <a href=''>Telelgram<FaTelegram className='social-iconTg'/>|</a>
                <a href='https://www.reddit.com/r/LennyFace/new/'>Reddit<FaReddit className='social-iconReddit'/>|</a>
                <a href=''>Chart<FaChartLine className='social-iconChart'/>|</a>
            </div>
            </div>
        <div>
            <LennyFaceBlink/>
        </div>

    </footer>

    )
    

}

