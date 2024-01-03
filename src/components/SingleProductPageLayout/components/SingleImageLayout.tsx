import {Image} from "@/components/shared/Image/Image";

interface SingleImageLayoutProps {
  imgSrc: string;
}

export const SingleImageLayout = (props: SingleImageLayoutProps) => {
  const {imgSrc} = props;

  return <Image src={imgSrc} alt="product-image" width={630} height={630}/>
}
