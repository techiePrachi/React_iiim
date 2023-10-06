import './Home.css';
import stud from './images/stu.avif'
import Nav from './Nav'
import Sectn from './Sectn'

function Home() {
    return(
        <>
        <Nav />
        <div className="wlcm">
            <h1>Heyy GEN-Z, Welcome to IIIM</h1>
            <img src="https://www.iisjaipur.org/iiim/images/Sliders/1.jpg"></img>
        </div>
        <br />
        <div className='benefits'>
            <h1> Benefits of taking admission in ISIM </h1>
            <ul>
                <li>Extra Classes</li>
                <li>Hackathon</li>
                <li>Soft-Skills</li>
                <li style={{color:'red'}}>Khud count krlo!!!!!</li>
                <li style={{color:'green'}}>or check official website..</li>
                <li>....</li>
                <li>...</li>
                <li>..</li>
                <li>.</li>
            </ul>
        </div>
        <img src= {stud} style={{width:'42.4%', margin:'10px'}}></img>
        <Sectn />
        </>
    )
}

export default Home;