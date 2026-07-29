const products = [
  {
    name: "MacBook Air",
    category: "tech",
    categoryLabel: "Tech",
    badge: "EDITOR'S CHOICE",
    description: "Een lichte en krachtige laptop voor werk, studie en dagelijks gebruik.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "Apple iPad",
    category: "tech",
    categoryLabel: "Tech",
    badge: "BEST SELLER",
    description: "Veelzijdig voor entertainment, creativiteit, planning en onderweg.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "Sony Noise Cancelling Headphones",
    category: "tech",
    categoryLabel: "Tech",
    badge: "LUCCO PICK",
    description: "Comfortabele koptelefoon voor muziek, reizen en geconcentreerd werken.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "USB-C Hub",
    category: "tech",
    categoryLabel: "Tech",
    badge: "SMART FIND",
    description: "Een compacte uitbreiding voor laptops en tablets met extra aansluitingen.",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "Dreame Robotstofzuiger",
    category: "home",
    categoryLabel: "Home",
    badge: "TRENDING",
    description: "Slimme dagelijkse ondersteuning voor een schoon en rustig huis.",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "Dyson Steelstofzuiger",
    category: "home",
    categoryLabel: "Home",
    badge: "PREMIUM PICK",
    description: "Krachtige draadloze reiniging met een modern en compact ontwerp.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "Philips Hue Starterset",
    category: "home",
    categoryLabel: "Home",
    badge: "SMART HOME",
    description: "Creëer eenvoudig verschillende sferen met slimme verlichting.",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "Minimalistisch Servies",
    category: "home",
    categoryLabel: "Home",
    badge: "LUCCO STYLE",
    description: "Rustig vormgegeven servies voor een stijlvolle dagelijkse tafel.",
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=85",
    url: "https://www.hema.nl"
  },
  {
    name: "Ninja Airfryer",
    category: "home",
    categoryLabel: "Kitchen",
    badge: "BEST SELLER",
    description: "Snel en veelzijdig koken met minder olie en weinig voorbereiding.",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "Philips LatteGo",
    category: "home",
    categoryLabel: "Kitchen",
    badge: "COFFEE PICK",
    description: "Automatische koffiemachine voor cappuccino, espresso en dagelijkse koffie.",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "De'Longhi Koffiemachine",
    category: "home",
    categoryLabel: "Kitchen",
    badge: "PREMIUM PICK",
    description: "Een stijlvolle machine voor verse koffie met een luxe uitstraling.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "PFAS-vrije Koekenpan",
    category: "home",
    categoryLabel: "Kitchen",
    badge: "SMART CHOICE",
    description: "Een praktische pan voor dagelijks koken met een bewuste materiaalkeuze.",
    image: "https://images.unsplash.com/photo-1584990347449-a7f6cc52a661?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "Oral-B iO Elektrische Tandenborstel",
    category: "wellness",
    categoryLabel: "Wellness",
    badge: "BEST SELLER",
    description: "Slimme dagelijkse mondverzorging met verschillende poetsstanden.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "CeraVe Verzorgingsroutine",
    category: "wellness",
    categoryLabel: "Skincare",
    badge: "DAILY ESSENTIAL",
    description: "Eenvoudige huidverzorging voor een rustige en overzichtelijke routine.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "RENPHO Massage Gun",
    category: "wellness",
    categoryLabel: "Wellness",
    badge: "RECOVERY PICK",
    description: "Compact massageapparaat voor ontspanning na werk of beweging.",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "Satijnen Kussensloop",
    category: "wellness",
    categoryLabel: "Wellness",
    badge: "SELF-CARE",
    description: "Een zachte en stijlvolle toevoeging aan je slaap- en verzorgingsroutine.",
    image: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?auto=format&fit=crop&w=900&q=85",
    url: "https://www.hema.nl"
  },
  {
    name: "Rituals Gift Set",
    category: "wellness",
    categoryLabel: "Gifts",
    badge: "GIFT PICK",
    description: "Een verzorgd cadeau met producten voor ontspanning en dagelijkse luxe.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85",
    url: "https://www.rituals.com/nl-nl/home"
  },
  {
    name: "Samsonite Koffer",
    category: "travel",
    categoryLabel: "Travel",
    badge: "TRAVEL PICK",
    description: "Een stevige en stijlvolle koffer voor vakanties en korte reizen.",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "Packing Cubes",
    category: "travel",
    categoryLabel: "Travel",
    badge: "SMART FIND",
    description: "Houd kleding en accessoires overzichtelijk georganiseerd in je koffer.",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "Anker Powerbank",
    category: "travel",
    categoryLabel: "Travel Tech",
    badge: "TRAVEL ESSENTIAL",
    description: "Extra batterijcapaciteit voor je telefoon tijdens lange dagen onderweg.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "Comfortabel Reiskussen",
    category: "travel",
    categoryLabel: "Travel",
    badge: "COMFORT PICK",
    description: "Extra ondersteuning tijdens lange autoritten, treinreizen en vluchten.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=85",
    url: "https://www.hema.nl"
  },
  {
    name: "Levi's 501 Jeans",
    category: "fashion",
    categoryLabel: "Fashion",
    badge: "ICONIC PICK",
    description: "Een tijdloze jeans die eenvoudig te combineren is met iedere stijl.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
    url: "https://www.zalando.nl"
  },
  {
    name: "Adidas Samba",
    category: "fashion",
    categoryLabel: "Fashion",
    badge: "TRENDING",
    description: "Een klassieke sneaker met een sportieve en tijdloze uitstraling.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    url: "https://www.zalando.nl"
  },
  {
    name: "Minimalistisch Overshirt",
    category: "fashion",
    categoryLabel: "Fashion",
    badge: "LUCCO STYLE",
    description: "Een veelzijdige extra laag voor een rustige en moderne outfit.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    url: "https://www.zalando.nl"
  },
  {
    name: "Compacte Crossbody Bag",
    category: "fashion",
    categoryLabel: "Fashion",
    badge: "DAILY PICK",
    description: "Een compacte tas voor je telefoon, portemonnee en dagelijkse essentials.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    url: "https://www.zalando.nl"
  },
  {
    name: "Garmin Smartwatch",
    category: "sport",
    categoryLabel: "Sport",
    badge: "SPORT TECH",
    description: "Inzicht in beweging, training en dagelijkse activiteit vanaf je pols.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "Nike Sportshirt",
    category: "sport",
    categoryLabel: "Sport",
    badge: "TRAINING PICK",
    description: "Een comfortabel shirt voor fitness, hardlopen en dagelijkse beweging.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    url: "https://www.zalando.nl"
  },
  {
    name: "Weerstandsbanden Set",
    category: "sport",
    categoryLabel: "Sport",
    badge: "HOME WORKOUT",
    description: "Compacte trainingsbanden voor verschillende oefeningen en niveaus.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    url: "https://www.decathlon.nl"
  },
  {
    name: "Yoga- en Fitnessmat",
    category: "sport",
    categoryLabel: "Sport",
    badge: "WELLNESS PICK",
    description: "Een comfortabele ondergrond voor yoga, stretching en thuistraining.",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=85",
    url: "https://www.decathlon.nl"
  },
  {
    name: "LEGO Icons Set",
    category: "home",
    categoryLabel: "Gifts",
    badge: "CREATIVE PICK",
    description: "Een stijlvol bouwproject dat daarna ook als interieurdecoratie werkt.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=85",
    url: "https://www.bol.com/be/nl/"
  },
  {
    name: "JBL Bluetooth Speaker",
    category: "tech",
    categoryLabel: "Tech",
    badge: "BEST SELLER",
    description: "Draadloos muziek luisteren thuis, buiten of tijdens een weekend weg.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    url: "https://www.coolblue.nl"
  },
  {
    name: "Minimalistische Geurkaars",
    category: "home",
    categoryLabel: "Home",
    badge: "LUCCO PICK",
    description: "Een rustige woonaccessoire voor een warme en ontspannen sfeer.",
    image: "https://images.unsplash.com/photo-1602874801006-e26b88c7e28d?auto=format&fit=crop&w=900&q=85",
    url: "https://www.hema.nl"
  }
];

