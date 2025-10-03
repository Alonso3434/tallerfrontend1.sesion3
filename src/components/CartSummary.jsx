import { toCurrency } from '../utils/format'

export default function CartSummary({ items }) {
    const totalQty = items.reduce((acc, it) => acc + it.qty, 0)
    const total = items.reduce(
        (acc, it) => acc + (it.onOffer ? it.offerPrice : it.price) * it.qty, 0
    )

    return (
        <div className="p-3 bg-light rounded border">
            <div className="d-flex justify-content-between">
                <span>Total ítems</span>
                <strong>{totalQty}</strong>
            </div>
            <div className="d-flex justify-content-between">
                <span>Total a pagar</span>
                <strong>{toCurrency(total)}</strong>
            </div>
        </div>
    )
}
