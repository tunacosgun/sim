import { SplitIcon } from 'lucide-react'

/**
 * Parallel tool configuration for the toolbar.
 * Defines the visual appearance of the Parallel subflow container in the toolbar.
 */
export const ParallelTool = {
  type: 'parallel',
  name: 'Parallel',
  icon: SplitIcon,
  bgColor: '#FEE12B',
  docsLink: 'https://github.com/tunacosgun/sim/blocks/parallel',
} as const