const shopGrid = document.getElementById("shopGrid");
const shopSearch = document.getElementById("shopSearch");
const filterButtons = document.querySelectorAll(".filter");

let activeFilter = "all";
let searchTerm = "";

function createProductCard(product) {
  return `
    <article class="product-card shop-product">
      <a
        class="product-image"
        href="${product.url}"
        target="_blank"
        rel="sponsored noopener noreferrer"
        aria-label="Bekijk ${product.name} bij onze partner"
      >
        <span class="product-label">${product.badge}</span>

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
      </a>

      <div class="product-content">
        <span class="product-category">
          ${product.categoryLabel}
        </span>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <a
          class="product-link"
          href="${product.url}"
          target="_blank"
          rel="sponsored noopener noreferrer"
        >
          Bekijk actuele prijs →
        </a>
      </div>
    </article>
  `;
}

function renderProducts() {
  if (!shopGrid) {
    return;
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeFilter === "all" || product.category === activeFilter;

    const searchableText = `
      ${product.name}
      ${product.category}
      ${product.categoryLabel}
      ${product.description}
      ${product.badge}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    shopGrid.innerHTML = `
      <div class="shop-empty-message">
        <h3>Geen producten gevonden</h3>
        <p>Probeer een andere zoekterm of selecteer een andere categorie.</p>
      </div>
    `;

    return;
  }

  shopGrid.innerHTML = filteredProducts
    .map(createProductCard)
    .join("");
}

if (shopSearch) {
  shopSearch.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderProducts();
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");
    renderProducts();
  });
});

renderProducts();

/* Mobiel menu */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuButton = document.getElementById("closeMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu-links a");

function openMobileMenu() {
  if (!mobileMenu || !menuButton) {
    return;
  }

  mobileMenu.classList.add("active");
  document.body.classList.add("menu-open");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  if (!mobileMenu || !menuButton) {
    return;
  }

  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}

if (menuButton) {
  menuButton.addEventListener("click", openMobileMenu);
}

if (closeMenuButton) {
  closeMenuButton.addEventListener("click", closeMobileMenu);
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

/* Scrollanimaties */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

/* Nieuwsbrief */

const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

if (newsletterForm && formMessage) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (!email || !emailInput.checkValidity()) {
      formMessage.textContent = "Vul een geldig e-mailadres in.";
      return;
    }

    formMessage.textContent =
      "Bedankt! Je inschrijving is ontvangen.";

    newsletterForm.reset();
  });
}

/* Automatisch jaartal */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
