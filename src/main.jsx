import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { usePortfolioMotion } from './usePortfolioMotion';

const photo = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const douyinAssets = '/assets/douyin/';
const projectImage = p => p.cover || photo(p.image);
const works = Array.from({length: 7}, (_, i) => ({ src: douyinAssets + 'work-0' + (i + 1) + '.jpg', title: i < 3 ? '街巷日光 · 图文作品 ' + (i + 1) : '林间光影 · 图文作品 ' + (i - 2) }));
function DouyinShowcase() {
  return <div className="douyin-case" ><div className="case-heading"><div><span className="eyebrow">DOUYIN / PROJECT 01</span><h3>内容的表达，也有数据的回响。</h3><p>女性向图文账号 · 独立完成策划、AI 辅助生产、图文制作与运营复盘</p></div><span className="case-index">01</span></div>
    <div className="case-metrics">{[['2109','账号粉丝'],['3.0万','账号获赞'],['51.86万','展示作品最高播放'],['2.25万','该作品点赞']].map(([n,t]) => <div key={t}><strong>{n}</strong><span>{t}</span></div>)}</div>
    <p className="evidence-note">数据为所提供截图中的记录；单条涨粉属于作品维度，与账号当前粉丝数为不同口径。</p>
    <div className="proof-grid">{[['account.jpg','账号主页','2109 粉丝 / 3.0万获赞'],['analytics-01.jpg','作品数据 · 2026.03.20','4.84万播放 / 涨粉503 / 点赞3603'],['analytics-02.jpg','作品数据 · 2026.03.21','51.86万播放 / 涨粉2433 / 点赞2.25万']].map(([file,title,caption]) => <figure key={file}><a href={douyinAssets+file} target="_blank" rel="noreferrer" aria-label={'查看原图：'+title}><img src={douyinAssets+file} alt={title+'，'+caption} loading="lazy"/></a><figcaption><strong>{title}</strong><span>{caption}</span></figcaption></figure>)}</div>
    <div className="gallery-heading"><h4>精选图文视觉</h4><span>07 IMAGES / 点击查看完整原图 ↗</span></div><div className="douyin-gallery">{works.map((work,i) => <figure key={work.src}><a href={work.src} target="_blank" rel="noreferrer" aria-label={'查看原图：'+work.title}><img src={work.src} alt={work.title} loading="lazy"/><span>↗</span></a><figcaption><span>0{i+1}</span>{work.title}</figcaption></figure>)}</div>
  </div>;
}
function WechatShowcase() {
  return <div className="douyin-case wechat-case"><div className="case-heading"><div><span className="eyebrow">WECHAT / PROJECT 02</span><h3>从一个头像，连接更多同好。</h3><p>xw头像分享 · 素材整理 / 图文排版 / 标题封面优化 / 发布运营与数据复盘</p></div><span className="case-index">02</span></div>
    <div className="case-metrics">{[['11,944','账号关注人数'],['1,176,235','单篇阅读'],['26,907','单篇分享'],['11,149','单篇点赞']].map(([n,t]) => <div key={t}><strong>{n}</strong><span>{t}</span></div>)}</div>
    <p className="evidence-note">代表图文《拿去当头像》· 发布于 2025.05.09。后台截图另记录推荐 5,536 次、留言 1,117 条。文章前台与后台为不同截图记录，数值存在差异；本页成果数据采用后台详细统计，关注人数采用账号截图。</p>
    <div className="proof-grid">{[['account.jpg','账号主页 · xw头像分享','11,944 人关注'],['article.jpg','代表图文 · 拿去当头像','前台显示阅读 10万+，展示文章内容与互动'],['analytics.jpg','图文后台 · 详细数据','阅读 1,176,235 / 分享 26,907 / 点赞 11,149']].map(([file,title,caption]) => <figure key={file}><a href={'/assets/wechat/'+file} target="_blank" rel="noreferrer" aria-label={'查看原图：'+title}><img src={'/assets/wechat/'+file} alt={title+'，'+caption} loading="lazy"/></a><figcaption><strong>{title}</strong><span>{caption}</span></figcaption></figure>)}</div>
  </div>;
}
const projects = [
  {
    "title": "女性向图文 · 抖音独立运营",
    "cover": "/assets/douyin/work-03.jpg",
    "isDouyin": true,
    "en": "HER PERSPECTIVE",
    "type": "抖音 / 女性向图文 / AI 辅助创作",
    "image": "photo-1519608487953-e999c86e7455",
    "result": "2109 粉丝 · 单条播放 51.86万 · 点赞 2.25万",
    "desc": "独立运营女性向图文抖音号，从账号定位、选题策划到 AI 辅助文案与视觉素材生产，完成图文制作、发布运营与数据复盘。跟踪播放量与涨粉表现，分析爆款内容特征并持续迭代选题。",
    "tools": "AI 文案 / 图像生成工具、图文排版工具、抖音创作者后台"
  },
  {
    "title": "xw头像分享 · 微信公众号运营",
    "cover": "/assets/wechat/article.jpg",
    "isWechat": true,
    "en": "A LITTLE IDENTITY",
    "type": "微信公众号 / 头像分享 / 图文运营",
    "image": "photo-1490312278390-ab64016e0aa9",
    "result": "11,944 人关注 · 单篇阅读 117.62万 · 分享 26,907",
    "desc": "独立运营微信公众号头像分享账号，负责素材整理、图文排版、标题封面优化与日常运营。跟踪阅读量与关注数据，分析高表现内容并优化后续选题。",
    "tools": "AI 文案 / 图像生成工具、图文排版工具、微信公众号后台数据分析"
  },
  {
    "title": "从灵感到发布 · 内容生产流程",
    "methodSteps": [{ "title": "1. 定位", "text": "给谁看，看什么，为什么看。" }, { "title": "2. 选题来源", "text": "主要关注评论区的高赞内容，以及同类账号最近的爆款，从中提炼选题方向，再结合自己的账号定位做变化与延展。" }, { "title": "3. 标题筛选", "text": "先用 AI 辅助生成和初选标题，再人工判断：标题能否引起受众共鸣，是否有吸引力，能不能让人愿意点进来看。" }, { "title": "4. 数据复盘", "text": "内容发布后，重点观察播放、互动与关注数据，复盘哪些选题和标题能带来观看、互动及关注，并据此调整后续内容。" }],
    "en": "IDEA TO IMPACT",
    "type": "同一运营项目 / 方法沉淀",
    "image": "photo-1464822759023-fed622ff2c3b",
    "result": "从 0 到 1 · 可复用的内容创作方法",
    "desc": "在两个账号的独立运营中，建立账号定位、选题策划、AI 辅助内容生产、图文排版、发布与数据复盘流程。通过素材整理和复用，提升稳定更新效率。本卡片展示项目方法沉淀。",
    "tools": "AI 文案 / 图像生成工具、图文排版工具、抖音与微信公众号后台"
  }
];
function App() {
  usePortfolioMotion();
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(true);
  const [notice, setNotice] = useState('');

  const contact = () => { window.location.href = 'mailto:1304593596@qq.com'; };
  React.useEffect(() => { if (!active) return; const fn = e => { if (e.key === 'Escape') setActive(null); }; document.addEventListener('keydown', fn); const old = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = old; }; }, [active]);
  return <>
    <div className="opening" aria-hidden="true"><div className="opening-name"><span>WU XINGWEI</span><span>PORTFOLIO®</span></div><div className="opening-rule"/><span className="opening-caption">CONTENT / CULTURE / CONNECTION</span></div>
    <header className="header"><a className="logo" href="#home" aria-label="返回首页">c<span>®</span></a><nav aria-label="主导航"><a href="#about">关于我</a><a href="#work">精选作品</a><a href="#expertise">创作优势</a></nav><a className="nav-contact" href="#contact">一起合作 <span>↗</span></a></header>
    <main>
      <section className="hero" id="home">
        <div className={'photo-stream' + (playing ? '' : ' is-paused')} aria-hidden="true">{[0,1,2].map(column => <div className="photo-stream-column" key={column}><div className="photo-stream-track">{[0,1].map(copy => <div className="photo-stream-set" key={copy}>{works.map((_,i) => { const work = works[(i + column * 2) % works.length]; return <div className="stream-print" key={i}><img src={work.src} alt=""/><span>CREATOR / FRAME 0{(i + column * 2) % works.length + 1}</span></div>; })}</div>)}</div></div>)}</div>
        <div className="hero-shade"/>
        <div className="hero-content container"><div className="eyebrow"><i/> INDEPENDENT CONTENT CREATOR</div><h1 aria-label="吴兴伟个人作品集"><span className="hero-title-line"><span>吴兴伟</span></span><span className="hero-title-line"><span><span className="outline">个人作品集</span><span className="lime">。</span></span></span></h1><div className="hero-bottom"><p>专注女性向图文与头像分享，用内容连接共鸣。<br/>从选题、AI 辅助创作到运营复盘，独立完成。</p><a className="circle-link" href="#work" aria-label="探索我的作品">↗</a></div></div>
        <div className="hero-foot container"><a href="#about">SCROLL TO EXPLORE <span>↓</span></a><span>内容策划 / AI 创作 / 账号运营</span><button onClick={() => setPlaying(!playing)} aria-pressed={!playing} aria-label={playing ? '暂停背景动画' : '播放背景动画'}>{playing ? 'Ⅱ' : '▶'} <span>{playing ? 'PAUSE' : 'PLAY'}</span></button></div>
      </section>
      <section className="about section container" id="about"><div className="section-label"><span>01 / ABOUT ME</span><span>保持好奇，持续创作</span></div><div className="motion-display" aria-hidden="true"><span>THE CREATOR</span></div><div className="about-grid"><div className="portrait"><img src={photo('photo-1472396961693-142e6e269027', 900)} alt="自然光中的森林，人物照片待替换" loading="lazy"/><span>YOUR PORTRAIT HERE ↗</span><div className="portrait-label">以自己的视角<br/>观察这个世界。</div></div><div className="about-copy"><div className="eyebrow">HELLO, I'M A CREATOR.</div><h2>内容是表达，<br/>也是一种<span className="muted">连接。</span></h2><p>你好，我是一名独立新媒体内容创作者，专注女性向图文与头像分享，独立运营抖音账号与微信公众号。</p><p>从账号定位、选题策划、AI 辅助文案与视觉素材生产，到图文制作、发布运营和数据复盘，我跑通了从 0 到 1 的内容创作流程，并持续沉淀可复用的方法。</p><div className="placeholder-note">独立运营经历 · 抖音 / 微信公众号</div><div className="about-contact"><span>独立创作者 / 开放合作</span><a href="mailto:1304593596@qq.com">1304593596@qq.com ↗</a></div><div className="stats">{[['2109','抖音粉丝（截图记录）'],['11,944','公众号关注（截图记录）'],['117.62万','公众号单篇阅读']].map(([n,t]) => <div key={t}><strong>{n}</strong><span>{t}</span></div>)}</div><small className="data-note">抖音单条播放 51.86万 · 公众号单篇阅读 1,176,235 · 数据来自提供的截图</small></div></div></section>
      <section className="work section container" id="work"><div className="section-label"><span>02 / SELECTED WORK</span><span>用作品，介绍自己</span></div><div className="motion-display" aria-hidden="true"><span>SELECTED WORK</span></div><div className="section-heading"><h2>从 0 到 1。<br/><span className="muted">让内容生长。</span></h2><p>两个独立运营账号，一套持续迭代的创作方法。<br/>从内容表达，到真实的阅读与关注。</p></div><div className="project-grid">{projects.map((p,i) => <button className={`project project-${i}`} key={p.en} onClick={() => setActive(p)}><div className="project-image"><img src={projectImage(p)} alt={p.title} loading="lazy"/><span className="project-tag">{i === 2 ? '方法沉淀' : '账号项目'} · 0{i+1}</span><span className="project-arrow">↗</span><span className="project-art-title">{p.en}</span></div><div className="project-meta"><div><h3>{p.title}</h3><span>{p.type}</span><p className="project-result">{p.result}</p></div><span>VIEW PROJECT ↗</span></div></button>)}</div><DouyinShowcase/><WechatShowcase/><p className="demo-note">两个账号项目均已收录真实截图；方法沉淀卡片封面为氛围示意图。</p></section>
      <section className="expertise section container" id="expertise"><div className="section-label"><span>03 / WHAT I BRING</span><span>从选题到复盘</span></div><div className="motion-display" aria-hidden="true"><span>MY EXPERTISE</span></div><div className="section-heading"><h2>让内容有质感，<br/>也有<span className="muted">影响力。</span></h2><p>理解内容需求，也关注发布后的反馈。<br/>在创作与数据之间，持续优化表达。</p></div><div className="ability-grid">{[['◎','定位与选题','CONTENT STRATEGY','围绕女性向与头像分享内容完成账号定位、选题策划，根据爆款特征迭代方向。'],['⌁','AI 辅助创作','AI-ASSISTED CREATION','使用 AI 工具辅助选题、文案与视觉素材生产，沉淀可复用的内容创作方法。'],['▧','图文制作','EDITORIAL & DESIGN','整理素材，完成图文排版、标题与封面优化，建立素材复用流程，支持稳定更新。'],['↗','运营与复盘','OPERATIONS & INSIGHTS','独立完成日常发布，跟踪播放、阅读与关注数据，分析内容表现并调整选题。']].map(([icon,title,en,desc],i) => <article className="ability" key={en}><div className="ability-top"><span>{icon}</span><small>0{i+1}</small></div><h3>{title}</h3><small>{en}</small><p>{desc}</p></article>)}</div><p className="demo-note">常用工具 / AI 文案与图像生成工具 · 图文排版工具 · 抖音创作者后台 · 微信公众号后台</p></section>
      <section className="contact" id="contact"><div className="container contact-inner"><div className="section-label"><span>04 / GET IN TOUCH</span><span><i/> OPEN FOR COLLABORATION</span></div><div className="motion-display" aria-hidden="true"><span>LET’S TALK</span></div><p className="contact-intro">好故事，往往从一次对话开始。</p><h2>下一个精彩，<br/>一起<span className="serif">创造。</span><a href="#contact" onClick={e => {e.preventDefault();contact();}} aria-label="联系创作者">↗</a></h2><div className="contact-row"><button onClick={contact}>聊聊你的想法 <span>↗</span></button><div><span>EMAIL / 联系邮箱</span><p><a href="mailto:1304593596@qq.com">1304593596@qq.com</a></p></div><span className="contact-caption">有趣的项目 / 品牌合作 / 创意交流</span></div><footer><a className="footer-brand" href="#home">CREATOR<span>®</span></a><span>© {new Date().getFullYear()} CREATOR. 用内容，留下印记。</span><a href="#home">BACK TO TOP ↑</a></footer></div></section>
    </main>
    {notice && <div className="toast" role="status">{notice}<button onClick={() => setNotice('')} aria-label="关闭提示">×</button></div>}
    {active && <div className="modal-backdrop" onClick={() => setActive(null)}><section className="modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={active.title}><button autoFocus className="modal-close" onClick={() => setActive(null)} aria-label="关闭项目">×</button><img src={projectImage(active)} alt={active.title}/><div className="modal-copy"><span className="eyebrow">PROJECT EXPERIENCE / 项目经历</span><h2>{active.title}</h2><p className="modal-result">{active.result}</p><p>{active.desc}</p>{active.methodSteps && <div className="method-steps">{active.methodSteps.map(step => <div key={step.title}><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>}<p className="muted">使用工具：{active.tools}</p>{active.isDouyin ? <><small className="demo-note">封面与画廊均为提供的项目素材，点击图片可查看完整原图。</small><DouyinShowcase/></> : active.isWechat ? <WechatShowcase/> : <small className="demo-note">封面为氛围示意图，作品链接待补充。</small>}</div></section></div>}
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
