import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#hero');
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <a
      href="#hero"
      onClick={handleClick}
      className="fixed bottom-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors z-50 scroll-button smooth-scroll"
    >
      <ArrowUp size={20} />
    </a>
  );
};
