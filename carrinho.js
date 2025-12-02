// === CARRINHO ===
let carrinho = [];
let total = 0;

// Adiciona item
function adicionarCarrinho(item, preco) {
  carrinho.push({ item, preco });
  total += preco;
  const contador = document.getElementById("cart-count");
  if (contador) contador.textContent = carrinho.length;
}

// Mostra o carrinho
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
}

// Finaliza a compra
function finalizarCompra() {
  const forma = document.getElementById("pagamento").value;
  if (!forma) return alert("❌ Escolha uma forma de pagamento!");

  const formaTxt = forma === "pix" ? "Pix" : forma === "cartao" ? "Cartão" : "Dinheiro";

  alert(
    `✅ Compra finalizada!\n\nItens: ${carrinho.length}\nTotal: R$ ${total.toFixed(
      2
    )}\nPagamento: ${formaTxt}\n\nObrigada por comprar na Sabor Douradense 💖`
  );

  carrinho = [];
  total = 0;
  document.getElementById("cart-count").textContent = "0";
  document.getElementById("checkout").classList.add("hidden");
}
