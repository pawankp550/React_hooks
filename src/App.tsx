import { useEffect, useState } from "react";
import HocTest from "./HocTest";
import "./styles.css";

const randomColor = () => {
  const randomS = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + randomS[Math.floor(Math.random() * 16)];
  }

  return color;
};

const CircleEle = ({
  top,
  left,
  color
}: {
  top: number;
  left: number;
  color: string;
}) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundColor: color,
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        opacity: "0.5"
      }}
    ></div>
  );
};

const isOverLapping = (current, circles) => {
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    console.log({
      current,
      circle,
      left: Math.abs(circle.left - current.left)
    });
    const overlaps =
      Math.abs(circle.left - current.left) < 100 &&
      Math.abs(circle.top - current.top) < 100;
    if (overlaps) return true;
  }
};

export default function App() {
  const [circles, setCircles] = useState<any>([]);

  const onMouseClick = (e: MouseEvent) => {
    const coords = {
      left: e.clientX - 50,
      top: e.clientY - 50,
      right: e.clientX + 50,
      bottom: e.clientY + 50,
      color: "black"
    };

    setCircles((prev) => {
      if (isOverLapping(coords, prev)) {
        coords.color = randomColor();
      }
      return [...prev, coords];
    });
  };

  useEffect(() => {
    document.addEventListener("click", onMouseClick);

    return () => {
      document.removeEventListener("click", onMouseClick);
    };
  }, []);

  return (
    <div className="App">
      <HocTest />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {circles.map((c) => (
        <CircleEle top={c.top} left={c.left} color={c.color} />
      ))}
    </div>
  );
}
