"use client";

import p5 from "p5";
import { useEffect, useRef } from "react";

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(100);
    p.circle(200, 200, 200);
  };

  p.draw = function () {
    // your draw code here
  };
}

export default function Canvas() {
  const p5ContainerRef = useRef();

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <section
      ref={p5ContainerRef}
      className="top-0 flex items-center justify-center w-full h-screen bg-red-200 bg-opacity-40 -z-50"
    ></section>
  );
}
