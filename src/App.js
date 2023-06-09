import { useEffect, useState } from "react";
import "./App.css";

const imageList = [
  "https://res.cloudinary.com/nrpadev/image/upload/f_auto,q_70/2021-June-Conservation-From%20Pines%20to%20Prairie-410x410.jpg",
  "https://www.walkingsa.org.au/wp-content/uploads/2020/07/Nature-Trail-Penola-Conservation-Park-feature-square-410x410.jpg",
  "https://www.walkingsa.org.au/wp-content/uploads/2017/11/Cascades-Short-Walk-feature-square-410x410.jpg",
  "https://res.cloudinary.com/nrpadev/image/upload/f_auto,q_70/Active-Parks-Guide-Featured-410x410.jpg",
  "https://www.hcc-nd.edu/wp-content/uploads/2021/03/Campus-Fall-2020-26-410x410.jpg",
  "https://www.ilovematchatea.co.uk/wp-content/uploads/2021/01/Strong-Immune-SYstem-410x410.jpg",
  "https://navydxb.com/wp-content/uploads/2022/12/Nagarshan-Hill-uai-410x410.jpg",
];
function App() {
  let [counter, setCounter] = useState(0);
  let [leftDisable, setLeftDisable] = useState(false);
  let [rightDisable, setRightDisable] = useState(false);

  useEffect(() => {
    if(counter === imageList.length - 1) setRightDisable(true);
    else if(counter === 0) setLeftDisable(true);
    else if(counter === 1) setLeftDisable(false);
    else setRightDisable(false);
  }, [counter]);

  return (
    <div className="App">
      <h2 className="App-header">Image Carousel</h2>
      <div className="container">
        <button disabled={leftDisable} onClick={() => setCounter(--counter)}>{`<`}</button>
        <img alt="Unable to load." src={imageList[counter]} />
        <button disabled={rightDisable} onClick={() => setCounter(++counter)}>{`>`}</button>
      </div>
    </div>
  );
}

export default App;
