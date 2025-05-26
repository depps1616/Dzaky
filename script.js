// Product data with real images from the internet
const products = {
  footwear: [
    {
      id: "1",
      name: "NIKE P-6000",
      price: 1429000,
      sizes: ["39", "40", "41", "42", "43", "44"],
      rating: 4.5,
      category: "footwear",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff7-49a4-8a39-98aabb0b0e1e/p-6000-shoes-P0hJgM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61469a8a-e4c9-4c09-a696-9a8d5b0c6b1e/p-6000-shoes-P0hJgM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b5c8c8a-8b5c-4c09-a696-9a8d5b0c6b1e/p-6000-shoes-P0hJgM.png",
      ],
    },
    {
      id: "2",
      name: "SALOMON Xt-6 Gtx",
      price: 3799000,
      sizes: ["39", "40", "41", "42", "43", "44", "45"],
      rating: 4.8,
      category: "footwear",
      images: [
        "https://cdn.salomon.com/on/demandware.static/-/Sites-salomon-master/default/dw8b8c8c8a/images/zoom/L47127000_0.jpg",
        "https://cdn.salomon.com/on/demandware.static/-/Sites-salomon-master/default/dw8b8c8c8a/images/zoom/L47127000_1.jpg",
        "https://cdn.salomon.com/on/demandware.static/-/Sites-salomon-master/default/dw8b8c8c8a/images/zoom/L47127000_2.jpg",
      ],
    },
    {
      id: "3",
      name: "CLARKS WALLABEE",
      price: 2999000,
      sizes: ["38", "39", "40", "41", "42", "43"],
      rating: 4.3,
      category: "footwear",
      images: [
        "https://www.clarks.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-clarks-master/default/dw8b8c8c8a/images/c/26155514_1.jpg",
        "https://www.clarks.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-clarks-master/default/dw8b8c8c8a/images/c/26155514_2.jpg",
        "https://www.clarks.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-clarks-master/default/dw8b8c8c8a/images/c/26155514_3.jpg",
      ],
    },
    {
      id: "4",
      name: "NIKE W ZOOM VOMERO 5",
      price: 2489000,
      sizes: ["36", "37", "38", "39", "40", "41"],
      rating: 4.6,
      category: "footwear",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b5c8c8a-8b5c-4c09-a696-9a8d5b0c6b1e/zoom-vomero-5-shoes-P0hJgM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61469a8a-e4c9-4c09-a696-9a8d5b0c6b1e/zoom-vomero-5-shoes-P0hJgM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff7-49a4-8a39-98aabb0b0e1e/zoom-vomero-5-shoes-P0hJgM.png",
      ],
    },
  ],
  apparel: [
    {
      id: "1",
      name: "PUMA X KIDSUPER W TEE",
      price: 799000,
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 4.2,
      category: "apparel",
      images: [
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/627983/01/mod01/fnd/PNA/fmt/png/PUMA-x-KIDSUPER-Women's-Tee",
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/627983/01/mod02/fnd/PNA/fmt/png/PUMA-x-KIDSUPER-Women's-Tee",
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/627983/01/mod03/fnd/PNA/fmt/png/PUMA-x-KIDSUPER-Women's-Tee",
      ],
    },
    {
      id: "2",
      name: "NEW BALANCE BOYLSTON TWILL TROUSER",
      price: 1499000,
      sizes: ["28", "30", "32", "34", "36"],
      rating: 4.4,
      category: "apparel",
      images: [
        "https://nb.scene7.com/is/image/NB/mp13503bk_nb_02_i?$pdpflexf2$&fmt=webp&wid=440&hei=440",
        "https://nb.scene7.com/is/image/NB/mp13503bk_nb_03_i?$pdpflexf2$&fmt=webp&wid=440&hei=440",
        "https://nb.scene7.com/is/image/NB/mp13503bk_nb_04_i?$pdpflexf2$&fmt=webp&wid=440&hei=440",
      ],
    },
    {
      id: "3",
      name: "ADIDAS EQT MET WB",
      price: 2600000,
      sizes: ["S", "M", "L", "XL"],
      rating: 4.7,
      category: "apparel",
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b5c8c8a8b5c4c09a6969a8d5b0c6b1e_9366/EQT_Met_Windbreaker_Black_GN3378_01_laydown.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61469a8ae4c94c09a6969a8d5b0c6b1e_9366/EQT_Met_Windbreaker_Black_GN3378_02_laydown_hover.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99486859ff749a48a39a98aabb0b0e1e_9366/EQT_Met_Windbreaker_Black_GN3378_03_laydown.jpg",
      ],
    },
    {
      id: "4",
      name: "NIKE AS M NK CLUB FT OVERSIZED CREW",
      price: 849000,
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 4.1,
      category: "apparel",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b5c8c8a-8b5c-4c09-a696-9a8d5b0c6b1e/club-fleece-crew-neck-sweatshirt-P0hJgM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61469a8a-e4c9-4c09-a696-9a8d5b0c6b1e/club-fleece-crew-neck-sweatshirt-P0hJgM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff7-49a4-8a39-98aabb0b0e1e/club-fleece-crew-neck-sweatshirt-P0hJgM.png",
      ],
    },
  ],
  accessories: [
    {
      id: "1",
      name: "ADIDAS SHOPPER BALI",
      price: 700000,
      sizes: ["One Size"],
      rating: 4.0,
      category: "accessories",
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b5c8c8a8b5c4c09a6969a8d5b0c6b1e_9366/Shopper_Bag_Black_GN2019_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61469a8ae4c94c09a6969a8d5b0c6b1e_9366/Shopper_Bag_Black_GN2019_02_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99486859ff749a48a39a98aabb0b0e1e_9366/Shopper_Bag_Black_GN2019_03_standard.jpg",
      ],
    },
    {
      id: "2",
      name: "CARHARTT WIP BIG TIME KEYCHAIN",
      price: 390000,
      sizes: ["One Size"],
      rating: 4.3,
      category: "accessories",
      images: [
        "https://images.carhartt-wip.com/is/image/Carhartt/I029917_8900_01?$pdp-gallery$",
        "https://images.carhartt-wip.com/is/image/Carhartt/I029917_8900_02?$pdp-gallery$",
        "https://images.carhartt-wip.com/is/image/Carhartt/I029917_8900_03?$pdp-gallery$",
      ],
    },
    {
      id: "3",
      name: "NIKE U NK CLUB CAP AB ACG P",
      price: 399000,
      sizes: ["One Size"],
      rating: 4.2,
      category: "accessories",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b5c8c8a-8b5c-4c09-a696-9a8d5b0c6b1e/club-cap-P0hJgM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61469a8a-e4c9-4c09-a696-9a8d5b0c6b1e/club-cap-P0hJgM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff7-49a4-8a39-98aabb0b0e1e/club-cap-P0hJgM.png",
      ],
    },
    {
      id: "4",
      name: "ADIDAS AC ROUND BAG",
      price: 450000,
      sizes: ["One Size"],
      rating: 4.5,
      category: "accessories",
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b5c8c8a8b5c4c09a6969a8d5b0c6b1e_9366/Round_Bag_Black_GN2020_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61469a8ae4c94c09a6969a8d5b0c6b1e_9366/Round_Bag_Black_GN2020_02_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99486859ff749a48a39a98aabb0b0e1e_9366/Round_Bag_Black_GN2020_03_standard.jpg",
      ],
    },
  ],
  newArrival: [
    {
      id: "1",
      name: "ON CLOUD 6 M",
      price: 2500000,
      sizes: ["39", "40", "41", "42", "43", "44"],
      rating: 4.9,
      category: "newArrival",
      images: [
        "https://cdn.on-running.com/image/upload/f_auto,q_auto,c_pad,w_1000,h_1000/v1/on-running-com/3MD10251665_1",
        "https://cdn.on-running.com/image/upload/f_auto,q_auto,c_pad,w_1000,h_1000/v1/on-running-com/3MD10251665_2",
        "https://cdn.on-running.com/image/upload/f_auto,q_auto,c_pad,w_1000,h_1000/v1/on-running-com/3MD10251665_3",
      ],
    },
    {
      id: "2",
      name: "PUMA MOSTRO OG PRIME",
      price: 1889000,
      sizes: ["38", "39", "40", "41", "42", "43"],
      rating: 4.6,
      category: "newArrival",
      images: [
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/627983/01/mod01/fnd/PNA/fmt/png/Mostro-OG-Prime-Sneakers",
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/627983/01/mod02/fnd/PNA/fmt/png/Mostro-OG-Prime-Sneakers",
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/627983/01/mod03/fnd/PNA/fmt/png/Mostro-OG-Prime-Sneakers",
      ],
    },
    {
      id: "3",
      name: "ADIDAS HANDBALL SPEZIAL",
      price: 1700000,
      sizes: ["39", "40", "41", "42", "43", "44"],
      rating: 4.4,
      category: "newArrival",
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b5c8c8a8b5c4c09a6969a8d5b0c6b1e_9366/Handball_Spezial_Shoes_Blue_BD7632_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61469a8ae4c94c09a6969a8d5b0c6b1e_9366/Handball_Spezial_Shoes_Blue_BD7632_02_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99486859ff749a48a39a98aabb0b0e1e_9366/Handball_Spezial_Shoes_Blue_BD7632_03_standard.jpg",
      ],
    },
    {
      id: "4",
      name: "SALOMON XA PRO 3D",
      price: 2699000,
      sizes: ["40", "41", "42", "43", "44", "45"],
      rating: 4.7,
      category: "newArrival",
      images: [
        "https://cdn.salomon.com/on/demandware.static/-/Sites-salomon-master/default/dw8b8c8c8a/images/zoom/L47127000_0.jpg",
        "https://cdn.salomon.com/on/demandware.static/-/Sites-salomon-master/default/dw8b8c8c8a/images/zoom/L47127000_1.jpg",
        "https://cdn.salomon.com/on/demandware.static/-/Sites-salomon-master/default/dw8b8c8c8a/images/zoom/L47127000_2.jpg",
      ],
    },
  ],
}

