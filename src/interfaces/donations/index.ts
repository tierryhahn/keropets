export interface IDonationRequest {
  type: string
  donatedBy: string
  donatedTo: string
  quantity: string
}
export interface IDonationCreated {
  user: string
  ong: string
  type: string
  quantity: string
}
