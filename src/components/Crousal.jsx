import React from 'react';
import { Button } from 'react-bootstrap';
import { data } from '../data/crousalData';

const Crousal = () => {
    return <div className='d-flex flex-wrap'>
        {data?.map((item) => (
            <>
                <div style={{width: '70%'}}><img style={{width: '100%'}} src={item.url} alt='crousal_pic' /></div>
                <div className='text-white'>
                    <div style={{fontSize: "18px", fontWeight: '500', paddingTop: '18%', paddingBottom: '4%'}}>{item.game_title}</div>
                    <div className='h1'>{item.title}</div>
                    <div className='h1' style={{paddingTop: '15%', marginLeft: '10%', marginBottom: '50%'}}><Button style={{padding: '5%', width: '65%', fontWeight: '500', fontSize: '20px'}} variant='outlined' className='text-white border-light'>WATCH NOW</Button></div>
                    <div className='d-flex justify-content-evenly align-items-center'>
                        <div style={{backgroundColor: 'white', height: '0.5vh', width: '20%', borderRadius: '20px'}}></div>
                        <div style={{backgroundColor: 'rgb(102,102,102)', height: '0.5vh', width: '20%', borderRadius: '20px'}}></div>
                        <div style={{backgroundColor: 'rgb(102,102,102)', height: '0.5vh', width: '20%', borderRadius: '20px'}}></div>
                        <div style={{backgroundColor: 'rgb(102,102,102)', height: '0.5vh', width: '20%', borderRadius: '20px'}}></div>
                    </div>
                </div>
            </>
        ))}
  </div>;
};

export default Crousal;