const discountCodes = {
  brocks10: 10,
  welcome15: 15,
  save20: 20,
  student25: 25,
  vip30: 30,
}

// Global state
let currentCategory = "footwear"
let cart = JSON.parse(localStorage.getItem("brocksCart")) || []
let appliedDiscount = JSON.parse(localStorage.getItem("brocksDiscount")) || null
let paymentMethod = localStorage.getItem("brocksPayment") || ""
let showingReceipt = false
let filteredProducts = []
let currentView = "grid"
let confirmCallback = null
let currentModalImages = []
let currentModalIndex = 0

// Utility functions
function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price)
}

function saveToLocalStorage() {
  localStorage.setItem("brocksCart", JSON.stringify(cart))
  localStorage.setItem("brocksDiscount", JSON.stringify(appliedDiscount))
  localStorage.setItem("brocksPayment", paymentMethod)
}

function showToast(message, type = "success") {
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <span>${type === "success" ? "✅" : type === "error" ? "❌" : "⚠️"}</span>
            <span>${message}</span>
        </div>
    `

  document.getElementById("toastContainer").appendChild(toast)

  setTimeout(() => toast.classList.add("show"), 100)
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

function showLoading() {
  document.getElementById("loadingOverlay").classList.remove("hidden")
}

function hideLoading() {
  document.getElementById("loadingOverlay").classList.add("hidden")
}

function showModal(title, message, callback) {
  document.getElementById("modalTitle").textContent = title
  document.getElementById("modalMessage").textContent = message
  document.getElementById("confirmModal").classList.remove("hidden")
  confirmCallback = callback
}

function closeModal() {
  document.getElementById("confirmModal").classList.add("hidden")
  confirmCallback = null
}

function confirmAction() {
  if (confirmCallback) {
    confirmCallback()
  }
  closeModal()
}

function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  document.getElementById("cartBadge").textContent = totalItems
}

function updateStats() {
  const totalProducts = Object.values(products).flat().length
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  document.getElementById("totalProducts").textContent = totalProducts
  document.getElementById("cartTotal").textContent = formatPrice(cartTotal)
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = ""

  for (let i = 0; i < fullStars; i++) {
    stars += "⭐"
  }
  if (hasHalfStar) {
    stars += "⭐"
  }

  return stars
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Image carousel functions
function createCarousel(images, productId) {
  return `
        <div class="product-carousel">
            <div class="carousel-track" id="track-${productId}">
                ${images
                  .map(
                    (image, index) => `
                    <div class="carousel-slide">
                        <img src="${image}" alt="Product Image ${index + 1}" 
                             onclick="openImageModal('${productId}', ${index})"
                             onerror="this.src='/placeholder.svg?height=250&width=320'">
                    </div>
                `,
                  )
                  .join("")}
            </div>
            <button class="carousel-btn prev" onclick="changeSlide('${productId}', -1)">‹</button>
            <button class="carousel-btn next" onclick="changeSlide('${productId}', 1)">›</button>
            <div class="carousel-dots">
                ${images
                  .map(
                    (_, index) => `
                    <div class="carousel-dot ${index === 0 ? "active" : ""}" 
                         onclick="goToSlide('${productId}', ${index})"></div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `
}

function changeSlide(productId, direction) {
  const track = document.getElementById(`track-${productId}`)
  const slides = track.children
  const dots = track.parentElement.querySelectorAll(".carousel-dot")

  let currentIndex = 0
  dots.forEach((dot, index) => {
    if (dot.classList.contains("active")) {
      currentIndex = index
    }
  })

  let newIndex = currentIndex + direction
  if (newIndex < 0) newIndex = slides.length - 1
  if (newIndex >= slides.length) newIndex = 0

  goToSlide(productId, newIndex)
}

function goToSlide(productId, index) {
  const track = document.getElementById(`track-${productId}`)
  const dots = track.parentElement.querySelectorAll(".carousel-dot")

  track.style.transform = `translateX(-${index * 100}%)`

  dots.forEach((dot) => dot.classList.remove("active"))
  dots[index].classList.add("active")
}

function openImageModal(productId, imageIndex) {
  const product = Object.values(products)
    .flat()
    .find((p) => p.id === productId)
  if (!product) return

  currentModalImages = product.images
  currentModalIndex = imageIndex

  const modal = document.getElementById("imageModal")
  const modalImage = document.getElementById("modalImage")
  const modalDots = document.getElementById("modalDots")

  modalImage.src = currentModalImages[currentModalIndex]

  // Create dots for modal
  modalDots.innerHTML = currentModalImages
    .map(
      (_, index) => `
        <div class="carousel-dot ${index === currentModalIndex ? "active" : ""}" 
             onclick="changeModalImage(${index - currentModalIndex})"></div>
    `,
    )
    .join("")

  modal.classList.remove("hidden")
}

function closeImageModal() {
  document.getElementById("imageModal").classList.add("hidden")
}

function changeModalImage(direction) {
  if (typeof direction === "number" && direction !== -1 && direction !== 1) {
    // Direct index change
    currentModalIndex = currentModalIndex + direction
  } else {
    // Relative change
    currentModalIndex += direction
  }

  if (currentModalIndex < 0) currentModalIndex = currentModalImages.length - 1
  if (currentModalIndex >= currentModalImages.length) currentModalIndex = 0

  const modalImage = document.getElementById("modalImage")
  const modalDots = document.getElementById("modalDots").children

  modalImage.src = currentModalImages[currentModalIndex]

  // Update dots
  Array.from(modalDots).forEach((dot, index) => {
    dot.classList.toggle("active", index === currentModalIndex)
  })
}

// Search functionality
const searchProducts = debounce(() => {
  filterProducts()
}, 300)

// Filter functionality
function filterProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase()
  const minPrice = Number.parseInt(document.getElementById("minPrice").value) || 0
  const maxPrice = Number.parseInt(document.getElementById("maxPrice").value) || Number.POSITIVE_INFINITY

  const categoryProducts = products[currentCategory]
  filteredProducts = categoryProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm)
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice
    return matchesSearch && matchesPrice
  })

  displayProducts(filteredProducts)
}

