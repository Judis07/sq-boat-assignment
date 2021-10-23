export const toLocalStorage = (dataObj) => {
  let stringObj = JSON.stringify(dataObj);

  localStorage.setItem("user", stringObj);
};

export const getToken = () => {
  let currentUser = JSON.parse(localStorage.getItem("user"));

  return currentUser.token;
};
