import React from "react";
import Select from "react-select";
const sortCategories = [
  {
    label: "Title 'A-Z'",

    sortMethod: (objectA, objectB) => {
      if (objectA.fields.Title < objectB.fields.Title) {
        return -1;
      } else if (objectA.fields.Title > objectB.fields.Title) {
        return 0;
      } else return 0;
    },
  },
  {
    label: "Title 'Z-A'",

    sortMethod: (objectA, objectB) => {
      if (objectA.fields.Title > objectB.fields.Title) {
        return -1;
      } else if (objectA.fields.Title < objectB.fields.Title) {
        return 0;
      } else return 0;
    },
  },
];

const SelectCustom = (sortCategory, setSortCategory) => {
  return (
    <Select
      value={sortCategory}
      onChange={(option) => setSortCategory(option)}
      options={sortCategories}
      placeholder="sort by"
    />
  );
};

export default SelectCustom;
