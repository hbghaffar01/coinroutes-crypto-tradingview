import { Button, Navigation, BlinkingIndicator } from "@/components";
import Logo from "@/assets/logo.webp";

function Navbar() {
  return (
    <>
      <header className="bg-[#172229] h-16 px-6 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              bgColor="transparent"
              color="white"
              borderRadius="50%"
              padding="12px"
              size="60"
              fontSize="18"
              hoverBgColor="rgba(255, 255, 255, 0.08)"
              disabledBgColor="lightgray"
            >
              <span className="flex items-center justify-center">
                <img src={Logo} alt="Logo" loading="lazy" />
              </span>
            </Button>
            <Navigation />
          </div>
          <BlinkingIndicator />
        </div>
      </header>
    </>
  );
}

export default Navbar;
