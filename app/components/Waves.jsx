import React from "react";
import "../waves.css";
const Waves = () => {
  return (
    <div className="waveWrapper waveAnimation h-32 md:h-28">
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage:
              " url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-dark.png?alt=media&token=36b1a1f5-3ea6-4473-83a7-631ecf4df947')",
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-purple.png?alt=media&token=0a4bd48e-370b-4358-812f-c7c00bc84728')`,
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-purple.png?alt=media&token=0a4bd48e-370b-4358-812f-c7c00bc84728')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Waves;
//https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-top.png?alt=media&token=64ac48a7-64b8-404d-97cb-1fe6433999b8&_gl=1*kmx3o*_ga*ODg4OTgwNDI0LjE2Nzk1Njk4ODQ.*_ga_CW55HF8NVT*MTY5NzAxOTUzMC4zNS4xLjE2OTcwMTk3MTIuNDcuMC4w
