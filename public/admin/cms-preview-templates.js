import CMS from "netlify-cms-app";
import React from "react";

const HeroPreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"]);
  const subheading = entry.getIn(["data", "subheading"]);
  const image = entry.getIn(["data", "image"]);

  return (
    <div style={{ padding: "20px", background: "#f7f7f7", textAlign: "center" }}>
      <h1>{title}</h1>
      <p>{subheading}</p>
      {image && <img src={image} alt="Hero Image" style={{ maxWidth: "100%" }} />}
    </div>
  );
};

CMS.registerPreviewTemplate("hero", HeroPreview);