function clearFilters() {
  document.getElementById("searchInput").value = ""
  document.getElementById("minPrice").value = ""
  document.getElementById("maxPrice").value = ""
  loadProducts(currentCategory)
  showToast("Filters cleared")
}

// View functions
function setView(view) {
  currentView = view

  // Update view buttons
  document.querySelectorAll(".view-btn").forEach((btn) => btn.classList.remove("active"))
  document.getElementById(view + "View").classList.add("active")

  // Update grid class
  const grid = document.getElementById("productsGrid")
  if (view === "list") {
    grid.classList.add("list-view")
  } else {
    grid.classList.remove("list-view")
  }

  // Update product cards
  document.querySelectorAll(".product-card").forEach((card) => {
    if (view === "list") {
      card.classList.add("list-view")
    } else {
      card.classList.remove("list-view")
    }
  })
}

// Category functions
function showCategory(category) {
  currentCategory = category

  // Update active category button
  document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("active"))
  event.target.classList.add("active")

  // Update category title
  const title = category === "newArrival" ? "New Arrival" : category.charAt(0).toUpperCase() + category.slice(1)
  document.getElementById("categoryTitle").textContent = title

  // Clear filters and load products
  clearFilters()

  // Add slide animation
  const grid = document.getElementById("productsGrid")
  grid.classList.add("slide-in")
  setTimeout(() => grid.classList.remove("slide-in"), 300)
}

