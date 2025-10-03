import CartItem from "./CartItem"
import CartSummary from "./CartSummary"

export default function Cart({ items, onRemove, onClear }) {
    return (
        <aside className="card shadow-sm h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
                <strong>Carrito</strong>
                {!!items.length && (
                    <button className="btn btn-sm btn-outline-secondary" onClick={onClear}>
                        Vaciar
                    </button>
                )}
            </div>

            <ul className="list-group list-group-flush">
                {!items.length && (
                    <li className="list-group-item text-body-secondary">
                        Tu carrito está vacío
                    </li>
                )}
                {items.map((it) => (
                    <CartItem key={it.id} item={it} onRemove={onRemove} />
                ))}
            </ul>

            <div className="card-body">
                <CartSummary items={items} />
            </div>
        </aside>
    )
}
