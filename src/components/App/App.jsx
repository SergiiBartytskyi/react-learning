import { useState, useRef, useEffect, useMemo } from "react";
import { fetchApi } from "../../unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { IoArrowUpCircleSharp } from "react-icons/io5";

export default function App() {
  const [query, setQuery] = useState("");
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const lastElRef = useRef(null);
  const searchBarRef = useRef(null);

  useEffect(() => {
    if (lastElRef.current) {
      lastElRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pictures]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalHits / 20); // 20 - це кількість зображень на сторінку
  }, [totalHits]);

  const handleFetchApi = async newQuery => {
    try {
      setPictures([]);
      setError(false);
      setLoading(true);
      setQuery(newQuery);
      setPage(1);
      const data = await fetchApi(newQuery);
      setPictures(data.hits);
      setTotalHits(data.totalHits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMorePictures = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const data = await fetchApi(query, nextPage);
      setPictures(prevPictures => [...prevPictures, ...data.hits]);
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = imageData => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const scrollToTop = () => {
    if (searchBarRef.current) {
      searchBarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const shouldShowLoadMore =
    pictures.length > 0 && page < totalPages && !loading;

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleFetchApi} searchBarRef={searchBarRef} />
      {pictures.length > 0 && (
        <ImageGallery
          items={pictures}
          onImageClick={openModal}
          lastElRef={lastElRef}
        />
      )}
      {shouldShowLoadMore && <LoadMoreBtn onClick={handleLoadMorePictures} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <button onClick={scrollToTop} className={css.scrollBtn}>
        <IoArrowUpCircleSharp className={css.reactIcons} />
      </button>
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageData={selectedImage}
      />
    </div>
  );
}
