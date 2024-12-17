export const getCode = () => {
  const urlCode = new URLSearchParams(window.location.search).get('code');

  if (!urlCode) return;

  const code = urlCode;

  return code;
};
