import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss";
const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="Title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otheritemProps }) => (
          <CollectionItem key={id} {...otheritemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
