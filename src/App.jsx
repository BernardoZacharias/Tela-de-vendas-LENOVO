import { useState } from 'react'
import './index.css'

import lenovoBg from './assets/LenovoFundo.jpg'
import ideaPadImg from './assets/IdeaPad.jpeg'
import x1Img from './assets/X1.jpeg'
import legionImg from './assets/Legion.jpeg'
import YogaBookImg from'./assets/YogaBook.jpeg'

export default function App() {
  const [selectedModel, setSelectedModel] = useState(null)
  const [showPromo, setShowPromo] = useState(false)

  const PRODUCTS = [
    {
      id: 1,
      name: 'Legion Pro 7i',
      desc: 'Gaming Laptop',
      price: 'R$20.899',
      color: '#e1251b',
      image: legionImg
    },
    {
      id: 2,
      name: 'Yoga Book 9i',
      desc: 'Dual Screen',
      price: 'R$14.897',
      color: '#7c3aed',
      image: YogaBookImg
    },
    {
      id: 3,
      name: 'ThinkPad X1 Carbon',
      desc: 'Business Ultra',
      price: 'R$9.988',
      color: '#111111',
      image: x1Img
    },
    {
      id: 4,
      name: 'IdeaPad Slim 5',
      desc: 'Everyday Laptop',
      price: 'R$6.898',
      color: '#2563eb',
      image: ideaPadImg
    }
  ]

  const getPriceValue = (priceString) => {
    return parseFloat(
      priceString
        .replace('R$', '')
        .replace(/\./g, '')
        .replace(',', '.')
    )
  }

  const handleProductClick = (product) => {
    setSelectedModel(product)
    setShowPromo(true)
  }

  return (
    <div className="lenovo-landing">
      <div className="background-logo">
        <img src={lenovoBg} alt="Lenovo fundo" />
        <div className="background-overlay"></div>
      </div>

      <header className="lenovo-header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">lenovo</span>
          </div>

          <nav className="header-nav">
            <span>Notebooks</span>
            <span>Ofertas</span>
            <span>Suporte</span>
          </nav>
        </div>
      </header>

      <main className="lenovo-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Conheça os produtos <span className="gradient-text">LENOVO</span>
            </h1>
            <p className="hero-subtitle">
              Modelos selecionados com desempenho, estilo e tecnologia para o seu dia a dia.
            </p>
          </div>
        </section>

        <section className="products-section">
          <h2 className="section-title">Produtos em promoção</h2>

          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="product-card"
                style={{ '--product-color': product.color }}
                onClick={() => handleProductClick(product)}
              >
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image-card"
                  />
                </div>

                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <span className="product-price">{product.price}</span>
              </div>
            ))}
          </div>
        </section>

        {showPromo && selectedModel && (
          <div className="promo-modal">
            <div className="promo-content">
              <button
                className="close-btn"
                onClick={() => setShowPromo(false)}
              >
                ×
              </button>

              <div className="promo-product">
                <div className="product-image-modal-wrap">
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.name}
                    className="product-image-modal"
                  />
                </div>

                <div className="product-details">
                  <h2>{selectedModel.name}</h2>
                  <p>{selectedModel.desc}</p>

                  <div className="promo-discount">
                    <span className="old-price">
                      R$
                      {(getPriceValue(selectedModel.price) * 1.3).toLocaleString(
                        'pt-BR',
                        { minimumFractionDigits: 0 }
                      )}
                    </span>

                    <span className="new-price">{selectedModel.price}</span>
                    <span className="discount">-30%</span>
                  </div>

                  <button className="buy-btn">
                    Compre agora - Salve R$
                    {(getPriceValue(selectedModel.price) * 0.3).toLocaleString(
                      'pt-BR',
                      { minimumFractionDigits: 0 }
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="lenovo-footer">
        <div className="footer-content">
          <span>© 2026 Lenovo. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}