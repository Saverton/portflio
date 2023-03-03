export const getCookie = (cname) => {
  const name = cname + '=';
  const cookies = document.cookie.split(';');

  const cookie = cookies.find(c => c.trim().startsWith(name));

  if (cookie)
    return cookie.slice(name.length);
  else
    return '';
}