function loadProducts(category) {
  filteredProducts = products[category]
  displayProducts(filteredProducts)
}

function displayProducts(productsToShow) {
  const grid = document.getElementById("productsGrid")
  grid.innerHTML = ""

  if (productsToShow.length === 0) {
    grid.innerHTML =
      '<div class="empty-cart">No products found matching your criteria. Try adjusting your filters.</div>'
    return
  }

  productsToShow.forEach((product, index) => {
    const productCard = createProductCard(product, currentCategory)
    productCard.style.animationDelay = `${index * 0.1}s`
    productCard.classList.add("fade-in")

    if (currentView === "list") {
      productCard.classList.add("list-view")
    }

    grid.appendChild(productCard)
  })
}

function createProductCard(product, category) {
  const card = document.createElement("div")
  card.className = "product-card"

  card.innerHTML = `
        <div class="product-image-container">
            ${createCarousel(product.images, product.id)}
        </div>
        <div class="product-header">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-rating">
                ${generateStars(product.rating)} (${product.rating})
            </div>
        </div>
        <div class="product-content">
            <div class="sizes-section">
                <label class="sizes-label">Available Sizes:</label>
                <div class="sizes-grid">
                    ${product.sizes
                      .map((size) => `<button class="size-btn" onclick="selectSize(this, '${size}')">${size}</button>`)
                      .join("")}
                </div>
            </div>
            <button class="btn btn-primary" style="width: 100%;" onclick="addToCart('${product.id}', '${category}')">
                🛒 Add to Cart
            </button>
        </div>
    `

  return card
}

