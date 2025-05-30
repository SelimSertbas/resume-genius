import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <Link 
            to="https://www.selimsertbas.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            www.selimsertbas.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 