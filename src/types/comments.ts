export type TypeUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TypeComment = {
  id: string;
  date: string;
  user: TypeUser;
  comment: string;
  rating: number;
}
