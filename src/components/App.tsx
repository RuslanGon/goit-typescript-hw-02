import { useEffect, useState, useRef} from "react";
import SearchBar from './SearchBar/SearchBar.js';
import Loader from "./Loader/Loader.js";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";
import ImageGallery from "./ImageGallery/ImageGallery.js";
import { fetchPhotosByInput } from "../photos-api.js";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.js";
import ImageModal from "./ImageModal/ImageModal.js";
import ScrollIntoView from 'react-scroll-into-view'
import ScrollUp from "./ScrollUp/ScrollUp.js";


const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [description, setDescription] = useState(null);
  const [scrollBtn, setScrollBtn] = useState(false);
  const lastImageRef = useRef(null);

useEffect(() => {
    if (!inputSearch) return;
    async function fetchPhotos()  {
    try {
      setLoading(true);
      setError(false);
      const {total_pages,results}=await fetchPhotosByInput(inputSearch, page);
      setPhotos((prevPhotos) => [...prevPhotos, ...results]);
      
      setShowBtn(total_pages > page);
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false);
      }
    }
  fetchPhotos();
  scrollToLastImage();
    
}, [inputSearch, page])
  
const onSubmit = (inputSearch) => {
  setInputSearch(inputSearch);
  setPhotos([]);
  setPage(1);
  setShowBtn(false);
}

const scrollToLastImage = () => {
  if (lastImageRef.current) {
  lastImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
};
  const onClickButton = () => {
    setPage((prevPage) => prevPage + 1);
    setScrollBtn(true);
  };

  const openModal = (urlModal,description) => {
    setImageSrc(urlModal);
    setDescription(description);
  };

  const closeModal = () => {
    setImageSrc(null)
  };


  const onScrollBtn = () => {
    setScrollBtn(false)
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length !== 0 && <ImageGallery photos={photos} openModal={openModal} lastImageRef={lastImageRef}  onClickButton={onClickButton} />}
      {showBtn && <LoadMoreBtn onClickButton={onClickButton} />}
      <ImageModal isOpen={imageSrc !== null} onClose={closeModal} urlModal={imageSrc} description={description} />
      {scrollBtn && <ScrollIntoView selector="#header"><ScrollUp onScrollBtn={onScrollBtn} /></ScrollIntoView>}
    
    </>
  );
};
export default App