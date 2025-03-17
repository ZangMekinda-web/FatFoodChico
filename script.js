// ===== MENU DATA =====
const menuData = {
  starters: [
    {
      id: "s1",
      title: "Flofi Eru",
      price: 3.99,
      description: "The best Eru ever cooked in Cameroon.",
      image: "/iimages/AFRICA FOOD/ad82b5dc-7492-4fd2-bfce-d9aed04afaaf.jpeg",
    },
    {
      id: "s2",
      title: "Ndole",
      price: 2.99,
      description: "Toasted Ndole topped with fresh tomatoes, fish, and meat.",
      image: "/iimages/AFRICA FOOD/Cameroon Ndole (Bitterleaf casserole )  – AFROVITALITYEATS.jpeg",
    },
    {
      id: "s3",
      title: "Sunday TARO",
      price: 5.99,
      description: "Creamy ingredients to showcase all the value of this sunday taro.",
      image: "/iimages/AFRICA FOOD/Taro_west Cameroon.jpeg",
    },
    {
      id: "s4",
      title: "Okok Sucre",
      price: 2.99,
      description: "Beti best and most valuable food.",
      image: "/iimages/AFRICA FOOD/TOP 10 Les plats Camerounais les plus populaires _ Kelianfood.jpeg",
    },
  ],
  main: [
    {
      id: "m1",
      title: "Grilled Burger",
      price: 6.99,
      description: "A perfect fusion of local flavors for a truly unforgettable taste experience.",
      image: "/iimages/FAST FOOD/1 Kitchen Nashville.jpeg",
    },
    {
      id: "m2",
      title: "Pizza 237",
      price: 12.99,
      description: "The Cameroon Pizza features a mouthwatering combination of rich, local ingredients, including tender meats, fresh vegetables, and aromatic spices",
      image: "/iimages/FAST FOOD/34756b08-4258-4e13-b5d1-a8af7a1cac63.jpeg",
    },
    {
      id: "m3",
      title: "Chicken Parmesan",
      price: 5.99,
      description: "A bold and savory fusion of Italian and Cameroonian flavors.",
      image: "/iimages/FAST FOOD/Breaded Fried Chicken with Fresh Fries And Garlic Dip.jpeg",
    },
    {
      id: "m4",
      title: "Shawamard",
      price: 3.99,
      description: "Perfectly charred and bursting with flavor, it offers a satisfying taste of Cameroon’s vibrant culinary heritage.",
      image: "/iimages/FAST FOOD/Download Free Photo _ Three Flour Tortillas filled with meat, cheese, and vegetables_.jpeg",
    },
  ],
  desserts: [
    {
      id: "d1",
      title: "Chocolate Lava Cake",
      price: 8.99,
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
      image: "/iimages/DESSERTS/Black Velvet Cake.jpeg",
    },
    {
      id: "d2",
      title: "New York Cheesecake",
      price: 7.99,
      description: "Classic creamy cheesecake with a graham cracker crust and berry compote.",
      image: "/iimages/DESSERTS/Easy Chocolate Tiramisu Ready in 20 Minutes.jpeg",
    },
    {
      id: "d3",
      title: "Tiramisu",
      price: 8.99,
      description: "Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
      image: "/iimages/DESSERTS/Easy Oreo Milkshake (Only 3 Ingredients!).jpeg",
    },
    {
      id: "d4",
      title: "Apple Crumble",
      price: 7.99,
      description: "Baked apples with a cinnamon crumble topping, served with caramel sauce.",
      image: "/iimages/DESSERTS/Red Velvet Strawberry Cheesecake.jpeg",
    },
  ],
  drinks: [
    {
      id: "dr1",
      title: "BISSAP",
      price: 0.99,
      description: "Our house specialty with premium spirits and fresh ingredients.",
      image: "/iimages/JUS/BISSAP, jus de fleurs d'hibiscus séchées - Zenglutenfree_fr.jpeg",
    },
    {
      id: "dr2",
      title: "Jus de gingembre",
      price: 0.99,
      description: "Rotating selection of local and imported craft .",
      image: "/iimages/JUS/Jus de gingembre _ un allié santé au quotidien !.jpeg",
    },
    {
      id: "dr3",
      title: "Watermelon Lime Agua Fresca",
      price: 1.99,
      description: "Selection of red, white, and sparkling fruits from Cameroon.",
      image: "/iimages/JUS/Watermelon Lime Agua Fresca [10 Minutes] - Copie.jpeg",
    },
    {
      id: "dr4",
      title: "Mango Juice",
      price: 1.99,
      description: "Blended fresh fruits with Mango or juice of your choice.",
      image: "/iimages/JUS/Mango Juice Refreshing Homemade.jpeg",
    },
  ],
}

