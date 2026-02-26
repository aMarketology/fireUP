#!/usr/bin/env node
/**
 * scripts/ping-google.ts
 * Pings Google to index the updated sitemap after a deploy.
 *
 * Wire to Vercel post-deploy:
 *   In vercel.json → "build" section, or as a post-deploy webhook script.
 *   Or run manually: npx ts-node scripts/ping-google.ts
 */

const SITEMAP_URL = 'https://fireuphibachi.com/sitemap.xml';

async function pingGoogle(): Promise<void> {
  const endpoint = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;

  try {
    const res = await fetch(endpoint);
    if (res.ok) {
      console.log(`✅ Google pinged successfully — ${SITEMAP_URL}`);
      console.log(`   Status: ${res.status}`);
    } else {
      console.warn(`⚠️  Google ping returned status ${res.status}`);
    }
  } catch (err) {
    console.error('❌ Failed to ping Google:', err);
    process.exit(1);
  }
}

pingGoogle();
