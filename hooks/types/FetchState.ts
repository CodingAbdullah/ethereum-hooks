// Custom interface for working with the Fetch State
export interface FetchState<T = any> {
    data: T | null;
    loading: boolean;
    error: boolean;
}
