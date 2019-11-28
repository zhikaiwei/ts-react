import React from "react";
// import { useTranslation } from "react-i18next";

// import { I18nNamespace } from "../../../enums/i18nNamespace";
import styles from "./styles.scss";

const NotFound = () => {
  // const [t] = useTranslation(I18nNamespace.Common);

  return <div className={styles.wrapper}>Not found</div>;
};

export default NotFound;
