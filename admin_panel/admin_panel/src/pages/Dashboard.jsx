function Dashboard() {
  const stats = {
    users: 45,
    products: 120,
    orders: 35,
    revenue: 78000 // in PKR
  };

  const cards = [
    { label: 'Users', value: stats.users, icon: '👥', color: 'bg-blue-100 text-blue-700' },
    { label: 'Products', value: stats.products, icon: '📦', color: 'bg-green-100 text-green-700' },
    { label: 'Orders', value: stats.orders, icon: '🛒', color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Revenue', value: `Rs. ${stats.revenue}`, icon: '💰', color: 'bg-purple-100 text-purple-700' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className={`p-4 rounded shadow ${card.color}`}>
            <div className="text-3xl mb-2">{card.icon}</div>
            <div className="text-lg font-semibold">{card.value}</div>
            <div className="text-sm">{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