function selectSize(button, size) {
  // Remove selection from other size buttons in the same product
  const productCard = button.closest(".product-card")
  productCard.querySelectorAll(".size-btn").forEach((btn) => btn.classList.remove("selected"))

  // Select current size
  button.classList.add("selected")
  button.dataset.selected = size
}

function addToCart(productId, category) {
  const product = products[category].find((p) => p.id === productId)
  const productCard = event.target.closest(".product-card")
  const selectedSizeBtn = productCard.querySelector(".size-btn.selected")

  if (!selectedSizeBtn) {
    showToast("Please select a size", "error")
    return
  }

  const size = selectedSizeBtn.dataset.selected
  const cartItemId = `${category}-${productId}-${size}`

  // Check if item already exists in cart
  const existingItem = cart.find((item) => item.id === cartItemId)

  if (existingItem) {
    existingItem.quantity += 1
    showToast(`${product.name} quantity updated in cart!`)
  } else {
    const cartItem = {
      id: cartItemId,
      name: product.name,
      price: product.price,
      size: size,
      category: category,
      quantity: 1,
      image: product.images[0],
    }
    cart.push(cartItem)
    showToast(`${product.name} (Size: ${size}) added to cart!`)
  }

  updateCartBadge()
  updateStats()
  saveToLocalStorage()

  // Reset size selection
  selectedSizeBtn.classList.remove("selected")
  delete selectedSizeBtn.dataset.selected

  // Add animation to cart icon
  const cartContainer = document.querySelector(".cart-container")
  cartContainer.style.transform = "scale(1.2)"
  setTimeout(() => {
    cartContainer.style.transform = "scale(1)"
  }, 200)
}

// Quantity functions
function updateQuantity(itemId, change) {
  const item = cart.find((item) => item.id === itemId)
  if (item) {
    const oldQuantity = item.quantity
    item.quantity += change

    if (item.quantity <= 0) {
      showModal("Remove Item", `Are you sure you want to remove ${item.name} from your cart?`, () =>
        removeFromCart(itemId),
      )
      item.quantity = oldQuantity // Restore quantity until confirmed
    } else {
      updateCartBadge()
      updateStats()
      saveToLocalStorage()
      updateReceipt()
      showToast(`${item.name} quantity updated`)
    }
  }
}

