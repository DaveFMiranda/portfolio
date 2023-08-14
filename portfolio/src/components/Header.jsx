import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-primary text-white py-2 fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-between">
    
      <h1 className="mb-0">Dave Miranda</h1>
      <Navigation />
      </div>
    </header>
  );
}
