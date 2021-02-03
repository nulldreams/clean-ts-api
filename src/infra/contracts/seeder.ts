export interface Seeder {
  run: () => Promise<void>
  hasTable?: () => Promise<boolean>
}
