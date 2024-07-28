export async function handleFetch<T>(
  fetchFn: () => Promise<Response>
): Promise<{
  data: T | undefined;
  error: string | undefined;
}> {
  try {
    const res = await fetchFn();

    if (!res.ok) {
      const errorData: { error: string } = await res.json();

      const errorText = `${res.status} - ${errorData.error}`;

      return { data: undefined, error: errorText };
    }

    const data: T = await res.json();

    return { data, error: undefined };
  } catch (err) {
    console.error(err);

    if (err instanceof Error) {
      return { data: undefined, error: err.message };
    } else {
      return {
        data: undefined,
        error: 'Something went wrong. Check error logs in console.',
      };
    }
  }
}
