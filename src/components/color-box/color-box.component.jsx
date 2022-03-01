import React from "react";
import { useToggle } from "../../hooks/useToggle";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./color-box.style.css";

const ColorBox = ({ name, background }) => {
  const [copied, setCopied] = useToggle(false);

  const changeCopyState = () => {
    setCopied();
    setTimeout(() => setCopied(), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        />

        <div className={`copy-message ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div>
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
