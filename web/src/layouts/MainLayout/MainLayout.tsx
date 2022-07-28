import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>
        <Link to={routes.catalog()}>Catalog</Link>
        <Link to={routes.product()}>Product</Link>
        <Link to={routes.cart()}>Cart</Link>`
      </header>
      {children}
    </>
  )
}

export default MainLayout
