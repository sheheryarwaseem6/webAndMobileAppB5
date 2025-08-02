function Orders() {
  const orders = [
    {
      id: 1,
      user: {
        name: 'User 1',
        email: 'user1@gmail.com',
        phone: '03001234567'
      },
      products: [
        { name: 'Wireless Headphones', price: 3500, quantity: 1 },
      ],
      paymentStatus: 'Paid'
    },
    {
      id: 2,
      user: {
        name: 'User 2',
        email: 'user2@gmail.com',
        phone: '03001234567'
      },
      products: [
        { name: 'Lenovo ThinkPad Laptop', price: 35000, quantity: 1 },
      ],
      paymentStatus: 'Pending'
    },
    {
      id: 3,
      user: {
        name: 'User 3',
        email: 'user3@gmail.com',
        phone: '03001234567'
      },
      products: [
        { name: 'Lenovo ThinkPad Laptop', price: 35000, quantity: 1 },
      ],
      paymentStatus: 'Paid'
    },
    {
      id: 4,
      user: {
        name: 'User 4',
        email: 'user4@gmail.com',
        phone: '03001234567'
      },
      products: [
        { name: 'Lenovo ThinkPad Laptop', price: 35000, quantity: 1 },
      ],
      paymentStatus: 'Paid'
    },
    
  ];

  const calculateTotal = (products) => {
    return products.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {orders.map(order => (
        <div key={order.id} className="bg-white shadow rounded p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>

          {/* User Info */}
          <div className="mb-3 text-sm text-gray-700">
            <p><strong>User:</strong> {order.user.name}</p>
            <p><strong>Email:</strong> {order.user.email}</p>
            <p><strong>Phone:</strong> {order.user.phone}</p>
          </div>

          {/* Product List */}
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map((prod, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{prod.name}</td>
                  <td className="p-2">Rs. {prod.price}</td>
                  <td className="p-2">{prod.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <p><strong>Total:</strong> Rs. {calculateTotal(order.products)}</p>
            <span className={`px-3 py-1 rounded text-white ${order.paymentStatus === 'Paid' ? 'bg-gray-800' : 'bg-yellow-600'}`}>
              {order.paymentStatus}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
