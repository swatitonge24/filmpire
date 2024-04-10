export const LOGO ="https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

export const BANNER =
"https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/d328036f-d951-4fce-999a-60723ef6bd49/IE-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const USER_ICON ="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png";

export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY,
    }
  };
  
  export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500" ;

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
  ];
  
  export const OPENAI_GPT_KEY = import.meta.env.VITE_OPENAI_GPT_KEY;