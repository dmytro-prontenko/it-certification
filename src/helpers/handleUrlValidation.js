const handleUrlValidation = (e) => {
  const inputValue = e.target.value;
  if (/[\u0400-\u04FF]/.test(inputValue)) {
    e.target.value = "";
  }
};

export default handleUrlValidation;
