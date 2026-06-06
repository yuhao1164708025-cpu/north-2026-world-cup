# 北境杯局 · 2026 世界杯预测站

面向 2026 美加墨世界杯的赛程、球队对比、赔率来源、赛前预测和赛后复盘网站。

## 本地预览

```bash
python3 -m http.server 4173 --directory outputs
```

打开 `http://127.0.0.1:4173/`。

## 数据同步

网站始终包含一份可用的赛事快照。配置 football-data.org API Token 后，可执行：

```bash
FOOTBALL_DATA_TOKEN=your_token node scripts/sync-football-data.mjs
```

GitHub Actions 每小时运行一次同步并部署 Pages。Token 应保存为仓库 Secret `FOOTBALL_DATA_TOKEN`，不得写入前端或提交到 Git。

赔率为带时间戳的编辑快照，并非实时盘口。预测只用于赛事分析，不构成投注建议。

## 检查

```bash
node --check outputs/app.js
node --test
```

Data provided by [football-data.org](https://www.football-data.org/).
