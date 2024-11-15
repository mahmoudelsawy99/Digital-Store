$(document).ready(function () {
  // Array of MobileCollections data
  const MobileCollections = [
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Blue.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, purple.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Blue.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, purple.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Blue.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, purple.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Blue.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, purple.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
  ];

  // Loop through the array and generate MobileCollections cards
  MobileCollections.forEach((product) => {
    const productCardHTML = `
            <div class="col-6 col-md-4 col-lg-2">
                <div class="card product-card">
                    <div class="card-header text-end">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                        <path d="M19.0591 2.19913C16.9302 0.386633 13.7466 0.687414 11.77 2.72648L11.0005 3.52335L10.2309 2.73038C8.6372 1.08195 5.42235 0.0897578 2.94189 2.19913C0.488761 4.29288 0.359854 8.0507 2.55517 10.3163L10.1138 18.121C10.3559 18.371 10.6763 18.4999 10.9966 18.4999C11.3169 18.4999 11.6372 18.3749 11.8794 18.121L19.438 10.3163C21.6411 8.0507 21.5122 4.29288 19.0591 2.19913V2.19913ZM18.5474 9.44913L11.0161 17.2538L3.4536 9.44913C1.9536 7.90226 1.6411 4.95304 3.75439 3.15226C5.89501 1.32413 8.41064 2.64835 9.33251 3.60148L11.0005 5.32413L12.6684 3.60148C13.5747 2.66398 16.1138 1.33585 18.2466 3.15226C20.3559 4.94913 20.0474 7.89835 18.5474 9.44913Z" fill="#F16126" stroke="#575353" stroke-width="0.0390625"/>
                      </svg>       
                       </div>
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <p class="category mb-1">${product.category}</p>
                        <h5 class="product-name">${product.name}</h5>
                        <div class="price d-flex justify-content-between align-items-center mt-2">
                            <span class="current-price text-primary">${product.currentPrice}</span>
                            <span class="original-price text-muted text-decoration-line-through ms-2">${product.originalPrice}</span>
                            <a href="#" class="btn btn-link p-0 mt-2">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

    // Append each generated card to the container
    $("#mobile-collections-container").append(productCardHTML);
  });
  // Array of MobileAccessories data
  const MobileAccessories = [
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/airpods pro.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/adaptor.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/airpods max.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/adaptor head.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/airpods single one.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/usb wireless.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/usb.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/converter.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/airpods max.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/airpods single one.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/airpods pro.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/usb.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
  ];

  // Loop through the array and generate MobileAccessories cards
  MobileAccessories.forEach((product) => {
    const productCardHTML = `
                <div class="col-6 col-md-4 col-lg-2">
                    <div class="card product-card">
                        <div class="card-header text-end">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                            <path d="M19.0591 2.19913C16.9302 0.386633 13.7466 0.687414 11.77 2.72648L11.0005 3.52335L10.2309 2.73038C8.6372 1.08195 5.42235 0.0897578 2.94189 2.19913C0.488761 4.29288 0.359854 8.0507 2.55517 10.3163L10.1138 18.121C10.3559 18.371 10.6763 18.4999 10.9966 18.4999C11.3169 18.4999 11.6372 18.3749 11.8794 18.121L19.438 10.3163C21.6411 8.0507 21.5122 4.29288 19.0591 2.19913V2.19913ZM18.5474 9.44913L11.0161 17.2538L3.4536 9.44913C1.9536 7.90226 1.6411 4.95304 3.75439 3.15226C5.89501 1.32413 8.41064 2.64835 9.33251 3.60148L11.0005 5.32413L12.6684 3.60148C13.5747 2.66398 16.1138 1.33585 18.2466 3.15226C20.3559 4.94913 20.0474 7.89835 18.5474 9.44913Z" fill="#F16126" stroke="#575353" stroke-width="0.0390625"/>
                          </svg> 
                       </div>
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body text-center">
                            <p class="category mb-1">${product.category}</p>
                            <h5 class="product-name">${product.name}</h5>
                            <div class="price d-flex justify-content-between align-items-center mt-2">
                                <span class="current-price text-primary">${product.currentPrice}</span>
                                <span class="original-price text-muted text-decoration-line-through ms-2">${product.originalPrice}</span>
                                <a href="#" class="btn btn-link p-0 mt-2">
                                    <i class="fas fa-shopping-cart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    // Append each generated card to the container
    $("#mobile-accessories-cards-container").append(productCardHTML);
  });

  // Array of Electronics data

  const Electronics = [
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Blue.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, purple.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Blue.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, purple.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Blue.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, purple.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Blue.png",
      category: "Mobile",
      currentPrice: "AED 3999",
      originalPrice: "AED 4500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold.png",
      category: "Mobile",
      currentPrice: "AED 4999",
      originalPrice: "AED 5500",
    },
    {
      name: "Apple iPhone 11 Pro Max - 256GB, 4G LTE, Gold",
      image: "../imgaes/Apple iPhone 11 Pro Max - 256GB, 4G LTE, purple.png",
      category: "Mobile",
      currentPrice: "AED 3499",
      originalPrice: "AED 4000",
    },
  ];
  // Loop through the array and generate Electronics cards
  Electronics.forEach((product) => {
    const productCardHTML = `
                <div class="col-6 col-md-4 col-lg-2">
                    <div class="card product-card">
                        <div class="card-header text-end">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                            <path d="M19.0591 2.19913C16.9302 0.386633 13.7466 0.687414 11.77 2.72648L11.0005 3.52335L10.2309 2.73038C8.6372 1.08195 5.42235 0.0897578 2.94189 2.19913C0.488761 4.29288 0.359854 8.0507 2.55517 10.3163L10.1138 18.121C10.3559 18.371 10.6763 18.4999 10.9966 18.4999C11.3169 18.4999 11.6372 18.3749 11.8794 18.121L19.438 10.3163C21.6411 8.0507 21.5122 4.29288 19.0591 2.19913V2.19913ZM18.5474 9.44913L11.0161 17.2538L3.4536 9.44913C1.9536 7.90226 1.6411 4.95304 3.75439 3.15226C5.89501 1.32413 8.41064 2.64835 9.33251 3.60148L11.0005 5.32413L12.6684 3.60148C13.5747 2.66398 16.1138 1.33585 18.2466 3.15226C20.3559 4.94913 20.0474 7.89835 18.5474 9.44913Z" fill="#F16126" stroke="#575353" stroke-width="0.0390625"/>
                          </svg>  
                      </div>
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body text-center">
                            <p class="category mb-1">${product.category}</p>
                            <h5 class="product-name">${product.name}</h5>
                            <div class="price d-flex justify-content-between align-items-center mt-2">
                                <span class="current-price text-primary">${product.currentPrice}</span>
                                <span class="original-price text-muted text-decoration-line-through ms-2">${product.originalPrice}</span>
                                <a href="#" class="btn btn-link p-0 mt-2">
                                    <i class="fas fa-shopping-cart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    // Append each generated card to the container
    $("#product-cards-container").append(productCardHTML);
  });
});
