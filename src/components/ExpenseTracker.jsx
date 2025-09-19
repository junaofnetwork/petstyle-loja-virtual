import React, { useState } from 'react';

const categories = [
  { value: 'alimentacao', label: 'Alimentação' },
  { value: 'transporte', label: 'Transporte' },
  { value: 'lazer', label: 'Lazer' },
  { value: 'saude', label: 'Saúde' },
  { value: 'outros', label: 'Outros' },
];

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    if (!valor || !categoria) return;

    const newExpense = {
      id: Date.now(),
      valor: parseFloat(valor),
      categoria,
    };

    setExpenses([...expenses, newExpense]);
    setValor('');
    setCategoria('');
  };

  const calculateTotalByCategory = (category) => {
    return expenses
      .filter((expense) => expense.categoria === category)
      .reduce((total, expense) => total + expense.valor, 0);
  };

  const formatCurrency = (value) => {
    return `R$${value.toFixed(2).replace('.', ',')}`;
  };

  return (
    <section className="mb-12 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Controle de Gastos</h2>
      <form onSubmit={addExpense} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="mb-4">
          <label htmlFor="valor" className="block text-gray-700 font-medium mb-2">Valor do Gasto (R$)</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Digite o Valor de gastos"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            step="0.01"
            min="0"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categoria" className="block text-gray-700 font-medium mb-2">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>Selecione a categoria</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors font-medium">
          Adicionar Gasto
        </button>
      </form>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {categories.map((cat) => (
          <p key={cat.value} className="text-gray-800 mb-2">
            {cat.label}: {formatCurrency(calculateTotalByCategory(cat.value))}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ExpenseTracker;
