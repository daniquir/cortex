import { changelogTranslations } from './changelog';

/**
 * Product / extension semver shown in the nav and footer.
 * Always follows the latest English changelog entry (no manual bump).
 */
export const PRODUCT_VERSION = changelogTranslations.en.entries[0]!.version.replace(/^v/, '');
