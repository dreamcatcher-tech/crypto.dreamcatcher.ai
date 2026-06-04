# DNS rollback snapshot before crypto.dreamcatcher.ai CNAME

UTC timestamp: 20260604T051546Z

Provider/API snapshot: `dreamcatcher.ai-provider-before-20260604T051546Z.json`
Public resolver snapshot: `dreamcatcher.ai-public-before-20260604T051546Z.json`

## Intended change

Add or replace only the web record for:

- `crypto.dreamcatcher.ai` `CNAME` → `dreamcatcher-tech.github.io`

## Existing provider records for crypto host before change

```json
[]
```

## Rollback instructions

If the new crypto site cutover must be rolled back:

1. Re-read Porkbun DNS records for `dreamcatcher.ai`.
2. Delete the `crypto.dreamcatcher.ai` CNAME record created for GitHub Pages.
3. Recreate the exact records listed above if any existed before the change.
4. Preserve all unrelated records, especially MX, SPF, DKIM, DMARC, verification TXT, apex, `www`, and other subdomain records.
5. Verify provider DNS, Cloudflare/Google public DNS, and service behavior after rollback.
