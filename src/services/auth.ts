export function login() {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
    response_type: "code",
    scope: "openid email profile",
    redirect_uri: import.meta.env.VITE_REDIRECT_URI
  });

  window.location.href =
    `https://${import.meta.env.VITE_COGNITO_DOMAIN}/login?${params.toString()}`;
}

export function logout() {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
    logout_uri: window.location.origin
  });

  window.location.href =
    `https://${import.meta.env.VITE_COGNITO_DOMAIN}/logout?${params.toString()}`;
}
