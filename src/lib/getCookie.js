export const getCookie = (cname) => {
  const name = cname + '=';
  const cookies = document.cookie.split(';');

  const cookie = cookies.find(c => c.trim().startsWith(name));

  console.log(document.cookie);
  console.log(cookie);

  if (cookie)
    return cookie.slice(name.length);
  else
    return '';
}