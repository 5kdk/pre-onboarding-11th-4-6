const textProcessing = text => {
  const regex = /[ㄱ-ㅎㅏ-ㅣ]|[^\w\s가-힣]/g;
  return text.replace(regex, '').trim();
};

export default textProcessing;
