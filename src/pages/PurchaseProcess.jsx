import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Purchase.module.css";
import { useEffect } from "react";

const PurchaseProcess = () => {
  const [second, setSecond] = useState(5);
  const navigate = useNavigate;

  useEffect(() => {
    if (second === 0) return;

    const intervalTimer = setInterval(() => {
      setSecond((second) => second - 1);
    }, 1000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [second]);

  if (second === 0) navigate("/");

  return (
    <>
      <div className={styles.purchase_container}>
        <p className={styles.purchase_title}>فرایند خرید شما تکمیل شد</p>

        <div className={styles.purchase_counter_container}>
          <span className={styles.counter}>0{second}</span>{" "}
          <span>ثانیه تا بازگشت به صفحه اصلی</span>
        </div>
      </div>
    </>
  );
};

export default PurchaseProcess;
