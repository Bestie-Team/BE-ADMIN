type Provider = 'GOOGLE' | 'KAKAO' | 'APPLE';

export interface User {
  readonly id: string;
  readonly accountId: string;
  readonly name: string;
  readonly provider: Provider;
  readonly createdAt: Date;
  readonly deletedAt: Date | null;
  readonly profileImageUrl: string | null;
}
