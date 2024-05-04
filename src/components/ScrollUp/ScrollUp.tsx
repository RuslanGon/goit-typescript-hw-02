import React from "react";
import { CiSaveUp2 } from "react-icons/ci";
import css from "./ScrollUp.module.css";

interface ScrollUpProps {
  onScrollBtn: () => void;
}

const ScrollUp: React.FC<ScrollUpProps> = ({ onScrollBtn }) => {
  return (
    <div className={css.scroll_up} onClick={onScrollBtn}>
      <CiSaveUp2 size={50} />
    </div>
  );
}

export default ScrollUp;
