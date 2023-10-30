export default interface IAuth {
  token: string | null;
  tokenFetchSuccess: boolean;
  tokenFetchFailure: boolean;
  error: Error | null;
}
