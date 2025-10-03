import { toCurrency } from '../utils/format'

export default function ProductCard({ product, onAdd }) {
    const { name, price, offerPrice, onOffer, description, image } = product

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                <div className="ratio ratio-4x3 bg-light">
                    <img
                        src={image}
                        onError={(e) => { e.currentTarget = 'https://placehold.co/600x450?text=Producto' }}
                        className="card-img-top object-fit-cover"
                        alt={name}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title d-flex align-items-center gap-2">
                        {name}
                        {onOffer && <span className="badge text-bg-success">OFERTA</span>}
                    </h5>

                    <p className="card-text small text-body-secondary flex-grow-1">{description}</p>

                    <div className="d-flex align-items-baseline gap-2 mb-2">
                        {onOffer && (
                            <span className="text-decoration-line-through text-secondary">
                                {toCurrency(price)}
                            </span>
                        )}
                        <strong className="fs-5">
                            {toCurrency(onOffer ? offerPrice : price)}
                        </strong>
                    </div>

                    <button className="btn btn-primary w-100" onClick={() => onAdd(product)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}