// ===== DOM ELEMENTS =====
// Header
const header = document.getElementById("header")
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileNav = document.querySelector(".mobile-nav")

// Menu
const tabButtons = document.querySelectorAll(".tab-button")
const tabPanes = document.querySelectorAll(".tab-pane")
const menuGrids = document.querySelectorAll(".menu-grid")

// Order
const orderTabButtons = document.querySelectorAll(".order-tab-button")
const orderTabPanes = document.querySelectorAll(".order-tab-pane")
const orderGrids = document.querySelectorAll(".order-grid")
const cartItems = document.querySelector(".cart-items")
const mobileCartItems = document.querySelector(".mobile-cart-items")
const cartTotalPrice = document.getElementById("cart-total-price")
const mobileCartTotalPrice = document.getElementById("mobile-cart-total-price")
const checkoutButton = document.getElementById("checkout-button")
const mobileCheckoutButton = document.getElementById("mobile-checkout-button")
const mobileCartButton = document.querySelector(".mobile-cart-button")
const mobileCart = document.querySelector(".mobile-cart")
const closeCartBtn = document.querySelector(".close-cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartCount = document.querySelector(".cart-count")
const orderConfirmation = document.getElementById("order-confirmation")

// Reservations
const reservationForm = document.getElementById("reservation-form")
const dateInput = document.getElementById("date")
const timeInput = document.getElementById("time")
const datepicker = document.getElementById("datepicker")
const timepicker = document.getElementById("timepicker")
const prevMonthBtn = document.getElementById("prev-month")
const nextMonthBtn = document.getElementById("next-month")
const currentMonthElement = document.getElementById("current-month")
const calendarDays = document.getElementById("calendar-days")
const timeSlots = document.querySelector(".time-slots")
const reserveButton = document.querySelector(".reserve-button")
const reservationConfirmation = document.getElementById("reservation-confirmation")

// Contact
const contactForm = document.getElementById("contact-form")
const contactConfirmation = document.getElementById("contact-confirmation")

// Footer
const currentYearElement = document.getElementById("current-year")

// ===== UTILITY FUNCTIONS =====
// Format price
const formatPrice = (price) => {
  return `$${price.toFixed(2)}`
}

// Generate random ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  currentYearElement.textContent = new Date().getFullYear()

  // Initialize menu
  initMenu()

  // Initialize order section
  initOrder()

  // Initialize datepicker
  initDatepicker()

  // Initialize timepicker
  initTimepicker()

  // Initialize event listeners
  initEventListeners()
})

// ===== HEADER FUNCTIONALITY =====
// Handle scroll event for header
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileNav.classList.toggle("active")
  document.body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : ""
}

// ===== MENU SECTION =====
// Initialize menu
const initMenu = () => {
  // Populate menu tabs
  populateMenuTab("starters", menuData.starters)
  populateMenuTab("main", menuData.main)
  populateMenuTab("desserts", menuData.desserts)
  populateMenuTab("drinks", menuData.drinks)
}

// Populate menu tab
const populateMenuTab = (tabId, items) => {
  const menuGrid = document.querySelector(`#${tabId} .menu-grid`)

  items.forEach((item) => {
    const menuItem = document.createElement("div")
    menuItem.className = "menu-item"
    menuItem.innerHTML = `
      <div class="menu-item-image">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="menu-item-content">
        <div class="menu-item-header">
          <h3 class="menu-item-title">${item.title}</h3>
          <div class="menu-item-price">${formatPrice(item.price)}</div>
        </div>
        <p class="menu-item-description">${item.description}</p>
      </div>
    `

    menuGrid.appendChild(menuItem)
  })
}

// Handle tab switching
const switchTab = (event) => {
  const tabId = event.target.dataset.tab

  // Update active tab button
  tabButtons.forEach((button) => {
    button.classList.remove("active")
  })
  event.target.classList.add("active")

  // Update active tab pane
  tabPanes.forEach((pane) => {
    pane.classList.remove("active")
  })
  document.getElementById(tabId).classList.add("active")
}

