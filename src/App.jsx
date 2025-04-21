// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Analytics from './pages/Analytics';
// import Products from './pages/Products';
// import Customers from './pages/Customers';
// import Sidebar from './components/Sidebar';
// import Topbar from './components/Topbar';
// import { useState, useEffect } from 'react';
// import Settings from './pages/Settings';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(prev => !prev);
//   };

//   return (
//     <Router>
//       <div className="flex h-screen bg-pink-900 overflow-hidden relative">
//         {/* Sidebar */}
//         <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} />

//         {/* Overlay (only for mobile) */}
//         {isMobile && isSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-40 z-40"
//             onClick={toggleSidebar}
//           />
//         )}

//         {/* Main content */}
//         <div className="flex flex-col flex-1 overflow-hidden z-0">
//           <Topbar toggleSidebar={toggleSidebar} />
//           <main className="flex-1 overflow-y-auto p-4">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/analytics" element={<Analytics />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/customers" element={<Customers />} />
//               <Route path="/settings" element={<Settings />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { useState, useEffect } from 'react';
import Settings from './pages/Settings';

// Custom wrapper to access location with Router
const AppContent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 640);

  const location = useLocation();

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true); // Ensure it's open on desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on route change (mobile only)
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen bg-pink-900 overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} />

      {/* Overlay (for mobile) */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden z-0">
        <Topbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

// Wrap AppContent with Router to access useLocation
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
