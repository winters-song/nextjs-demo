import Image from "next/image";

export default function CaptchaBox() {

  const url = '/api/v1/verification/code/captcha?w=200&h=50'

  return (
    <Image src={url} alt="" width={200} height={50}/>
  );
}