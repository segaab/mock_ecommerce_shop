import MainNav from "./main-nav"
import CartSlideOut from "./cart-slide-out"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <MainNav />
        <CartSlideOut />
      </div>
    </header>
  )
} 