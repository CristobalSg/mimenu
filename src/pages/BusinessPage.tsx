import './FrancoPizzas.css'; // para estilos personalizados si deseas

export default function FrancoPizzas() {
  return (
    <div className="menu-container">
      <h1>🍕 Franco Pizzas</h1>
      <h2>Precios</h2>
      <p><strong>Familiar:</strong> $15.000</p>
      <p><strong>Mediana:</strong> $10.000</p>

      <h2>Menú de Pizzas</h2>
      <ul>
        <li><strong>Carbonara:</strong> Pollo, Champiñones, Orégano y Queso</li>
        <li><strong>Margarita:</strong> Tomates, Albahaca y Queso</li>
        <li><strong>Hawaiana:</strong> Piña, Jamón y Queso</li>
        <li><strong>Vegetariana:</strong> Choclo morrón, Aceituna y Queso</li>
        <li><strong>Primavera:</strong> Pollo, Aceituna, Jamón y Queso</li>
        <li><strong>Criolla:</strong> Mechada, Choclo y Queso</li>
        <li><strong>Peperoni y Queso</strong></li>
        <li><strong>Pollo BBQ</strong></li>
      </ul>

      <h2>Adicionales</h2>
      <div className="extras">
        <div>
          <h3>Familiar</h3>
          <ul>
            <li>Pollo: $3.500</li>
            <li>Carne: $3.500</li>
            <li>Queso: $3.000</li>
            <li>Tocino: $3.500</li>
            <li>Choclo: $2.000</li>
            <li>Aceitunas: $2.000</li>
            <li>Piña: $2.000</li>
            <li>Salame: $3.500</li>
          </ul>
        </div>
        <div>
          <h3>Mediana</h3>
          <ul>
            <li>Pollo: $2.800</li>
            <li>Carne: $2.800</li>
            <li>Queso: $2.500</li>
            <li>Tocino: $2.800</li>
            <li>Choclo: $1.500</li>
            <li>Aceitunas: $1.500</li>
            <li>Piña: $1.500</li>
            <li>Salame: $2.800</li>
          </ul>
        </div>
      </div>

      <h2>Contacto</h2>
      <p>📍 Agua Marina 742</p>
      <p>📱 +56 9 2209 6185 / +56 9 2367 1313</p>
      <p>📸 Instagram: <a href="https://instagram.com/Burguer_franco" target="_blank">@Burguer_franco</a></p>
    </div>
  );
}
