import ProductCart from "./ProductCard"

export default function ProductList({ products, onAdd }) {
    if (!products || products.length === 0) {
        return (
            <div className="text-center py-5 text-body-secondary">
                No hay productos que coincidan con tu búsqueda.
            </div>
        )
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {products.map((p) => (
                <ProductCart key={p.id} product={p} onAdd={onAdd} />
            ))}
        </div>
    )
}
