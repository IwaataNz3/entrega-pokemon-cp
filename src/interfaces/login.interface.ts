
export interface LoginBody {
  login: string
  password: string
}


export type LoginResponse = {
  token?: string
  message?: string
}
