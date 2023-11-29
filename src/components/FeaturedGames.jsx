import React from 'react';

const FeaturedGames = () => {
    return <>
        <div style={{marginLeft: '2%'}} className="h2 text-white">Featured Games</div>
        <div className='d-flex w-100 justify-content-center align-items-center py-4'>
            <div style={{width: '25%', margin: '2%'}}><img style={{width: '85%'}} src='https://media-rockstargames-com.akamaized.net/mfe2/sites-gta-trilogy/035f473/img/be50e86e4a053c675d18.jpg' alt='featured_games' /></div>
            <div style={{width: '25%'}}><img style={{width: '85%'}} src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg' alt='featured_games' /></div>
            <div style={{width: '25%'}}><img style={{width: '98%'}} src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/wallpapers/games/rdr2_rdo_frontierpursuits_tablet.jpg' alt='featured_games' /></div>
            <div style={{width: '25%'}}><img style={{width: '85%'}} src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg' alt='featured_games' /></div>
        </div>
    </>;
};

export default FeaturedGames;
