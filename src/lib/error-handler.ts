export const safeAsync = async <T>(
  promise: Promise<T>,
  fallback: T,
  errorMessage?: string
): Promise<T> => {
  try {
    return await promise;
  } catch (error) {
    console.error(errorMessage || 'Operation failed:', error);
    return fallback;
  }
};

export const retryOperation = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error | null = null;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
      }
    }
  }
  
  console.error('Operation failed after retries:', lastError);
  throw lastError;
};

export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch (error) {
    console.error('JSON parse error:', error);
    return fallback;
  }
};

export const safeLocalStorage = {
  get: <T>(key: string, fallback: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (error) {
      console.error('LocalStorage get error:', error);
      return fallback;
    }
  },
  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('LocalStorage set error:', error);
    }
  }
};

export const ignoreErrors = <T>(fn: () => T, fallback: T): T => {
  try {
    return fn();
  } catch (error) {
    console.error('Operation failed:', error);
    return fallback;
  }
}; 