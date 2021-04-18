export interface CartItem {
  id: string;
  images: string[];
  quantity: number;
  price: number;
  currency: string;
  size: string;
  name: string;
  productId: string;
}

export interface ProductPageProps {
  product: {
    id: string;
    images: string[];
    active: string;
    attributes: string[];
    name: string;
  };
  skus: {
    nodes: {
      id: string;
      active: boolean;
      attributes: {
        size: string;
        type: string;
        gender: string;
      };
      currency: string;
      price: number;
    }[];
  };
}

export interface ShopPageProps {
  products: {
    nodes: {
      id: string;
      name: string;
      images: string[];
      active: boolean;
    }[];
  };
  skus: {
    nodes: {
      price: number;
      currency: string;
      attributes: {
        type: string;
        size: string;
      };
      product: {
        id: string;
      };
    }[];
  };
}

export interface NewestPageProps {
  products: {
    nodes: {
      id: string;
      name: string;
      images: string[];
      active: boolean;
    }[];
  };
  skus: {
    nodes: {
      price: number;
      currency: string;
      product: {
        id: string;
      };
    }[];
  };
}
