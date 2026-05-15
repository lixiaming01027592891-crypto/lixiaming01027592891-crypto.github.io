
# 宇涵居家照護網站 - 醫療安全合規修復報告

## 修復總覽

| 項目 | 數值 |
|------|------|
| 掃描文件總數 | 36 個 .astro 頁面 |
| 風險文件數 | 30 個 |
| 總替換次數 | **114 處** |
| 殘留風險 | **0 處** |
| 構建結果 | ✅ 36 頁面全部成功 |

---

## 五大風險類別修復明細

### 一、【醫療行為邊界】⚠️ 高風險

| 風險用語 | 安全替換 | 替換次數 |
|----------|----------|----------|
| 換藥 | 傷口敷料更換（依醫囑） | 14 |
| 傷口護理 | 傷口觀察與清潔照護 | 24 |
| 醫療照護 | 照護服務 | 14 |
| 鼻胃管 | 管灌飲食協助 | 3 |
| 導尿 | 排泄照護協助 | 2 |
| 治療陪同 | 回診陪同 | 1 |
| 治療計畫 | 醫療建議 | 2 |
| **小計** | | **60 處** |

> 醫療行為邊界是高風險類別，涉及「換藥、鼻胃管、導尿」等屬於護理人員或醫療專業人員才能執行的行為。看護人員只能「協助」而非「執行」，因此用語必須明確區分角色邊界。

---

### 二、【絕對化用語】⚠️ 中風險

| 風險用語 | 安全替換 | 替換次數 |
|----------|----------|----------|
| 最適合的 | 適合的 | 20 |
| 最適合 | 適合 | 13 |
| 最優質 | 優質 | 2 |
| 最貼心 | 貼心 | 4 |
| 最安心 | 安心 | 1 |
| 最佳選擇 | 優質選擇 | 1 |
| **小計** | | **41 處** |

> 絕對化用語違反《公平交易法》第21條，屬於誇大不實廣告。醫療照護服務更不應使用「最適合」「最優質」等無法客觀驗證的宣稱。

---

### 三、【復健/治療風險】⚠️ 中風險

| 風險用語 | 安全替換 | 替換次數 |
|----------|----------|----------|
| 加速恢復 | 支持恢復過程 | 1 |
| 促進血液循環 | 活動身體以維持循環 | 2 |
| 加速傷口癒合 | 支持傷口恢復 | 2 |
| **小計** | | **5 處** |

> 「加速恢復」「促進血液循環」「加速傷口癒合」屬於療效宣稱，暗示看護服務具有醫療治療效果，可能觸犯《醫療法》第84條及《消費者保護法》。

---

### 四、【未確認資訊】⚠️ 低風險

| 風險用語 | 安全替換 | 替換次數 |
|----------|----------|----------|
| 符合長照2.0補助資格者，可申請政府補助以減輕負擔 | 符合長照2.0補助資格者，可向各縣市長期照顧管理中心申請補助 | 1 |
| **小計** | | **1 處** |

> 政府補助資訊必須精確，需引導用戶向官方單位確認，避免誤導。

---

### 五、【效果承諾】⚠️ 中風險

| 風險用語 | 安全替換 | 替換次數 |
|----------|----------|----------|
| 順利康復 | 安心休養 | 7 |
| **小計** | | **7 處** |

> 「順利康復」暗示對恢復結果的承諾，屬於醫療效果保證，應改為描述性用語。

---

## 受影響文件清單（30 個）

### 核心頁面
- `src/pages/index.astro` - 首頁
- `src/pages/about/index.astro` - 關於我們
- `src/pages/faq/index.astro` - 常見問題

### 服務頁面
- `src/pages/services/index.astro` - 服務總覽
- `src/pages/services/home-care.astro` - 居家照護
- `src/pages/services/hospital-care.astro` - 醫院看護
- `src/pages/services/post-surgery.astro` - 術後照護
- `src/pages/services/elderly-care.astro` - 長者照護
- `src/pages/services/temporary-care.astro` - 臨時看護

### 地區頁面
- `src/pages/areas/index.astro` - 地區總覽
- `src/pages/areas/xinxing.astro` - 新興區
- `src/pages/areas/lingya.astro` - 苓雅區
- `src/pages/areas/zuoying.astro` - 左營區
- `src/pages/areas/gushan.astro` - 鼓山區
- `src/pages/areas/sanmin.astro` - 三民區
- `src/pages/areas/cianjhen.astro` - 前鎮區
- `src/pages/areas/nanzih.astro` - 楠梓區
- `src/pages/areas/siaogang.astro` - 小港區

### 部落格文章
- `src/pages/blog/index.astro` - 部落格首頁
- `src/pages/blog/post-surgery-care.astro` - 術後照護指南
- `src/pages/blog/bed-sore-prevention.astro` - 褥瘡預防
- `src/pages/blog/dementia-care-tips.astro` - 失智症照護
- `src/pages/blog/foreign-caregiver-gap.astro` - 外籍看護空窗期
- `src/pages/blog/hospital-vs-home.astro` - 醫院vs居家看護
- `src/pages/blog/ltc-4-packages.astro` - 長照四包錢
- `src/pages/blog/night-care.astro` - 夜間照護
- `src/pages/blog/finding-caregiver.astro` - 找看護

### 指南頁面
- `src/pages/guide/pricing.astro` - 費用指南
- `src/pages/guide/how-to-choose.astro` - 選擇指南

### 見證頁面
- `src/pages/testimonials/index.astro` - 客戶見證

---

## 額外修復項目

| 問題 | 修復方式 |
|------|----------|
| index.astro frontmatter JSX SVG | 改為字符串 + Fragment set:html |
| MainLayout canonicalURL 類型錯誤 | 添加 String() 強制轉換 |
| esbuild 二進制權限 | 複製到 /tmp 並設置執行權限 |

---

## 相關法規依據

1. **《醫療法》第84條** - 非醫療機構不得為醫療廣告
2. **《公平交易法》第21條** - 禁止虛偽不實或引人錯誤之表示
3. **《消費者保護法》第22條** - 廣告內容真實責任
4. **《長期照顧服務法》** - 照服員不得執行醫療行為

---

*報告生成時間: 2025-01-15*
*修復批次: 全站醫療安全合規修復*
