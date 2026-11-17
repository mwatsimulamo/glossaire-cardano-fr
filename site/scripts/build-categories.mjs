import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.resolve(__dirname, '../glossaire-a-z')
const outPath = path.resolve(__dirname, '../.vitepress/theme/data/categories.json')

const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()

// Aligné sur le slugify VitePress (@mdit-vue/shared) pour que les ancres #… matchent
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036f]/g

function slugify(title) {
  return title
    .normalize('NFKD')
    .replace(rCombining, '')
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/_([^_]+)_/g, '<em>$1</em>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
}

function bodyToHtml(body) {
  const blocks = body
    .replace(/\r\n/g, '\n')
    .trim()
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)

  return blocks
    .map((block) => {
      const lines = block.split('\n').map((l) => l.trim())
      if (lines.every((l) => l.startsWith('→ ['))) {
        const buttons = lines
          .map((line) => {
            const match = line.match(/^→\s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)/)
            if (!match) return ''
            return `<a class="gc-src__btn" href="${match[2]}" target="_blank" rel="noopener noreferrer">${escapeHtml(match[1])}</a>`
          })
          .filter(Boolean)
          .join('')
        return buttons ? `<div class="gc-src">${buttons}</div>` : ''
      }
      return `<p>${inlineMarkdown(lines.join(' '))}</p>`
    })
    .join('')
}

const categories = [
  { id: 'general', label: 'Blockchain générale', labelEn: 'General Blockchain' },
  { id: 'tokens-assets', label: 'Jetons et actifs', labelEn: 'Tokens & Assets' },
  { id: 'consensus-staking', label: 'Consensus et staking', labelEn: 'Consensus & Staking' },
  { id: 'smart-contracts', label: 'Contrats intelligents', labelEn: 'Smart Contracts' },
  { id: 'wallets-keys', label: 'Portefeuilles et clés', labelEn: 'Wallets & Keys' },
  { id: 'governance', label: 'Gouvernance', labelEn: 'Governance' },
  { id: 'network-protocol', label: 'Réseau et protocole', labelEn: 'Network & Protocol' }
]

