import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

export default function App() {
  // Estados del catálogo
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Carrito
  const [cart, setCart] = useState([])

  // Trigger del efecto
  const [query, setQuery] = useState(0)

  useEffect(() => {
    if (query === 0) return

    let cancelled = false
    async function load() {
      try {
        setLoading(true)
        setError('')
        const url = import.meta.env.BASE_URL + 'products.json'
        const res = await fetch(url)
        if (!res.ok) throw new Error('No se pudieron cargar los productos')
        const data = await res.json()
        if (!cancelled) setProducts(data)
      } catch (e) {
        if (!cancelled) setError(e.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()

    return () => { cancelled = true }
  }, [query])

  // Carrito
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(it => it.id === product.id)
      if (exists) {
        return prev.map(it =>
          it.id === product.id ? { ...it, qty: it.qty + 1 } : it
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }
  const removeFromCart = (id) => setCart(prev => prev.filter(it => it.id !== id))
  const clearCart = () => setCart([])
  const cartCount = cart.reduce((acc, it) => acc + it.qty, 0)

  // Acción para disparar la carga del efecto
  const handleLoad = () => setQuery(prev => prev + 1)

  return (
    <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
      <Header cartCount={cartCount} />

      <main className="container py-4 flex-grow-1">

        <div className="d-flex gap-2 mb-3">
          <button className="btn btn-primary" onClick={handleLoad}>
            {query === 0 ? 'Cargar catálogo' : 'Recargar catálogo'}
          </button>
        </div>

        {loading && <div className="alert alert-info">Cargando productos...</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row g-4">
          <div className="col-lg-8">

            {query === 0 && !loading && !error && (
              <div className="alert alert-secondary">
                Presiona "Cargar catálogo" para traer loos productos.
              </div>
            )}
            <ProductList products={products} onAdd={addToCart} />
          </div>
          <div className="col-lg-4">
            <Cart items={cart} onRemove={removeFromCart} onClear={clearCart} />
          </div>
        </div>
      </main>

      <footer className="border-top py-3 text-center text-boy-secondary small">
        ReactShop PFY2201
      </footer>
    </div>
  )
}