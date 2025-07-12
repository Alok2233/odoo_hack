import React, { useEffect, useState } from "react";

const mockUserData = {
  name: "Sophia",
  memberSince: 2022,
  points: 250,
  items: [
    {
      name: "Floral Summer Dress",
      size: "M",
      image: "https://i.imgur.com/9XG6yWX.png",
    },
    {
      name: "Leather Biker Jacket",
      size: "L",
      image: "https://i.imgur.com/8zFJ4Vv.jpeg",
    },
    {
      name: "Ankle Boots",
      size: "7",
      image: "https://i.imgur.com/tC3yEq1.jpeg",
    },
  ],
  swaps: {
    ongoing: [
      {
        item: "Floral Summer Dress",
        with: "Liam",
        image: "https://i.imgur.com/9XG6yWX.png",
        status: "In Progress",
      },
    ],
    completed: [
      {
        item: "Leather Biker Jacket",
        with: "Ethan",
        image: "https://i.imgur.com/8zFJ4Vv.jpeg",
        status: "Completed",
      },
      {
        item: "Ankle Boots",
        with: "Olivia",
        image: "https://i.imgur.com/tC3yEq1.jpeg",
        status: "Completed",
      },
    ],
  },
};

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => setUser(mockUserData), 500);
  }, []);

  if (!user) return <div className="text-center mt-20">Loading Dashboard...</div>;

  return (
    <div className="flex min-h-screen bg-[#fdfaf5] text-[#2c2c2c]">
      {/* Sidebar */}
      <aside className="w-60 bg-[#f9f6f0] p-6 border-r">
        <div className="mb-10">
          <img
            src="https://i.pravatar.cc/80"
            alt="Avatar"
            className="rounded-full w-16 h-16 mx-auto"
          />
          <h3 className="text-center font-semibold mt-3">{user.name}</h3>
          <p className="text-center text-sm text-gray-500">
            Member since {user.memberSince}
          </p>
        </div>
        <nav className="space-y-3">
          <button className="block w-full text-left py-2 px-4 rounded bg-[#eae6dd] font-medium">
            Dashboard
          </button>
          <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100">
            My Items
          </button>
          <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100">
            Swaps
          </button>
          <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100">
            Wishlist
          </button>
          <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100">
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-sm text-gray-500 mb-8">Welcome back, {user.name}!</p>

        <div className="bg-white rounded shadow p-6 mb-10">
          <p className="text-gray-500 text-sm mb-2">Points Balance</p>
          <h2 className="text-2xl font-bold">{user.points}</h2>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">My Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {user.items.map((item, i) => (
              <div key={i} className="bg-white rounded shadow overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Size {item.size}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Ongoing Swaps</h2>
          <ul className="space-y-4">
            {user.swaps.ongoing.map((swap, i) => (
              <li key={i} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div className="flex items-center gap-4">
                  <img src={swap.image} alt={swap.item} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="font-medium">{swap.item}</p>
                    <p className="text-sm text-gray-500">Swapping with {swap.with}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-yellow-600">{swap.status}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Completed Swaps</h2>
          <ul className="space-y-4">
            {user.swaps.completed.map((swap, i) => (
              <li key={i} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div className="flex items-center gap-4">
                  <img src={swap.image} alt={swap.item} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="font-medium">{swap.item}</p>
                    <p className="text-sm text-gray-500">Swapped with {swap.with}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-600">{swap.status}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;