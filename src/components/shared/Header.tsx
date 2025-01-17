
import NaviLink from './NaviLink';

interface Header {
  subPages: string[];
}

function Header( {subPages}: Header) {

  return (
    <header>
      <h1>Ringis</h1>
      <h2>Omat Ringit</h2>
      <ul>
        {subPages.map((page, index) => {
          return (
            <NaviLink 
              key={index}
              link={page} 
            />
          )})}
      </ul>
    </header>
    )
}

export default Header;
