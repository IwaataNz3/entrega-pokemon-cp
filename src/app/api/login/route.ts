import { NextRequest, NextResponse } from 'next/server'
import { LoginBody, LoginResponse } from '@/interfaces/login.interface'


export async function POST(request: NextRequest): Promise<NextResponse<LoginResponse>> {
  try {
  
    const body: LoginBody = await request.json()
    const { login, password } = body

   
    if (!login || !password) {
      return NextResponse.json({ message: 'Login e senha são obrigatórios' }, { status: 400 })
    }

    
    if (password !== process.env.APP_PASSWORD) {
      return NextResponse.json({ message: 'Login ou senha inválidos' }, { status: 401 })
    }

    return NextResponse.json({ token: crypto.randomUUID() })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 })
  }
}
