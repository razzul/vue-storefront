export default interface PromotedOffersState {
  banners: {
    mainBanners: any[],
    smallBanners: any[],
    productBanners: any[]
  },
  headImage: Record<string, any>
}
