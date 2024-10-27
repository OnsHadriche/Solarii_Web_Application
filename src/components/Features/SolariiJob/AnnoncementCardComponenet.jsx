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
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  console.log(isMd);

  return (
    <>
      {isMd ? (
        <AnnoncementCardMdUp
          image={image}
          title={title}
          description={description}
          SocietyName={SocietyName}
          startDate={startDate}
        />
      ) : (
        <AnnoncementCardSmDown
          title={title}
          description={description}
          SocietyName={SocietyName}
          startDate={startDate}
        />
      )}
    </>
  );
};
AnnoncementCardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  SocietyName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
};
export default AnnoncementCardComponent;
