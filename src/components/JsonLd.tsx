import {
  serviceCategories,
  serviceItemDescription,
} from "@/data/services";
import { siteConfig } from "@/lib/site";

const saudiArabia = {
  "@type": "Country",
  name: "Saudi Arabia",
} as const;

const remoteChannel = {
  "@type": "ServiceChannel",
  name: "خدمات عن بُعد عبر واتساب والموقع",
  serviceUrl: siteConfig.url,
  servicePhone: siteConfig.phone,
  availableLanguage: ["ar", "en"],
} as const;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.nameEn,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  areaServed: saudiArabia,
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["ar", "en"],
  },
  sameAs: [
    siteConfig.socials.instagram,
    siteConfig.socials.x,
    siteConfig.socials.tiktok,
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  alternateName: siteConfig.nameEn,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "ar",
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.url}/#services`,
  name: "خدمات منجز لخدمات الأعمال",
  description:
    "حلول إلكترونية متكاملة تسهّل الإجراءات الإدارية والقانونية عن بُعد في جميع مناطق المملكة العربية السعودية.",
  numberOfItems: serviceCategories.length,
  itemListElement: serviceCategories.map((category, categoryIndex) => ({
    "@type": "ListItem",
    position: categoryIndex + 1,
    item: {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-${category.id}`,
      name: category.title,
      description: [
        category.description ?? category.title,
        category.legalNotice,
      ]
        .filter(Boolean)
        .join(" "),
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: saudiArabia,
      availableChannel: remoteChannel,
      url: `${siteConfig.url}/#services`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: category.title,
        numberOfItems: category.children.length,
        itemListElement: category.children.map((child, childIndex) => ({
          "@type": "Offer",
          position: childIndex + 1,
          itemOffered: {
            "@type": "Service",
            name: child.title,
            description: serviceItemDescription(child) || child.title,
            provider: { "@id": `${siteConfig.url}/#organization` },
            areaServed: saudiArabia,
            availableChannel: remoteChannel,
            url: `${siteConfig.url}/#services`,
            ...(child.subtypes?.length
              ? {
                  additionalProperty: child.subtypes.map((subtype) => ({
                    "@type": "PropertyValue",
                    name: "نوع الشركة",
                    value: subtype,
                  })),
                }
              : {}),
            ...(child.items?.length
              ? {
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: child.title,
                    numberOfItems: child.items.length,
                    itemListElement: child.items.map((item, itemIndex) => ({
                      "@type": "Offer",
                      position: itemIndex + 1,
                      itemOffered: {
                        "@type": "Service",
                        name: item.replace(/\.$/, ""),
                        provider: {
                          "@id": `${siteConfig.url}/#organization`,
                        },
                        areaServed: saudiArabia,
                      },
                    })),
                  },
                }
              : {}),
          },
        })),
      },
    },
  })),
};

const processSteps = [
  {
    name: "تواصل معنا",
    text: "راسلنا عبر واتساب وأخبرنا بالخدمة التي تحتاجها.",
  },
  {
    name: "دراسة الطلب",
    text: "نراجع متطلباتك والمستندات اللازمة ونوضح لك المسار والمدة المتوقعة.",
  },
  {
    name: "التنفيذ والمتابعة",
    text: "نتولى الإجراءات الرسمية ونبقيك على اطلاع بكل مرحلة.",
  },
  {
    name: "التسليم والإنجاز",
    text: "نستكمل الطلب ونسلّمك النتيجة جاهزة بكل وضوح واحتراف.",
  },
] as const;

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "كيف تعمل منجز لخدمات الأعمال؟",
  description: "نختصر عليك الإجراءات بخطوات مرتبة وواضحة.",
  inLanguage: "ar",
  step: processSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

export default function JsonLd() {
  const schemas = [
    organizationSchema,
    webSiteSchema,
    servicesSchema,
    howToSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
