
interface NaviLink {
  link: string;
}

function NaviLink( { link }: NaviLink) {

  return (
    <li>
      <p />
      {link}
    </li>
    )
}

export default NaviLink;