// ===== ORDER SECTION =====
// Initialize order section
const initOrder = () => {
  // Populate order tabs
  populateOrderTab("order-starters", menuData.starters)
  populateOrderTab("order-main", menuData.main)
  populateOrderTab("order-desserts", menuData.desserts)
  populateOrderTab("order-drinks", menuData.drinks)

  // Initialize cart
  updateCart()
}

// Populate order tab
const populateOrderTab = (tabId, items) => {
  const orderGrid = document.querySelector(`#${tabId} .order-grid`)

  items.forEach((item) => {
    const orderItem = document.createElement("div")
    orderItem.className = "order-item"
    orderItem.dataset.id = item.id
    orderItem.innerHTML = `
      <div class="order-item-header">
        <h3 class="order-item-title">${item.title}</h3>
        <div class="order-item-price">${formatPrice(item.price)}</div>
      </div>
      <p class="order-item-description">${item.description}</p>
      <div class="order-item-actions">
        <div class="quantity-control">
          <div class="quantity-btn minus" data-id="${item.id}">-</div>
          <div class="quantity">0</div>
          <div class="quantity-btn plus" data-id="${item.id}">+</div>
        </div>
        <button class="add-to-cart" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}">
          <i class="fas fa-cart-plus"></i> Add
        </button>
      </div>
    `

    orderGrid.appendChild(orderItem)

    // Add event listeners for quantity buttons
    const minusBtn = orderItem.querySelector(".minus")
    const plusBtn = orderItem.querySelector(".plus")
    const quantityElement = orderItem.querySelector(".quantity")
    const addToCartBtn = orderItem.querySelector(".add-to-cart")

    minusBtn.addEventListener("click", () => {
      let quantity = Number.parseInt(quantityElement.textContent)
      if (quantity > 0) {
        quantity--
        quantityElement.textContent = quantity
      }
    })

    plusBtn.addEventListener("click", () => {
      let quantity = Number.parseInt(quantityElement.textContent)
      quantity++
      quantityElement.textContent = quantity
    })

    addToCartBtn.addEventListener("click", () => {
      const quantity = Number.parseInt(quantityElement.textContent)
      if (quantity > 0) {
        addToCart(item.id, item.title, item.price, quantity)
        quantityElement.textContent = "0"
      }
    })
  })
}

// Handle order tab switching
const switchOrderTab = (event) => {
  const tabId = event.target.dataset.tab

  // Update active tab button
  orderTabButtons.forEach((button) => {
    button.classList.remove("active")
  })
  event.target.classList.add("active")

  // Update active tab pane
  orderTabPanes.forEach((pane) => {
    pane.classList.remove("active")
  })
  document.getElementById(`order-${tabId}`).classList.add("active")
}

// Cart functionality
let cart = []

// Add item to cart
const addToCart = (id, title, price, quantity) => {
  const existingItem = cart.find((item) => item.id === id)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      id,
      title,
      price: Number.parseFloat(price),
      quantity,
    })
  }

  updateCart()

  // Show animation
  mobileCartButton.classList.add("pulse")
  setTimeout(() => {
    mobileCartButton.classList.remove("pulse")
  }, 500)
}

