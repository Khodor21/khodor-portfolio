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
              " url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-darkGreen.png?alt=media&token=8c201776-9954-4b49-93ec-cf8b855a2004')",
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-green.png?alt=media&token=e8e926b2-6343-4f65-b13e-aca5a875e8bc)`,
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-darkGreen.png?alt=media&token=8c201776-9954-4b49-93ec-cf8b855a2004')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Waves;
//https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/wave-top.png?alt=media&token=64ac48a7-64b8-404d-97cb-1fe6433999b8&_gl=1*kmx3o*_ga*ODg4OTgwNDI0LjE2Nzk1Njk4ODQ.*_ga_CW55HF8NVT*MTY5NzAxOTUzMC4zNS4xLjE2OTcwMTk3MTIuNDcuMC4w
