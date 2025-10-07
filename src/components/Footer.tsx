const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Built by OSNW — Timeless Design in a Modern World.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
