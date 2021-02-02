import { NestApp } from '@/main/config/frameworks/nestjs/app'

export const nestApp = async () => {
  const nestServerApp = await NestApp

  nestServerApp.setGlobalPrefix('/api')

  return nestServerApp
}
