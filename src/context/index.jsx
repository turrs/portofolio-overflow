import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
export const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ContextWrapper = ({ children }) => {
  const [menuKey, setMenuKey] = useState("overview");
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  return (
    <AppContext.Provider
      value={{ menuKey, setMenuKey, url, setUrl, show, setShow }}
    >
      {children}
    </AppContext.Provider>
  );
};
ContextWrapper.propTypes = {
  children: PropTypes.object,
};
