const textProcessing = text => {
  const regex = /[ㄱ-ㅎㅏ-ㅣ]|[^\w\s가-힣A-Za-z0-9]/g;
  return text.replace(regex, '').trim();
};

export default textProcessing;
