import React from 'react';
import style from '../styling/Home.module.css';

function Home() {
  return (
    <div className={style.home}>
      <h2 className={style.home__title}>Welcome to our page!</h2>
      <p className={style.home__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue
        quam, tincidunt eu nisl ac, ornare ultrices ipsum. Sed porttitor, sem in
        pellentesque placerat, tortor leo posuere eros, in aliquam velit libero
        quis orci. Suspendisse sollicitudin, neque et mattis ornare, neque odio
        sollicitudin mauris, id aliquet ligula elit ut risus. Suspendisse ornare
        sollicitudin condimentum. Vestibulum facilisis, metus non maximus
        efficitur, nisi neque varius quam, eu congue quam sem eu libero.
        Praesent sollicitudin convallis eros eu porttitor. Nulla semper, dolor
        ut luctus commodo, lorem nisi molestie urna, et elementum metus leo ut
        nibh. Vestibulum libero neque, pulvinar id porta vel, fringilla id ligula.
      </p>
      <br />
      <p className={style.home__text}>
        Duis non dolor sit amet ante fermentum tempor. Aenean gravida ultrices
        interdum. Nulla accumsan velit lectus, sed luctus mi ornare eu. Quisque
        eget mi mattis, cursus neque a, rutrum risus. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Phasellus vel ullamcorper nisl. Vivamus in tempus lorem. Vivamus blandit
        ante id nisl lobortis, vel sagittis lectus semper. Donec ut diam vel
        mauris maximus malesuada eu vitae mi. Ut luctus orci quis metus
        elementum porttitor sed id sapien. Vestibulum commodo sapien elit, eget
        vehicula dolor bibendum sed. Nulla facilisi. Vestibulum facilisis
        lobortis augue in cursus. Vestibulum lobortis sit amet purus vel
        ullamcorper. Vivamus sapien orci, iaculis sed imperdiet et, efficitur
        non tellus. Pellentesque dapibus erat tristique bibendum lobortis.
      </p>
    </div>
  );
}

export default Home;
