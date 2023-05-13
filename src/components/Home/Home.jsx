import React from 'react'
import './Home.css'
import Card from "../Card/Card";
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Home() {
    return (
        <div>
            <div className='cards'>
                <Card 
                    title="USUARIOS"
                    link="Ver todos los usuarios"
                    isMoney="#"
                    counter="1254"
                    icon= {<GroupIcon className="iconWidget" style={{color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)"}} />}/>

                <Card 
                    title="USUARIOS"
                    link="Ver todos los usuarios"
                    isMoney="#"
                    counter="1254"
                    icon={<StoreIcon className="iconWidget" style={{color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"}} />}/>
                <Card 
                    title="USUARIOS"
                    link="Ver todos los usuarios"
                    isMoney="$"
                    counter="1254"
                    icon={<AttachMoneyIcon className="iconWidget" style={{color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)"}} />}/>    
            </div>    
        </div>
    )
}

export default Home
