import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CatalogPage = () => {
  return (
    <>
      <MetaTags title="Catalog" description="Catalog page" />

      <h1>CatalogPage</h1>
      <p>
        Find me in <code>./web/src/pages/CatalogPage/CatalogPage.tsx</code>
      </p>
      <p>
        My default route is named <code>catalog</code>, link to me with `
        <Link to={routes.catalog()}>Catalog</Link>`
      </p>
    </>
  )
}

export default CatalogPage
