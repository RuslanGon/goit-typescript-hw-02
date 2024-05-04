import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImagesByQuery } from "./components/services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [btnLoadMore, setBtnLoadMore] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    if (query.length === 0) return;

    const fetchImages = async () => {
      try {
        const data = await getImagesByQuery(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setBtnLoadMore(data.total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
    setImages([]);
    setPage(1);
  };
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const openModal = (id) => {
    setModalImage(images.filter((image) => image.id === id));
    setIsOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} toast={toast} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {btnLoadMore && <LoadMoreBtn loadMore={loadMore} images={images} />}
      <ImageModal
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        modalImage={modalImage}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;