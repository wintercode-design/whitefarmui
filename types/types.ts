export type Job = {
  id: number;
  title: string;
  summery: string;
  description: string;
  dateline: Date;
  reference: string;
  type: string;
  posts: number;
  contact: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  cover: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: Small;
      thumbnail: Small;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: Date;
    updated_at: Date;
  };
};

export type Client = {
  id: number;
  name: string;
  position: string;
  date: Date;
  comment: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  cover: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: Medium;
      medium: Medium;
      thumbnail: Medium;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: Date;
    updated_at: Date;
  }[];
};

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export type Team = {
  id: number;
  name: string;
  position: string;
  contact: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  profile: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: Medium;
      medium: Medium;
      thumbnail: Medium;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: Date;
    updated_at: Date;
  };
};

export type Blog = {
  id: number;
  Title: null;
  summary: string;
  Content: null;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  title: string;
  content: string;
  cover: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: Date;
    updated_at: Date;
  };
};

export type History = {
  id: number;
  title: string;
  subtitle: string;
  story: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  date: Date;
  cover: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: Medium;
      medium: Medium;
      thumbnail: Medium;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: Date;
    updated_at: Date;
  };
};

export type Product = {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  unit: string;
  conditions: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  cover: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: Small;
      thumbnail: Small;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: Date;
    updated_at: Date;
  };
  others: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: Small;
      medium: Small;
      thumbnail: Small;
    };
    hash: string;
    ext: {
      JPEG: ".jpeg";
    };
    mime: {
      ImageJPEG: "image/jpeg";
    };
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: Date;
    updated_at: Date;
  }[];
};

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}
