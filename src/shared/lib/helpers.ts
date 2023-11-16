import { type IPackaItemBase, type IPackaItemDetails } from "../types";

export const mapPackageListBaseInfo = (
  packageList: any[],
): IPackaItemBase[] => {
  return packageList.map((item) => {
    return {
      name: item.package.name,
      version: item.package.version,
      description: item.package.description?.slice(0, 50) + "...",
    };
  });
};

export const mapPackageListDetailsInfo = (
  packageList: any[],
): IPackaItemDetails[] => {
  return packageList.map((item) => {
    const packageInfo = item.package;
    return {
      name: packageInfo.name,
      version: packageInfo.version,
      description: packageInfo.description,
      npmLink: packageInfo.links.npm,
      keywords: packageInfo.keywords || [],
      date: packageInfo.date,
      author: packageInfo.author || {},
      maintainers: packageInfo.maintainers || [],
      score: item.score.final,
      searchScore: item.searchScore,
    };
  });
};
