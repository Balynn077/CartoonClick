import React from 'react';

const style = {
  logoIcon: {
    width: 150,
    heigth: 100
  },
  bgDark: {
    backgroundColor: `rgb(1,0,1)`
  }
}

const Banner = props => (
  <article style={style.bgDark} className="mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn">
    <h2 className="fw2 f4 lh-copy mt0 mb3 white animated fadeIn slower">
    Click characters to earn points. Clicking the same character twice is game over!
    </h2>
  </article>
);

export default Banner;