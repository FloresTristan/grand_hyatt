
import Image from 'next/image';
import grandhyattmodel from "../app/assets/grandhyatt-resized.png"
// import Modal from './components/modal';
// import EventModalOverlay from './components/EventModalOverlay';

export default function Home() {
  
  return (
    <div className="">
      {/* <Modal open={open} onClose={onClose} defaultOpen={defaultOpen} title={title} subhead={subhead} description={description} ctaLabel={ctaLabel} ctaHref={ctaHref} showTrigger={showTrigger} /> */}
      {/* <EventModalOverlay
            container="fullscreen"
            open={true}
            onClose={() => setForceOpen(false)}
            imageUrl={"undefined"}
            title={ 'Event Title'}
            description={"dfgdfgdf"}
            dateRange={"null"}
            timeText={"null"}
            ctaLabel={"ctaLabel"}
            ctaHref={"ctaHref"}
          /> */}
      <Image src={grandhyattmodel} alt="sample" placeholder="blur" quality={100} objectFit="cover" layout="fill" />
    </div>
  );
}
