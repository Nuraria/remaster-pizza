import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="118" cy="148" r="108" /> 
    <rect x="0" y="286" rx="5" ry="5" width="240" height="23" /> 
    <rect x="0" y="325" rx="10" ry="10" width="240" height="78" /> 
    <rect x="0" y="415" rx="10" ry="10" width="77" height="35" /> 
    <rect x="125" y="415" rx="24" ry="10" width="112" height="35" />
  </ContentLoader>
);

export default Skeleton;
