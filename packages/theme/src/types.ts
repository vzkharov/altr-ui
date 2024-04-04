import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

type Theme = Config['theme']
type Plugin = typeof plugin

export type { Theme, Plugin }
