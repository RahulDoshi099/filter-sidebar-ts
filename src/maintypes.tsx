export interface TokenMetadata {
  name: string;
  description: string;
  image: string;
  attributes: any[];
  date: string | number;
  dna: string;
  edition: number;
  compiler: string;
  kennelName?: string; //new property
}

//TODO: Add other attributes
export interface TokenInfo {
  tokenId: number;
  ownerAddress: string;
  name?: string;
  tokenFamily: string; // contract name (LottoMint1, G1-G4 etc...)
  URI?: any; //TODO: make real type
  metadata?: TokenMetadata;
  kennel?: string;
}

//TODO: Add other attributes
export interface TokenInfo {
    tokenId: number;
    ownerAddress: string;
    name?: string;
    tokenFamily: string; // contract name (LottoMint1, G1-G4 etc...)
    URI?: any; //TODO: make real type
    metadata?: TokenMetadata;
    kennel?: string;
  }