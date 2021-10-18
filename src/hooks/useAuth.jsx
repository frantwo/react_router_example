import { useContext } from "react";

import { authContext } from '../components/ProvideAuth'

export function useAuth() {
  return useContext(authContext);
}