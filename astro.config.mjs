// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.mpak.dev',
  integrations: [
    starlight({
      title: 'mpak',
      favicon: '/favicon.ico',
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/NimbleBrainInc/mpak-cli' },
        { icon: 'discord', label: 'Discord', href: 'https://nimblebrain.ai/discord' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/nimblebraininc' },
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          },
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'What is mpak?', slug: 'index' },
            { label: 'Quickstart', slug: 'quickstart' },
          ],
        },
        {
          label: 'MCP Bundles',
          items: [
            { label: 'What is an MCP Bundle?', slug: 'bundles/what-is-mcpb' },
            { label: 'Publishing', slug: 'bundles/overview' },
            { label: 'Manifest Reference', slug: 'bundles/manifest' },
            { label: 'GitHub Action', slug: 'bundles/github-action' },
            { label: 'Multi-Platform Builds', slug: 'bundles/multi-platform' },
            { label: 'User Configuration', slug: 'bundles/user-config' },
            { label: 'Provenance', slug: 'bundles/provenance' },
          ],
        },
        {
          label: 'Skills',
          items: [
            { label: 'What are Skills?', slug: 'skills/what-are-skills' },
            { label: 'Publishing', slug: 'skills/overview' },
            { label: 'SKILL.md Reference', slug: 'skills/skill-md' },
            { label: 'GitHub Action', slug: 'skills/github-action' },
            { label: 'Monorepo Guide', slug: 'skills/monorepo-guide' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'Claude Code', slug: 'integrations/claude-code' },
            { label: 'Claude Desktop', slug: 'integrations/claude-desktop' },
            { label: 'Cursor', slug: 'integrations/cursor' },
            { label: 'VS Code', slug: 'integrations/vscode' },
          ],
        },
        {
          label: 'CLI Reference',
          items: [
            { label: 'Installation', slug: 'cli/install' },
            { label: 'search', slug: 'cli/search' },
            { label: 'show', slug: 'cli/show' },
            { label: 'pull', slug: 'cli/pull' },
            { label: 'run', slug: 'cli/run' },
            { label: 'config', slug: 'cli/config' },
          ],
        },
      ],
      components: {
        Header: './src/components/Header.astro',
      },
    }),
  ],
});
