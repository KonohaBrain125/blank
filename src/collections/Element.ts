import { CollectionConfig } from "payload/types";

const Example: CollectionConfig = {
  slug: "examples",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "richText",
      type: "richText",
    },
  ],
};

export default Example;