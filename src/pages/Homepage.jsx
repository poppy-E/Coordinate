import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x7fffd4,
          color2: 0xb0c4de,
          size: 1.2,
          backgroundColor: 0x0d1b2a,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <main className={styles.homepage} ref={vantaRef}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          <span className={styles.highlight}>Coordinate</span> keeps track of
          your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
