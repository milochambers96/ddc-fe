const Footer = () => {
  return (
    <footer className="md:mt-[5rem] mt-16 md:pb-[6rem] pb-11 flex justify-center">
      <div className="flex justify-between items-center w-full max-w-[81.25rem]">
        <h6 className="md:d7-detail-faded p7-detail-faded">Copyright 2026</h6>
        {/* External link with inline arrow */}
        <a
          href="https://www.instagram.com/denisedecordova1/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 md:d7-detail-faded p7-detail-faded hover:text-ddc-highlight transition-colors"
        >
          Instagram
          <span className="material-symbols-outlined text-[1rem]">
            arrow_outward
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
