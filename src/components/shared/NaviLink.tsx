
interface NaviLink {
  link: string;
}

function NaviLink( { link }: NaviLink) {

  return (
    <div>
      {link}
    </div>
    )
}

export default NaviLink;