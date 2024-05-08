import { FC } from "react";
import css from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps{
  onClickButton: () => void;
}

const LoadMoreBtn:FC<LoadMoreBtnProps> = ({ onClickButton}) => {
    return (
        <>
            <button type="button" id="load_btn"  className={css.load_more_btn} onClick={onClickButton}>Load more</button>
            
        </>
        
  )
}

export default LoadMoreBtn