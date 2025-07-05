import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" px-4 bg-card relative border-t border-border mt-12 py-2 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Aditya Bora | All rights reserved.
      </p>
    </footer>
  );
};