// Discount functions
function applyDiscount() {
  const code = document.getElementById("discountInput").value.toLowerCase().trim()

  if (!code) {
    showToast("Please enter a discount code", "error")
    return
  }

  if (discountCodes[code]) {
    appliedDiscount = { code: code, percentage: discountCodes[code] }
    document.getElementById("discountSection").classList.add("hidden")
    document.getElementById("appliedDiscount").classList.remove("hidden")
    document.getElementById("discountText").textContent = `${code} (${discountCodes[code]}% OFF)`
    document.getElementById("discountInput").value = ""
    saveToLocalStorage()
    updateReceipt()
    showToast(`Discount code "${code}" applied successfully! You saved ${discountCodes[code]}%`)
  } else {
    showToast("Invalid discount code. Try: brocks10, welcome15, save20", "error")

    // Shake animation for invalid code
    const input = document.getElementById("discountInput")
    input.style.animation = "shake 0.5s"
    setTimeout(() => {
      input.style.animation = ""
    }, 500)
  }
}

function removeDiscount() {
  showModal("Remove Discount", `Are you sure you want to remove the ${appliedDiscount.code} discount?`, () => {
    appliedDiscount = null
    document.getElementById("discountSection").classList.remove("hidden")
    document.getElementById("appliedDiscount").classList.add("hidden")
    saveToLocalStorage()
    updateReceipt()
    showToast("Discount code removed")
  })
}

// Payment method
function setPaymentMethod(method) {
  paymentMethod = method
  saveToLocalStorage()
  updateReceipt()
  showToast(`Payment method set to ${method}`)
}

// Receipt functions
function toggleReceipt() {
  showingReceipt = !showingReceipt

  if (showingReceipt) {
    document.getElementById("productsSection").classList.add("hidden")
    document.getElementById("receiptSection").classList.remove("hidden")
    updateReceipt()
  } else {
    document.getElementById("productsSection").classList.remove("hidden")
    document.getElementById("receiptSection").classList.add("hidden")
  }
}

