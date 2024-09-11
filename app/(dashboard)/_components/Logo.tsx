import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Cougen Logo"
      width={50}
      height={50}
    />
  )
}

export default Logo