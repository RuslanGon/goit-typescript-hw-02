import { useEffect, useState, useRef, FC} from "react";
import SearchBar from './SearchBar/SearchBar.jsx';
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import { fetchPhotosByInput } from "../photos-api.js";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./ImageModal/ImageModal.jsx";
import ScrollIntoView from 'react-scroll-into-view'
import ScrollUp from "./ScrollUp/ScrollUp.jsx";
import { Photo } from '../types.js'


const App:FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [scrollBtn, setScrollBtn] = useState<boolean>(false);
  const lastImageRef = useRef<HTMLLIElement | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [photo, setPhoto] = useState<Photo|null>(null);

useEffect(():void | (() => void) => {
    if (!inputSearch) return;
    async function fetchPhotos():Promise<void>|never{
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

    
}, [inputSearch, page])
  
const onSubmit = (inputSearch:string): void => {
  setInputSearch(inputSearch);
  setPhotos([]);
  setPage(1);
  setShowBtn(false);
}

  useEffect(():void | (() => void) => {
    if (lastImageRef.current) {
      lastImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [photos]); 
  const onClickButton = (): void => {
    setPage((prevPage) => prevPage + 1);
    setScrollBtn(true);
  };

  const openModal = (photo: Photo): void => {
  setPhoto(photo);
  setModal(true);
   };

  const closeModal = (): void => {
  setPhoto(null);
  setModal(false);
   };


  const onScrollBtn = (): void => {
    setScrollBtn(false)
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length !== 0 && <ImageGallery photos={photos} openModal={openModal} lastImageRef={lastImageRef}/>}
      {showBtn && <LoadMoreBtn onClickButton={onClickButton} />}
      {scrollBtn && <ScrollIntoView selector="#header"><ScrollUp onScrollBtn={onScrollBtn} /></ScrollIntoView>}
      {modal && photo!==null &&<ImageModal onClose={closeModal} photo={photo} />}
    </>
  );
};
export default App