// Update cart
const updateCart = () => {
  // Update cart items
  cartItems.innerHTML = ""
  mobileCartItems.innerHTML = ""

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>'
    mobileCartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>'
    checkoutButton.disabled = true
    mobileCheckoutButton.disabled = true
  } else {
    checkoutButton.disabled = false
    mobileCheckoutButton.disabled = false

    cart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"
      cartItem.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${formatPrice(item.price)} x ${item.quantity}</div>
        </div>
        <div class="cart-item-quantity">
          <div class="cart-quantity-btn minus" data-id="${item.id}">-</div>
          <div class="cart-quantity">${item.quantity}</div>
          <div class="cart-quantity-btn plus" data-id="${item.id}">+</div>
          <div class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash"></i></div>
        </div>
      `

      cartItems.appendChild(cartItem)

      const mobileCartItem = cartItem.cloneNode(true)
      mobileCartItems.appendChild(mobileCartItem)

      // Add event listeners for cart item buttons
      const minusBtn = cartItem.querySelector(".minus")
      const plusBtn = cartItem.querySelector(".plus")
      const removeBtn = cartItem.querySelector(".cart-item-remove")

      minusBtn.addEventListener("click", () => {
        updateCartItemQuantity(item.id, -1)
      })

      plusBtn.addEventListener("click", () => {
        updateCartItemQuantity(item.id, 1)
      })

      removeBtn.addEventListener("click", () => {
        removeCartItem(item.id)
      })

      // Mobile cart item buttons
      const mobileMinus = mobileCartItem.querySelector(".minus")
      const mobilePlus = mobileCartItem.querySelector(".plus")
      const mobileRemove = mobileCartItem.querySelector(".cart-item-remove")

      mobileMinus.addEventListener("click", () => {
        updateCartItemQuantity(item.id, -1)
      })

      mobilePlus.addEventListener("click", () => {
        updateCartItemQuantity(item.id, 1)
      })

      mobileRemove.addEventListener("click", () => {
        removeCartItem(item.id)
      })
    })
  }

  // Update cart total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotalPrice.textContent = formatPrice(total)
  mobileCartTotalPrice.textContent = formatPrice(total)

  // Update cart count
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = count
}

// Update cart item quantity
const updateCartItemQuantity = (id, change) => {
  const item = cart.find((item) => item.id === id)

  if (item) {
    item.quantity += change

    if (item.quantity <= 0) {
      removeCartItem(id)
    } else {
      updateCart()
    }
  }
}

// Remove item from cart
const removeCartItem = (id) => {
  cart = cart.filter((item) => item.id !== id)
  updateCart()
}

// Handle checkout
const handleCheckout = () => {
  // Show confirmation message
  orderConfirmation.classList.add("active")

  // Clear cart
  cart = []
  updateCart()

  // Hide confirmation after 3 seconds
  setTimeout(() => {
    orderConfirmation.classList.remove("active")
  }, 3000)

  // Close mobile cart
  closeMobileCart()
}

// Toggle mobile cart
const toggleMobileCart = () => {
  mobileCart.classList.toggle("active")
  cartOverlay.classList.toggle("active")
  document.body.style.overflow = mobileCart.classList.contains("active") ? "hidden" : ""
}

// Close mobile cart
const closeMobileCart = () => {
  mobileCart.classList.remove("active")
  cartOverlay.classList.remove("active")
  document.body.style.overflow = ""
}

// ===== RESERVATIONS SECTION =====
// Initialize datepicker
const initDatepicker = () => {
  const today = new Date()
  let currentMonth = today.getMonth()
  let currentYear = today.getFullYear()

  // Update current month display
  updateCalendar(currentMonth, currentYear)

  // Previous month button
  prevMonthBtn.addEventListener("click", () => {
    currentMonth--
    if (currentMonth < 0) {
      currentMonth = 11
      currentYear--
    }
    updateCalendar(currentMonth, currentYear)
  })

  // Next month button
  nextMonthBtn.addEventListener("click", () => {
    currentMonth++
    if (currentMonth > 11) {
      currentMonth = 0
      currentYear++
    }
    updateCalendar(currentMonth, currentYear)
  })

  // Toggle datepicker
  dateInput.addEventListener("click", (e) => {
    e.preventDefault()
    datepicker.classList.toggle("active")
    timepicker.classList.remove("active")
  })

  // Close datepicker when clicking outside
  document.addEventListener("click", (e) => {
    if (!dateInput.contains(e.target) && !datepicker.contains(e.target)) {
      datepicker.classList.remove("active")
    }

    if (!timeInput.contains(e.target) && !timepicker.contains(e.target)) {
      timepicker.classList.remove("active")
    }
  })
}

// Update calendar
const updateCalendar = (month, year) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Update month display
  currentMonthElement.textContent = `${monthNames[month]} ${year}`

  // Clear calendar
  calendarDays.innerHTML = ""

  // Get first day of month
  const firstDay = new Date(year, month, 1).getDay()

  // Get number of days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // Get current date
  const today = new Date()
  const currentDate = today.getDate()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  // Add empty cells for days before first day of month
  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div")
    calendarDays.appendChild(emptyDay)
  }

  // Add days of month
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div")
    day.className = "day"
    day.textContent = i

    // Check if day is in the past
    const isPast =
      year < currentYear ||
      (year === currentYear && month < currentMonth) ||
      (year === currentYear && month === currentMonth && i < currentDate)

    if (isPast) {
      day.classList.add("disabled")
    } else {
      day.addEventListener("click", () => {
        // Remove selected class from all days
        document.querySelectorAll(".day").forEach((d) => {
          d.classList.remove("selected")
        })

        // Add selected class to clicked day
        day.classList.add("selected")

        // Update date input
        const selectedDate = new Date(year, month, i)
        const formattedDate = `${monthNames[month].substring(0, 3)} ${i}, ${year}`
        dateInput.value = formattedDate

        // Close datepicker
        datepicker.classList.remove("active")

        // Check if both date and time are selected
        checkReservationForm()
      })
    }

    calendarDays.appendChild(day)
  }
}

// Initialize timepicker
const initTimepicker = () => {
  // Generate time slots
  generateTimeSlots()

  // Toggle timepicker
  timeInput.addEventListener("click", (e) => {
    e.preventDefault()
    timepicker.classList.toggle("active")
    datepicker.classList.remove("active")
  })
}

// Generate time slots
const generateTimeSlots = () => {
  const openingHour = 11 // 11 AM
  const closingHour = 21 // 9 PM
  const interval = 30 // 30 minutes

  for (let hour = openingHour; hour <= closingHour; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      if (hour === closingHour && minute > 0) continue

      const timeSlot = document.createElement("div")
      timeSlot.className = "time-slot"

      const displayHour = hour > 12 ? hour - 12 : hour
      const amPm = hour >= 12 ? "PM" : "AM"
      const displayMinute = minute === 0 ? "00" : minute

      timeSlot.textContent = `${displayHour}:${displayMinute} ${amPm}`

      timeSlot.addEventListener("click", () => {
        // Remove selected class from all time slots
        document.querySelectorAll(".time-slot").forEach((slot) => {
          slot.classList.remove("selected")
        })

        // Add selected class to clicked time slot
        timeSlot.classList.add("selected")

        // Update time input
        timeInput.value = timeSlot.textContent

        // Close timepicker
        timepicker.classList.remove("active")

        // Check if both date and time are selected
        checkReservationForm()
      })

      timeSlots.appendChild(timeSlot)
    }
  }
}

// Check if both date and time are selected
const checkReservationForm = () => {
  if (dateInput.value && timeInput.value) {
    reserveButton.disabled = false
  } else {
    reserveButton.disabled = true
  }
}

// Handle reservation form submission
const handleReservationSubmit = (e) => {
  e.preventDefault()

  // Show confirmation message
  reservationConfirmation.classList.add("active")

  // Reset form
  reservationForm.reset()
  reserveButton.disabled = true

  // Hide confirmation after 3 seconds
  setTimeout(() => {
    reservationConfirmation.classList.remove("active")
  }, 3000)
}

// ===== CONTACT SECTION =====
// Handle contact form submission
const handleContactSubmit = (e) => {
  e.preventDefault()

  // Show confirmation message
  contactConfirmation.classList.add("active")

  // Reset form
  contactForm.reset()

  // Hide confirmation after 3 seconds
  setTimeout(() => {
    contactConfirmation.classList.remove("active")
  }, 3000)
}

// ===== EVENT LISTENERS =====
const initEventListeners = () => {
  // Mobile menu
  mobileMenuBtn.addEventListener("click", toggleMobileMenu)

  // Menu tabs
  tabButtons.forEach((button) => {
    button.addEventListener("click", switchTab)
  })

  // Order tabs
  orderTabButtons.forEach((button) => {
    button.addEventListener("click", switchOrderTab)
  })

  // Mobile cart
  mobileCartButton.addEventListener("click", toggleMobileCart)
  closeCartBtn.addEventListener("click", closeMobileCart)
  cartOverlay.addEventListener("click", closeMobileCart)

  // Checkout buttons
  checkoutButton.addEventListener("click", handleCheckout)
  mobileCheckoutButton.addEventListener("click", handleCheckout)

  // Reservation form
  reservationForm.addEventListener("submit", handleReservationSubmit)

  // Contact form
  contactForm.addEventListener("submit", handleContactSubmit)

  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = link.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (mobileNav.classList.contains("active")) {
          toggleMobileMenu()
        }
      }
    })
  })
}

