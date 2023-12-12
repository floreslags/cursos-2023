import { useCounter } from "../hooks/useCounter";
import { useToggle } from "../hooks/useToggle";

export const Module12 = () => {
  const [isVisible, toggle] = useToggle();
  const {counter,setZero,increase,decrease} = useCounter();

  return (
    <div>
      <h2>Module 12 - Custom Hooks</h2>
      <h3>useToggle Hook</h3>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h3>Hidden Text1</h3>}
      <h3>useGetFact Hook</h3>
      <p>No funciono el hook 😾😾</p>
      <h3>useCounter Hook</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setZero}>Restart</button>
      <p>{counter}</p>
    </div>
  );
};
