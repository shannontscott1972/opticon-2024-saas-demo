/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "fragment ButtonBlockData on ButtonBlock {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}": types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}": types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CardBlockData on CardBlock {\n  CardHeading\n  CardSubheading\n  CardDescription {\n    json\n    html\n  }\n  CardColor\n  CardButton {\n    ...ButtonBlockPropertyData\n  }\n  CardIcon {\n    ...ReferenceData\n  }\n  CardImage {\n    ...ReferenceData\n  }\n  CardImageLayout\n}": types.CardBlockDataFragmentDoc,
    "fragment HeaderBlockData on HeaderBlock {\n  site_logo {\n    ...ReferenceData\n  }\n  site_logo_dark {\n    ...ReferenceData\n  }\n  site_main_navigation {\n    ...IContentListItem\n  }\n  site_utility_navigation {\n    ...IContentListItem\n  }\n}": types.HeaderBlockDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}": types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}": types.NavigationMenuBlockDataFragmentDoc,
    "fragment NavigationMenuBlockPropertyData on NavigationMenuBlockProperty {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}": types.NavigationMenuBlockPropertyDataFragmentDoc,
    "fragment OfficeLocationData on OfficeLocation {\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}": types.OfficeLocationDataFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  metaTitle\n}": types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  metaTitle\n}": types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment WebsiteFooterData on WebsiteFooter {\n  FooterMainOfficeLocation {\n    ...IContentListItem\n  }\n  FooterFirstLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterSecondLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterThirdLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterLogo {\n    ...ReferenceData\n  }\n  FooterLogoAltText\n  FooterLegalLinks {\n    ...LinkItemData\n  }\n}": types.WebsiteFooterDataFragmentDoc,
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n}": types.ArticleListElementDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  Link {\n    ...LinkData\n  }\n  Text\n}": types.CTAElementDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": types.HeadingElementDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": types.ImageElementDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}": types.ParagraphElementDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}": types.TestimonialElementDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "fragment ArticleGroupPageData on ArticleGroupPage {\n  LandingPageSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  articleGroupTitle\n  articleGroupIntro {\n    json\n    html\n  }\n  MainContent {\n    ...BlockData\n  }\n}": types.ArticleGroupPageDataFragmentDoc,
    "fragment ArticlePageData on ArticlePage {\n  articleSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  articleHeroImage {\n    ...ReferenceData\n  }\n  articleSummary {\n    json\n    html\n  }\n  articleTitle\n  articleAuthors\n  articleBody {\n    json\n    html\n  }\n}": types.ArticlePageDataFragmentDoc,
    "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionElementNode {\n            element {\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IElement {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IElement {\n        ...IElementData\n    }\n\nfragment BlockData on _IContent {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }": types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": types.getContentByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockData on ButtonBlock {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}"): (typeof documents)["fragment ButtonBlockData on ButtonBlock {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}"): (typeof documents)["fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CardBlockData on CardBlock {\n  CardHeading\n  CardSubheading\n  CardDescription {\n    json\n    html\n  }\n  CardColor\n  CardButton {\n    ...ButtonBlockPropertyData\n  }\n  CardIcon {\n    ...ReferenceData\n  }\n  CardImage {\n    ...ReferenceData\n  }\n  CardImageLayout\n}"): (typeof documents)["fragment CardBlockData on CardBlock {\n  CardHeading\n  CardSubheading\n  CardDescription {\n    json\n    html\n  }\n  CardColor\n  CardButton {\n    ...ButtonBlockPropertyData\n  }\n  CardIcon {\n    ...ReferenceData\n  }\n  CardImage {\n    ...ReferenceData\n  }\n  CardImageLayout\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeaderBlockData on HeaderBlock {\n  site_logo {\n    ...ReferenceData\n  }\n  site_logo_dark {\n    ...ReferenceData\n  }\n  site_main_navigation {\n    ...IContentListItem\n  }\n  site_utility_navigation {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment HeaderBlockData on HeaderBlock {\n  site_logo {\n    ...ReferenceData\n  }\n  site_logo_dark {\n    ...ReferenceData\n  }\n  site_main_navigation {\n    ...IContentListItem\n  }\n  site_utility_navigation {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment NavigationMenuBlockData on NavigationMenuBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NavigationMenuBlockPropertyData on NavigationMenuBlockProperty {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment NavigationMenuBlockPropertyData on NavigationMenuBlockProperty {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OfficeLocationData on OfficeLocation {\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}"): (typeof documents)["fragment OfficeLocationData on OfficeLocation {\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsData on PageSeoSettings {\n  metaTitle\n}"): (typeof documents)["fragment PageSeoSettingsData on PageSeoSettings {\n  metaTitle\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  metaTitle\n}"): (typeof documents)["fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  metaTitle\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WebsiteFooterData on WebsiteFooter {\n  FooterMainOfficeLocation {\n    ...IContentListItem\n  }\n  FooterFirstLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterSecondLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterThirdLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterLogo {\n    ...ReferenceData\n  }\n  FooterLogoAltText\n  FooterLegalLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment WebsiteFooterData on WebsiteFooter {\n  FooterMainOfficeLocation {\n    ...IContentListItem\n  }\n  FooterFirstLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterSecondLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterThirdLinkList {\n    ...NavigationMenuBlockPropertyData\n  }\n  FooterLogo {\n    ...ReferenceData\n  }\n  FooterLogoAltText\n  FooterLegalLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n}"): (typeof documents)["fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CTAElementData on CTAElement {\n  Link {\n    ...LinkData\n  }\n  Text\n}"): (typeof documents)["fragment CTAElementData on CTAElement {\n  Link {\n    ...LinkData\n  }\n  Text\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeadingElementData on HeadingElement {\n  headingText\n}"): (typeof documents)["fragment HeadingElementData on HeadingElement {\n  headingText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}"): (typeof documents)["fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}"): (typeof documents)["fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleGroupPageData on ArticleGroupPage {\n  LandingPageSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  articleGroupTitle\n  articleGroupIntro {\n    json\n    html\n  }\n  MainContent {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment ArticleGroupPageData on ArticleGroupPage {\n  LandingPageSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  articleGroupTitle\n  articleGroupIntro {\n    json\n    html\n  }\n  MainContent {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticlePageData on ArticlePage {\n  articleSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  articleHeroImage {\n    ...ReferenceData\n  }\n  articleSummary {\n    json\n    html\n  }\n  articleTitle\n  articleAuthors\n  articleBody {\n    json\n    html\n  }\n}"): (typeof documents)["fragment ArticlePageData on ArticlePage {\n  articleSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  articleHeroImage {\n    ...ReferenceData\n  }\n  articleSummary {\n    json\n    html\n  }\n  articleTitle\n  articleAuthors\n  articleBody {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionElementNode {\n            element {\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IElement {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IElement {\n        ...IElementData\n    }\n\nfragment BlockData on _IContent {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }"): (typeof documents)["fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionElementNode {\n            element {\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IElement {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IElement {\n        ...IElementData\n    }\n\nfragment BlockData on _IContent {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;