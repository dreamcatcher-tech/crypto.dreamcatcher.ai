# DNS post-change verification for crypto.dreamcatcher.ai CNAME

UTC timestamp: 20260604T051916Z

Provider/API snapshot: `dreamcatcher.ai-provider-after-crypto-cname-20260604T051916Z.json`
Public resolver snapshot: `dreamcatcher.ai-public-after-crypto-cname-20260604T051916Z.json`
Service evidence: `dreamcatcher.ai-service-after-crypto-cname-20260604T051916Z.json`

## Intended record

- `crypto.dreamcatcher.ai` `CNAME` → `dreamcatcher-tech.github.io`

## Provider verification

Matching Porkbun CNAME records:

```json
[
  {
    "content": "dreamcatcher-tech.github.io",
    "id": "552878789",
    "name": "crypto.dreamcatcher.ai",
    "notes": "",
    "prio": "0",
    "ttl": "600",
    "type": "CNAME"
  }
]
```

## Public resolver verification

Cloudflare CNAME answer:

```json
[
  {
    "TTL": 600,
    "data": "dreamcatcher-tech.github.io.",
    "name": "crypto.dreamcatcher.ai",
    "type": 5
  }
]
```

Google CNAME answer:

```json
[
  {
    "TTL": 600,
    "data": "dreamcatcher-tech.github.io.",
    "name": "crypto.dreamcatcher.ai.",
    "type": 5
  }
]
```

## Service verification

HTTP checks to `http://crypto.dreamcatcher.ai/`, the Reveal runner, and the raw Markdown deck returned HTTP 200. The homepage and raw deck samples contained the expected crypto slide markers.

GitHub Pages state at verification time:

```json
{
  "build_type": "workflow",
  "cname": "crypto.dreamcatcher.ai",
  "html_url": "http://crypto.dreamcatcher.ai/",
  "https_certificate": null,
  "https_enforced": false,
  "status": null
}
```

## Pending follow-up

GitHub Pages HTTPS is not enforced yet. This is expected until GitHub issues the custom-domain certificate after DNS is visible. Keep using `http://crypto.dreamcatcher.ai/` until the certificate is approved, then enforce HTTPS.
