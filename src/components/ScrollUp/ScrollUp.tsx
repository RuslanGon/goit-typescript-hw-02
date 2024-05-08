import { CiSaveUp2 } from "react-icons/ci";
import css from "./ScrollUp.module.css"
import { FC } from "react";
interface ScrollUpProps{
  onScrollBtn: () => void;
}
const ScrollUp:FC<ScrollUpProps> = ({onScrollBtn}) => {
  return (
    <div className={css.scroll_up} onClick={onScrollBtn}><CiSaveUp2 size='50'/></div>
  )
}

export default ScrollUp