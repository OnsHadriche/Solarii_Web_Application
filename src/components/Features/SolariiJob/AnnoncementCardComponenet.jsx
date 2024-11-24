import { useMediaQuery, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import AnnoncementCardMdUp from "../../Cards/AnnoncementCardMdUp";
import AnnoncementCardSmDown from "../../Cards/AnnoncementCardSmDown";

const AnnoncementCardComponent = ({
  image,
  title,
  description,
  SocietyName,
  startDate,
  elementId,
  type
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  
  return (
    <>
      {isMd ? (
        <AnnoncementCardMdUp
          image={image? image: null}
          title={title}
          description={description}
          SocietyName={SocietyName}
          startDate={startDate}
          elementId={elementId}
          type = {type}
        />
      ) : (
        <AnnoncementCardSmDown
          title={title}
          description={description}
          SocietyName={SocietyName}
          startDate={startDate}
          type = {type}
        />
      )}
    </>
  );
};
AnnoncementCardComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  SocietyName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  elementId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default AnnoncementCardComponent;
