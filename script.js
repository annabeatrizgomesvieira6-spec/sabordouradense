// === CARRINHO ===
let carrinho = [];
let total = 0;

function adicionarCarrinho(item, preco) {
  carrinho.push({ item, preco });
  total += preco;
  document.getElementById("cart-count").textContent = carrinho.length;
}

function mostrarCarrinho() {
  if (carrinho.length === 0) {
    alert("🛒 Seu carrinho está vazio!");
    return;
  }

  const checkout = document.getElementById("checkout");
  const lista = document.getElementById("checkout-list");
  const totalTxt = document.getElementById("checkout-total");

  lista.innerHTML = carrinho
    .map(c => `🍧 ${c.item} — R$ ${c.preco.toFixed(2)}`)
    .join("<br>");
  totalTxt.textContent = `💰 Total: R$ ${total.toFixed(2)}`;
  checkout.classList.remove("hidden");
  checkout.scrollIntoView({ behavior: "smooth" });
}

function finalizarCompra() {
  const forma = document.getElementById("pagamento").value;
  const formaTxt =
    forma === "pix" ? "Pix" : forma === "cartao" ? "Cartão" : "Dinheiro";

  alert(
    `✅ Compra finalizada!\n\nItens: ${carrinho.length}\nTotal: R$ ${total.toFixed(
      2
    )}\nForma de pagamento: ${formaTxt}\n\nObrigada por comprar na Sabor Douradense 💖`
  );

  carrinho = [];
  total = 0;
  document.getElementById("cart-count").textContent = "0";
  document.getElementById("checkout").classList.add("hidden");
}

// === ENTREGA ===
function handleDelivery(event) {
  event.preventDefault();
  document.getElementById("delivery-msg").style.display = "block";
  alert("🚚 Endereço confirmado! A entrega será feita em breve.");
}