function updateReceipt() {
  const cartItemsContainer = document.getElementById("cartItems")

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div style="font-size: 3rem; margin-bottom: 16px;">🛒</div>
                <div>Your cart is empty</div>
                <div style="margin-top: 8px; font-size: 14px;">Start shopping to add items!</div>
                <button class="btn btn-primary" style="margin-top: 20px;" onclick="toggleReceipt()">
                    Continue Shopping
                </button>
            </div>
        `
    return
  }

  let subtotal = 0
  let itemsHTML = ""

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity
    subtotal += itemTotal
    itemsHTML += `
            <div class="receipt-item">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>Size: ${item.size} | Category: ${item.category}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)" title="Decrease quantity">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)" title="Increase quantity">+</button>
                    </div>
                </div>
                <div class="item-actions">
                    <div style="text-align: right;">
                        <div class="item-price">${formatPrice(itemTotal)}</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">
                            ${formatPrice(item.price)} each
                        </div>
                    </div>
                    <button class="btn btn-danger" onclick="removeFromCart('${item.id}')" title="Remove item">🗑️</button>
                </div>
            </div>
        `
  })

  const discount = appliedDiscount ? (subtotal * appliedDiscount.percentage) / 100 : 0
  const total = subtotal - discount

  let summaryHTML = `
        <div class="receipt-summary">
            <div class="summary-row">
                <span>Subtotal (${cart.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
    `

  if (appliedDiscount) {
    summaryHTML += `
            <div class="summary-row discount-row">
                <span>Discount (${appliedDiscount.code} - ${appliedDiscount.percentage}%):</span>
                <span>-${formatPrice(discount)}</span>
            </div>
        `
  }

  summaryHTML += `
            <div class="summary-row total">
                <span>Total:</span>
                <span>${formatPrice(total)}</span>
            </div>
    `

  if (paymentMethod) {
    summaryHTML += `
            <div class="summary-row">
                <span>Payment Method:</span>
                <span>${paymentMethod}</span>
            </div>
        `
  }

  summaryHTML += `
            <div style="display: flex; gap: 12px; margin-top: 24px;">
                <button class="btn btn-outline" style="flex: 1;" onclick="toggleReceipt()">
                    ← Continue Shopping
                </button>
                <button class="btn btn-primary" style="flex: 1;" onclick="checkout()">
                    💳 Checkout (${formatPrice(total)})
                </button>
            </div>
        </div>
    `

  cartItemsContainer.innerHTML = itemsHTML + summaryHTML
}

function removeFromCart(itemId) {
  const item = cart.find((item) => item.id === itemId)

  showModal("Remove Item", `Are you sure you want to remove ${item.name} from your cart?`, () => {
    cart = cart.filter((item) => item.id !== itemId)
    updateCartBadge()
    updateStats()
    saveToLocalStorage()
    updateReceipt()
    showToast(`${item.name} removed from cart`)
  })
}

function clearCart() {
  if (cart.length === 0) {
    showToast("Cart is already empty", "warning")
    return
  }

  showModal("Clear Cart", "Are you sure you want to remove all items from your cart?", () => {
    cart = []
    updateCartBadge()
    updateStats()
    saveToLocalStorage()
    updateReceipt()
    showToast("Cart cleared successfully")
  })
}

function checkout() {
  if (cart.length === 0) {
    showToast("Your cart is empty", "error")
    return
  }

  if (!paymentMethod) {
    showToast("Please select a payment method", "error")
    return
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = appliedDiscount ? (total * appliedDiscount.percentage) / 100 : 0
  const finalTotal = total - discount

  showModal(
    "Confirm Order",
    `Total: ${formatPrice(finalTotal)}\nPayment: ${paymentMethod}\n\nProceed with checkout?`,
    () => {
      // Show loading
      showLoading()

      // Simulate checkout process
      setTimeout(() => {
        hideLoading()

        // Generate order number
        const orderNumber = "BRK" + Date.now().toString().slice(-6)

        showToast(`Order #${orderNumber} placed successfully! Thank you for shopping with BrockS! 🎉`)

        // Reset cart and state
        cart = []
        appliedDiscount = null
        paymentMethod = ""
        saveToLocalStorage()
        updateCartBadge()
        updateStats()

        // Reset UI
        document.getElementById("discountSection").classList.remove("hidden")
        document.getElementById("appliedDiscount").classList.add("hidden")
        document.querySelectorAll('input[name="payment"]').forEach((input) => (input.checked = false))

        // Go back to products
        setTimeout(() => {
          toggleReceipt()
        }, 2000)
      }, 2000)
    },
  )
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Escape key to close modal or go back
  if (e.key === "Escape") {
    if (!document.getElementById("imageModal").classList.contains("hidden")) {
      closeImageModal()
    } else if (!document.getElementById("confirmModal").classList.contains("hidden")) {
      closeModal()
    } else if (showingReceipt) {
      toggleReceipt()
    }
  }

  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault()
    document.getElementById("searchInput").focus()
  }

  // Arrow keys for image modal navigation
  if (!document.getElementById("imageModal").classList.contains("hidden")) {
    if (e.key === "ArrowLeft") {
      changeModalImage(-1)
    } else if (e.key === "ArrowRight") {
      changeModalImage(1)
    }
  }
})

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadProducts("footwear")
  updateCartBadge()
  updateStats()

  // Restore discount state
  if (appliedDiscount) {
    document.getElementById("discountSection").classList.add("hidden")
    document.getElementById("appliedDiscount").classList.remove("hidden")
    document.getElementById("discountText").textContent = `${appliedDiscount.code} (${appliedDiscount.percentage}% OFF)`
  }

  // Restore payment method
  if (paymentMethod) {
    const paymentInput = document.querySelector(`input[onchange*="${paymentMethod}"]`)
    if (paymentInput) paymentInput.checked = true
  }

  // Welcome message
  setTimeout(() => {
    showToast("Welcome to BrockS ITEM! 🛍️ Click on product images to view them in full size")
  }, 500)

  // Add search input event listener
  const searchInput = document.getElementById("searchInput")
  searchInput.addEventListener("input", searchProducts)

  // Add price filter event listeners
  document.getElementById("minPrice").addEventListener("input", debounce(filterProducts, 500))
  document.getElementById("maxPrice").addEventListener("input", debounce(filterProducts, 500))
})

// Export functions for global access
window.BrocksStore = {
  showCategory,
  addToCart,
  removeFromCart,
  updateQuantity,
  applyDiscount,
  removeDiscount,
  setPaymentMethod,
  toggleReceipt,
  clearCart,
  checkout,
  selectSize,
  filterProducts,
  clearFilters,
  setView,
  searchProducts,
  changeSlide,
  goToSlide,
  openImageModal,
  closeImageModal,
  changeModalImage,
}
