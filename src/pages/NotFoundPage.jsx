import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/NotFoundPage.module.css";

const NotFoundPage = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const text = "صفحه مورد نظر پیدا نشد!!";

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      typeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, [index]);

  const typeAnimation = () => {
    if (index < text.length) {
      setDisplayText((prevText) => prevText + text[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goBackHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.page_404_container}>
      <span className={styles.number_404}>404</span>
      <span className={styles.text_404}>{displayText}</span>
      <button onClick={goBackHandler} className={styles.btn_404}>
        برگشت به صفحه اصلی
      </button>
    </div>
  );
};

export default NotFoundPage;
