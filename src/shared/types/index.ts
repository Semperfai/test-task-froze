export interface IPackaItemBase {
  name: string;
  version: string;
  description: string;
}

export interface IPackaItemDetails extends IPackaItemBase {
  npmLink: string;
  keywords: string[];
  date: string;
  author: {
    name: string;
    email: string;
  };
  maintainers: string[];
  score: number;
  searchScore: number;
}
