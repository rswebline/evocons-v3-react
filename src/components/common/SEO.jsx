import { Helmet } from "react-helmet-async";
import { site } from "../../data/site";

export default function SEO({
  title = site.defaultTitle,
  description = site.defaultDescription,
  image = site.defaultImage,
  url = site.url,
  type = "website",
  robots = "index,follow",
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description,
    image,
    areaServed: "IT",
    serviceType: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Data Analytics",
      "Executive Education",
      "Digital Transformation",
    ],
  };
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {site.twitter && (
        <>
          <meta name="twitter:site" content={site.twitter} />
          <meta name="twitter:creator" content={site.twitter} />
        </>
      )}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}