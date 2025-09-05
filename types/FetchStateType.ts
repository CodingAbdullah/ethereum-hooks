// Custom interface for working with the Fetch State
export interface FetchStateType<T = any> {
    data: T | null;
    loading: boolean;
    error: boolean;
}