import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { setCopied } from "../../redux/palette/palette.slices";
import "./color-box.style.css";

const ColorBox = ({ background, name }) => {
  const dispatch = useDispatch();
  const copied = useSelector((state) => state.palette.copied);

  const changeCopyState = () => {
    dispatch(setCopied());
    setTimeout(() => dispatch(setCopied()), 1500);
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
        <div className="copy-container">
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
