type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <>
    <h1>Slug: {params.slug}</h1>
    <p>Duy Anh Pham</p>
    <p>Welcome to my demo</p>
  </>;
}