const rules = [
  ['governance', [/govern/i, /drep/i, /constitution/i, /catalyst/i, /voltaire/i, /voting/i, /treasury/i, /quorum/i, /liquid democracy/i, /info action/i, /working group/i, /cip-1694/i, /committee/i, /\bchang\b/i, /plomin/i, /conway/i]],
  ['wallets-keys', [/wallet/i, /\bkey\b/i, /clés?/i, /\bseed\b/i, /bech32/i, /spending password/i, /cip-30/i, /\bkes\b/i, /genesis keys/i, /hd wallet/i, /mpc wallet/i, /address \(blockchain/i, /wallet address/i, /stake address/i]],
  ['smart-contracts', [/smart contract/i, /plutus/i, /aiken/i, /datum/i, /redeemer/i, /script/i, /eutxo/i, /\butxo\b/i, /collateral/i, /oracle/i, /hydra/i, /milkomeda/i, /uplc/i, /plinth/i, /alonzo/i, /goguen/i, /programmab/i, /reference input/i, /reference script/i, /computation layer/i, /scripting/i, /\bdapp\b/i, /zero-knowledge|zkp|zkrollup/i, /haskell/i]],
  ['consensus-staking', [/stake/i, /staking/i, /ouroboros/i, /proof of stake/i, /proof of work/i, /pool\b/i, /\bspo\b/i, /pledge/i, /delegation/i, /slot/i, /epoch/i, /reward/i, /saturation/i, /validator/i, /mining/i, /nothing-at-stake/i, /slashing/i, /\bvrf\b/i, /nakamoto/i, /a0 parameter/i, /k parameter/i, /d parameter/i, /active slot/i, /controlled stake/i, /incentive/i, /\bispo\b/i, /live stake/i, /unbonding/i, /locking period/i, /profit margin/i, /minimum pool/i, /produced blocks/i, /\bsmash\b/i, /shelley/i, /adaptive corruption/i, /bribery|grinding|long-range|posterior corruption|stake majority|stake-bleeding|sybil|eclipse/i]],
  ['tokens-assets', [/token/i, /asset/i, /\bada\b/i, /lovelace/i, /\bnft\b/i, /fungible/i, /mint/i, /\bcbdc\b/i, /stablecoin/i, /\bdjed\b/i, /\busdm\b/i, /\brwa/i, /realfi/i, /cip-25/i, /cip-68/i, /cip-113/i, /policy id/i, /babel fees/i, /securitization/i, /\bico\b/i, /\bito\b/i, /privacy coin/i, /utility token/i, /security token/i, /faucet/i, /\btvl\b/i]],
  ['network-protocol', [/network/i, /node/i, /peer/i, /\bp2p\b/i, /protocol/i, /mainnet/i, /testnet/i, /mempool/i, /pipelin/i, /layer [012]/i, /sidechain/i, /bridge/i, /\bibc\b/i, /interledger/i, /interop/i, /mithril/i, /amaru/i, /jormungandr|jörmungandr/i, /blockperf/i, /rosetta/i, /sanchonet/i, /infrastructure/i, /settlement layer/i, /networking/i, /hard fork/i, /soft fork/i, /\bfork\b/i, /leios/i, /dijkstra/i, /vasil/i, /babbage/i, /allegra/i, /\bmary\b/i, /byron/i, /basho/i, /\bcip\b/i, /\bapi\b/i, /rest api/i, /x402/i, /wanchain/i, /master node/i, /full node/i, /light node/i, /operational certificate/i, /genesis block/i, /\bblock\b/i, /transaction/i, /\bfee\b/i, /\btps\b/i, /sharding/i, /off-chain/i, /on-chain/i, /rollback/i, /van rossem/i, /input endorsers/i]],
  ['general', [/cardano\b/i, /blockchain/i, /ledger/i, /web2/i, /web3/i, /hash/i, /merkle/i, /security/i, /scalab/i, /determinism/i, /authenticity/i, /reliability/i, /performance/i, /open source/i, /use case/i, /\bama\b/i, /ambassador/i, /\baml\b/i, /\bkyc\b/i, /fatf/i, /dyor/i, /scam/i, /\bcex\b/i, /\bdex\b/i, /atomic swap/i, /legacy/i, /metadata/i, /ipfs/i, /\bdid\b/i, /\bmev\b/i, /appchain/i, /application layer/i, /architecture/i, /style guide/i, /icarus/i, /monetary expansion/i, /reserve/i, /net change/i, /\bedi\b/i, /edinburgh/i]]
]

function classify(title) {
  for (const [id, patterns] of rules) {
    if (patterns.some((re) => re.test(title))) return id
  }
  return 'general'
}

function parseTerms(letter, text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  const entries = []
  let current = null

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (current) {
        current.html = bodyToHtml(current.body)
        delete current.body
        entries.push(current)
      }
      const title = line.slice(3).trim()
      current = {
        title,
        letter,
        slug: slugify(title),
        category: classify(title),
        body: ''
      }
      continue
    }
    if (!current) continue
    if (line.startsWith('# ')) continue
    current.body += `${line}\n`
  }

  if (current) {
    current.html = bodyToHtml(current.body)
    delete current.body
    entries.push(current)
  }

  return entries
}

const terms = []
for (const f of files) {
  const letter = f.replace('.md', '')
  const text = fs.readFileSync(path.join(dir, f), 'utf8')
  terms.push(...parseTerms(letter, text))
}

const counts = Object.fromEntries(categories.map((c) => [c.id, 0]))
for (const t of terms) counts[t.category]++

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify({ categories, terms, counts }, null, 2), 'utf8')
console.log(counts)
console.log('total', terms.length)
console.log('written', outPath)
