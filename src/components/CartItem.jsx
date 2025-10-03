import { toCurrency } from '../utils/format'

export default function CartItem({ item, onRemove }) {
    const unitPrice = item.onOffer ? item.offerPrice : item.price
    const subtotal = unitPrice * item.qty

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <div className="fw-medium">{item.name}</div>
                <small className="text-body-secondary">
                    {item.qty} x {toCurrency(unitPrice)}
                </small>
            </div>

            <div className="d-flex align-items-center gap-2">
                <strong>{toCurrency(subtotal)}</strong>
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onRemove(item.id)}
                >
                    Quitar
                </button>
            </div>
        </li>
    )
}
