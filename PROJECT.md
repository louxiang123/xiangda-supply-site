# Xiangda Supply Chain - 独立站维护指南

> 给 Accio Work 的建站上下文。其他人用 Accio Work 打开这个仓库即可接手维护。

## 项目信息

| 项 | 值 |
|----|-----|
| 网站 | https://xiangdasupply.com |
| 公司 | 金华市响达供应链管理有限公司 |
| 定位 | 金华地区 B2B 供应链服务商，免费帮国际买家对接工厂 |
| 产品品类 | 箱包、饰品、保温杯、服装袜业、玩具文具、家居五金 |
| 目标客户 | 欧美 B2B 采购商 |
| 域名 | xiangdasupply.com（Namecheap 购买） |
| GitHub | louxiang123/xiangda-supply-site |
| 部署 | Vercel（自动从 GitHub main 分支部署） |
| 成本 | 80 元/年（仅域名费，托管免费） |

## 技术架构

```
纯静态站（HTML/CSS/JS）
    ↓
GitHub 仓库
    ↓
Vercel 自动部署 → xiangdasupply.com
    ↓
Google Translate 自动多语言
    ↓
Google Search Console（已验证收录）
```

## 文件结构

```
├── index.html       # 首页（Hero + 品类卡片 + 金华优势 + 采购流程 + 询盘表单）
├── products.html    # 6 大品类产品页
├── about.html       # 关于我们 + FAQ
├── css/style.css    # 全局样式（暗碳灰+暖橙色配色）
├── js/main.js       # JS 交互
├── robots.txt       # 搜索引擎规则
├── sitemap.xml      # Google 站点地图
└── PROJECT.md       # 本文件
```

## 设计规范

- 主色：`#0f172a`（深碳灰）+ `#d97706`（暖橙）
- 标题字体：Georgia/Times serif
- 正文字体：Inter/system sans-serif
- Hero 背景：金华现代工业园区实景图（半透明遮罩保证文字可读）
- 产品图片：来自国际站真实供应商产品图，object-fit: contain

## 常见维护操作

### 1. 修改首页文案
直接编辑 `index.html` 中的文字，提交后 Vercel 自动部署。

### 2. 添加/修改产品
在 `products.html` 中对应的品类 section 里添加或修改 product-card。每个卡片结构：
```html
<div class="prod-card">
  <div class="prod-img"><img src="图片URL" alt="产品名" loading="lazy" style="width:100%;height:100%;object-fit:contain;"></div>
  <div class="prod-body">
    <h3>产品标题</h3>
    <p class="spec">产品描述</p>
    <div class="tags"><span class="tag">MOQ xxx</span><span class="tag">OEM/ODM</span></div>
    <a href="index.html#contact" class="btn-sm">Inquire</a>
  </div>
</div>
```

### 3. 改联系方式
- WhatsApp：搜索 `YOUR_NUMBER`，替换为真实号码（3 个文件）
- 邮箱：搜索 `YOUR_EMAIL`，替换为真实邮箱（`js/main.js`）

### 4. 更换 Hero 背景图
- 修改 `css/style.css` 中 `.hero` 和 `.page-hero` 的 `background` 属性里的图片 URL
- 半透明遮罩参数：`rgba(15,23,42,0.65)`

### 5. 更新 Sitemap
修改 `sitemap.xml`，确保 URL 不带 `www.` 前缀

## 给其他人的 Accio Work 提示词

新维护者用 Accio Work 打开这个仓库后，直接说：

```
帮我修改 [页面名称] 中的 [要改什么]
```

例如：
- "帮我在 products.html 的箱包品类里加一个新产品"
- "帮我把首页 hero 标题改成中文"
- "帮我把所有页面的 WhatsApp 链接换成 +8613812345678"

## 重要提醒

- 不要改文件结构，保持纯静态站
- 改完代码直接 git push，Vercel 会自动部署
- Google Search Console 已验证，Sitemap 已提交
- 不要用 WordPress 方案，成本高且不必要
