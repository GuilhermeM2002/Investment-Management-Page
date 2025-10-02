export interface GetInvestmentResponse {
    id: number;
    userId: number;
    assetType: string;
    ticker: string;
    quantity: number;
    buyPrice: number;
    currentPrice: number;
    date: string;
}