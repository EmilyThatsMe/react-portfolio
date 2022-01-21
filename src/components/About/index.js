import React from 'react';
import myImage from '../../assets/images/me.jpg';

function About() {
  return (
    <section className="about">
      <h1 id="about">About Me</h1>
      <img className="about--img" src={myImage}></img>
      <p className="about--paragraph">
        consectetur felis turpis ac felis. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec commodo
        neque orci, et tristique lacus accumsan id. Donec posuere sodales
        maximus. Morbi interdum ipsum sit amet nibh viverra ullamcorper. Cras
        lacinia felis nisi, vel sodales nisi iaculis sed. Nunc id augue vel
        turpis semper fringilla sed tempor eros. Morbi imperdiet aliquet ipsum
        sit amet accumsan. In purus arcu, scelerisque quis metus vel, rhoncus
        efficitur sem. Morbi pharetra sit amet nunc et venenatis. In finibus
        elit a eros congue, nec faucibus neque tempus. Cras varius mollis massa,
        sit amet eleifend nunc fermentum sit amet. Nunc auctor vitae ipsum et
        consectetur. Vivamus a lorem leo.
      </p>
    </section>
  );
}

export default About;
