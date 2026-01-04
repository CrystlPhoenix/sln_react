import { Helmet } from 'react-helmet-async';
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, keywords, canonical }) => {
  const location = useLocation();
  const fullCanonical = canonical || `https://slneng.com${location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "S.L.N Engineering Limited",
    "url": "https://slneng.com",
    "logo": "https://slneng.com/logo.png",
    "email": "mailto:customercare@slneng.com",
    "telephone": "+2349153864376", // Replace with your actual logo URL if available
    "sameAs": [
      "https://www.instagram.com/s.l.negineering_ltd?igsh=NmUxbjZtdm0zMWN4",
      "https://www.linkedin.com/in/s-l-n-engineering-lagos-nigeria-a25826300/",
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>

      {description && (
        <>
          <meta name="description" content={description} />
          <meta name="dcterms.description" content={description} />
        </>
      )}

      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta name="dcterms.title" content={title} />
      <meta name="dcterms.publisher" content="S.L.N Engineering Limited" />
      <meta name="dcterms.contributor" content="S.L.N Engineering Limited" />
      <meta name="dcterms.creator" content="slneng.com" />

      <meta name="application-name" content="slneng.com" />
      <meta name="robots" content="index, follow" />
      <meta name="rating" content="General" />

      {canonical && <link rel="canonical" href={fullCanonical} />}

      {/* ✅ JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;



