document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));

  if (!productId) {
    document.body.innerHTML = "<p class='text-center text-red-600 mt-10'>Product ID is missing in the URL.</p>";
    return;
  }

  fetch("product-details.json")
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.id === productId);
      const related = products.filter(p => p.id !== productId).slice(0, 3); // Get 4 related

      if (!product) {
        document.body.innerHTML = "<p class='text-center text-red-600 mt-10'>Product not found.</p>";
        return;
      }

      const container = document.createElement("div");
      container.className = "max-w-5xl mx-auto p-4";

      // Back Button
      container.innerHTML += `
        <a href="/index.html" class="inline-block mb-4 text-blue-600 hover:underline">&larr; Back to Products</a>
      `;

      // Main Product Section
      container.innerHTML += `
        <section class="bg-white shadow-md rounded-lg p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src="${product.image}" alt="${product.name}" class="w-full rounded-lg shadow-sm">
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-2 text-gray-800">${product.name}</h2>
              <p class="text-gray-600 mb-4">${product.tagline}</p>
              <p class="text-gray-700 mb-4">${product.description}</p>

            

              ${product.offer ? `
  <div class="bg-gradient-to-r from-yellow-400 to-yellow-300 text-yellow-900 border border-yellow-500 rounded-lg p-4 shadow-md mb-4 flex items-center gap-4">
    <div class="text-3xl">🎁</div>
    <div>
      <h4 class="font-bold text-lg">Special Offer!</h4>
      <p class="text-sm font-medium">
        Get <span class="font-semibold">${product.offer.quantity} ${product.offer.freeProduct}</span> absolutely FREE <br>
        (Worth <span class="underline">${product.offer.worth}</span>)
      </p>
    </div>
  </div>
` : ''}


              <ul class="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                ${product.features.map(f => `<li>${f}</li>`).join("")}
              </ul>

              <div class="text-lg font-semibold text-blue-600 mb-4">Price: ${product.price} (${product.size} Pack)</div>

<a href="https://wa.me/8448161446?text=Hi, I want to buy the Sports Shoes (Size 9)" target="_blank">
    <button>Buy on WhatsApp</button>
</a>
                
              Buy Now
              </button>
            </div>
          </div>
        </section>
      `;

      // Related Products Section
      if (related.length > 0) {
        container.innerHTML += `
          <h3 class="text-xl font-semibold mt-10 mb-4 text-gray-800">Related Products</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            ${related.map(prod => `
              <div class="bg-white p-4 shadow rounded-lg">
                <img src="${prod.image}" alt="${prod.name}" class="w-full h-40 object-cover rounded mb-2">
                <h4 class="text-lg font-semibold text-gray-800">${prod.name}</h4>
                <p class="text-gray-600 text-sm mb-2">${prod.size} • ${prod.price}</p>
                <a href="product-details.html?id=${prod.id}" class="text-blue-600 hover:underline text-sm">View Details</a>
              </div>
            `).join("")}
          </div>
        `;
      }

      document.body.appendChild(container);
    })
    .catch(err => {
      console.error(err);
      document.body.innerHTML = "<p class='text-center text-red-600 mt-10'>Failed to load product data.</p>";
    });
});
