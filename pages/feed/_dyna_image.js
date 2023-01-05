import Image from "next/image";

const WithDynamicImage = (image) => {
console.log(image)
return (
    <Image
        src={image}
      alt="Picture of the author"
      width={500}
      height={500}
    />
)

}




export async function getServerSideProps({
  params,
}) {
  const image = await getImages() // fetch your data;
  const imageDynamic = image[param.id] //pass the prop from the url

  return { props: { image : imageDynamic || null } };
}

export default WithDynamicImage;