import jsonPlaceholderStyles from "./jsonPlaceholder.module.css";
import { useCallback, useMemo, useState } from "react";
import { useEffect } from "react";
import publicAPI from "../../services/api/PublicAPI";

export default function JsonPlaceholder() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState(0);
  useEffect(() => {
    setLoading(true);
    publicAPI
      .get("/albums")
      .then((response) => {
        setAlbums(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);
  const handleClick = useCallback((id) => {
    return () => {
      setLoading(true);
      publicAPI.get(`/photos?albumId=${id}`).then((response) => {
        setStatus(1);
        setPhotos(response.data);
        setLoading(false);
      });
    };
  }, []);
  const content = useMemo(() => {
    if (status === 0) {
      return albums.map((album) => {
        return (
          <div
            className={jsonPlaceholderStyles.album__wrapper}
            key={"album_" + album.id}
          >
            <div className={jsonPlaceholderStyles.album}>
              <p onClick={handleClick(album.id)}>{album.title}</p>
            </div>
          </div>
        );
      });
    } else {
      return (
        <>
          <div className={jsonPlaceholderStyles.photo__btn__back}>
            <button onClick={() => setStatus(0)}>&larr;</button>
          </div>
          {photos.map((photo) => {
            return (
              <div
                className={jsonPlaceholderStyles.photo__wrapper}
                key={"photo__wrapper" + photo.id}
              >
                <div className={jsonPlaceholderStyles.photo}>
                  <p>{photo.title}</p>
                  <img src={photo.thumbnailUrl} alt="photo" />
                </div>
              </div>
            );
          })}
        </>
      );
    }
  }, [status, photos, albums]);
  return (
    <div>
      <div className="container">
        <div className={jsonPlaceholderStyles.json__placeholder}>
          {loading ? (
            <div className={jsonPlaceholderStyles.loading}>
              <p>Loading...</p>
            </div>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
}
