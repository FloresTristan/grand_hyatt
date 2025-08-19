
import Image from 'next/image';
import sheraton from "../../src/app/assets/sheraton.png"

export default function Home() {
  return (
    <div className="">
      <Image src={sheraton} alt="sample" placeholder="blur" />
    </div>
  );
}
