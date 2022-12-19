const getDisplayName = (
  firstName: string,
  lastName: string,
  city: string = "",
  curriculum: string = ""
) => {
  const mayBeCity = city || "?";
  return `[${mayBeCity}] ${firstName} ${lastName}${
    curriculum === "workstudy" ? " - WnS" : ""
  }`;
};

export default getDisplayName;
