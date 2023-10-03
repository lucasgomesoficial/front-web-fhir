export function Header() {
  return (
    <header className="flex justify-between items-center bg-primary h-20 text-secondary px-14 font-semibold">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-10 w-10"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        <h1 className="text-3xl">Enterprise</h1>
      </div>
      
      <div className="flex gap-8 text-lg">
        <p>Lucas Gomes Santos</p>
        <p>CRM: 165165156-56</p>
      </div>
    </header>
  );
}
