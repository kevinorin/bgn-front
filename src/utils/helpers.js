/**
 * Get the value of a cookie
 * Source: https://vanillajstoolkit.com/helpers/getcookie/
 * @param name - The name of the cookie
 * @return The cookie value
 */

export const getCookie = (name) => {
	if (!name || window === undefined) return;
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return parts[1].split(';').shift();
	}
	return undefined;
}


/**
* Get the value of a cookie
* Source: https://vanillajstoolkit.com/helpers/getcookie/
* @param name - The name of the cookie
* @return The cookie value
*/

export const getCookie1 = (name) => {
	if (!name || window === undefined) return;
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return parts[1].split(';').shift();
	}
	return undefined;
}


export function pathnameToLanguage(pathname){
	const userLanguage = pathname.substring(1, 3);
  
	if (LANGUAGES.indexOf(userLanguage) !== -1 && pathname.indexOf(`/${userLanguage}/`) === 0) {
	  return {
		userLanguage,
		canonical: userLanguage === 'en' ? pathname : pathname.substring(3),
	  };
	}
  
	return {
	  userLanguage: 'en',
	  canonical: pathname,
	};
  }