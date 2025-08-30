import SanityImageComp from "./sanity-image";

export const BlockComponents = {
  types: {
    // For images
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-4">
          {/* Replace with your sanity image builder if needed */}
          <SanityImageComp
            asset={value.asset} // If you use next-sanity image builder, use urlFor(value).url()
            alt={value.alt || " "}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      );
    },
  },

  block: {
    normal: ({ children }: any) => <p>{children}</p>,
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 pl-4 italic">{children}</blockquote>
    ),
    pre: ({ children }: any) => (
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{children}</code>
      </pre>
    ),
  },
};
