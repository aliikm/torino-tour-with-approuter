const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL;

export async function apiFetch(
  endpoint,
  options = {}
) {

  // access token
  let accessToken =
    localStorage.getItem(
      "accessToken"
    );

  // request اولیه
  let res = await fetch(
    `${BASE_URL}${endpoint}`,
    {

      ...options,

      headers: {

        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${accessToken}`,

        ...options.headers,
      },
    }
  );

  // اگر token expire شد
  if (
    res.status === 401 ||
    res.status === 403
  ) {

    console.log(
      "Access token expired"
    );

    // refresh token
    const refreshToken =
      localStorage.getItem(
        "refreshToken"
      );

    // refresh request
    const refreshRes =
      await fetch(
        `${BASE_URL}/auth/refresh-token`,
        {
          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${refreshToken}`,
          },
        }
      );

    // refresh fail
    if (!refreshRes.ok) {

      console.log(
        "Refresh token expired"
      );

      // پاک کردن
      localStorage.removeItem(
        "accessToken"
      );

      localStorage.removeItem(
        "refreshToken"
      );

      localStorage.removeItem(
        "phone"
      );

      // logout
      window.location.href = "/";

      return;
    }

    const refreshData =
      await refreshRes.json();

    console.log(refreshData);

    // ذخیره access جدید
    localStorage.setItem(
      "accessToken",
      refreshData.accessToken
    );

    // request قبلی دوباره
    res = await fetch(
      `${BASE_URL}${endpoint}`,
      {

        ...options,

        headers: {

          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${refreshData.accessToken}`,

          ...options.headers,
        },
      }
    );
  }

  const data =
    await res.json();

  if (!res.ok) {

    throw new Error(
      data.message ||
      "خطا در درخواست"
    );
  }

  return data;
}