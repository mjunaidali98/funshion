
export const Facebook = ({ url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <img src='/assets/images/facebook.svg' alt="facebook" />
  </a>
)
export const Instagram = ({ url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <img src='/assets/images/instagram.svg' alt="instagram" />
  </a>
)
export const Pinterest = ({ url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <img  src='/assets/images/pinterest.svg' alt="pinterest" />
  </a>
)
export const Search = () => {
  return (
    <svg role={"button"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.4434 16.4438L20.9997 21.0001" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
export const UserProfile = () => {
  return (
    <svg role={"button"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M5.9812 18.6913C6.54615 17.5806 7.40744 16.6478 8.46973 15.9963C9.53202 15.3448 10.7539 15 12 15C13.2462 15 14.468 15.3448 15.5303 15.9963C16.5926 16.6478 17.4539 17.5806 18.0189 18.6913" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const Cart = () => {
  return (
    <svg role={"button"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


