export interface IDonationRequest {
  donated: string
  donatedBy: string
  donatedTo: string
  quantity: string
}
export interface IDonationCreated {
  donatedBy: string
  donatedTo: string
  donated: string
  createdAt: Date
}
