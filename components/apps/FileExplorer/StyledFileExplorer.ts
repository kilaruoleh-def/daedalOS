import StyledFileManager from "components/system/Files/Views/Icon/StyledFileManager";
import styled from "styled-components";

const StyledFileExplorer = styled.div`
  ${StyledFileManager} {
    height: calc(100% - 42px - 23px);
  }
`;

export default StyledFileExplorer;