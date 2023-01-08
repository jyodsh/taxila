/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. Alll rights reserved.
      </div>
      <div> Built using 
       {` `}
      <Link
          aria-label="Built using Gatsby"
          href="https://www.gatsbyjs.com/"
        >
          Gatsby
        </Link>
        {` `}
      </div>
      <div>
        Theme Credits : 
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </div>
    </footer>
  )
}

export default Footer
