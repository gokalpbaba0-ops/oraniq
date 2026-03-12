# OranIQ — Cloudflare Pages Kurulum Rehberi

## Klasör Yapısı
```
orankiq/
├── index.html          ← Ana uygulama
├── functions/
│   └── api/
│       └── analyze.js  ← Güvenli API proxy (API anahtarını gizler)
└── README.md
```

## Adım Adım Kurulum (30 dakika, tamamen ücretsiz)

### 1. GitHub Hesabı Aç
- github.com → Sign up (ücretsiz)

### 2. Yeni Repo Oluştur
- github.com/new
- Repository name: `orankiq`
- Public seç
- Create repository

### 3. Dosyaları Yükle
GitHub sayfasında "uploading an existing file" linkine tıkla.
Bu 3 dosyayı sürükle bırak:
- index.html
- functions/api/analyze.js  (önce functions/api/ klasörünü oluşturman gerekebilir)

### 4. Cloudflare Hesabı Aç
- cloudflare.com → Sign up (ücretsiz)
- E-posta doğrula

### 5. Pages Projesi Oluştur
- Sol menü → Workers & Pages
- Create application → Pages → Connect to Git
- GitHub hesabını bağla
- `orankiq` reposunu seç → Begin setup

### 6. Build Ayarları
- Framework preset: None
- Build command: (boş bırak)
- Build output directory: / (sadece slash)
- Save and Deploy

### 7. API Anahtarını Ekle (ÇOK ÖNEMLİ)
Deploy bittikten sonra:
- Settings → Environment variables → Add variable
- Variable name: `ANTHROPIC_API_KEY`
- Value: `sk-ant-api03-...` (senin Anthropic anahtarın)
- Save

Sonra: Deployments → en üstteki → "Retry deployment"

### 8. Bitti!
Cloudflare sana şu formatta bir link verir:
`orankiq.pages.dev`

Bu linki arkadaşlarınla paylaş — hepsi kullanabilir.

---

## Anthropic API Anahtarı Nereden Alınır?
1. console.anthropic.com → Sign up (ücretsiz)
2. API Keys → Create Key
3. Anahtarı kopyala (sk-ant-... ile başlar)
4. console.anthropic.com/settings/billing → $5 kredi yükle
   (10 arkadaş aylarca kullanır, bitmez)

## Maliyet
- Cloudflare hosting: TAMAMEN ÜCRETSİZ
- Anthropic API: Kullandıkça öde
  - Her AI analizi tıklaması ≈ 0.03 TL
  - 10 arkadaş günde 20 analiz = ayda ~6 TL
