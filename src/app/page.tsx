
import Image from 'next/image';
import grandhyattmodel from "../app/assets/grandhyatt-resized.png"

export default function Home() {
  return (
    <div className="">
      <Image src={grandhyattmodel} alt="sample" placeholder="blur" quality={100} objectFit="cover" layout="fill" />
    </div>
  );
}
