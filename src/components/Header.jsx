export default function Header({ cartCount }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">ReactShop</a>
                <div className="d-flex align-items-center gap-3 ms-auto">
                    <span className="badge text-bg-primary">Carrito: {cartCount}</span>
                </div>
            </div>
        </nav>
    )
}
