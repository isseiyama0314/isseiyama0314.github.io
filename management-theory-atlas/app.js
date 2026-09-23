import { entries, fields } from './content.js';

const main = document.querySelector('#main');
const byId = new Map(entries.map(entry => [entry.id, entry]));
const kinds = ['Theory', 'Concept', 'Paper', 'Debate'];
const kindJa = { Theory: '理論・視点', Concept: '概念・現象', Paper: '論文・書籍', Debate: '論点' };
const safe = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const url = value => /^https:\/\//.test(value) ? safe(value) : '#/';
const path = id => `#/entry/${encodeURIComponent(id)}`;
const browse = (key, value) => `#/explore?${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

function readRoute() {
  const raw = location.hash.slice(1) || '/';
  const [pathname, query = ''] = raw.split('?');
  return { pathname, params: new URLSearchParams(query) };
}

function card(entry, compact = false) {
  return `<a class="entry-card ${compact ? 'compact' : ''}" href="${path(entry.id)}">
    <div class="card-top"><span class="eyebrow">${safe(entry.kind)}</span><span class="arrow" aria-hidden="true">↗</span></div>
    <h3>${safe(entry.title)}</h3><p class="jp-title">${safe(entry.japanese)}</p>
    ${compact ? '' : `<p class="card-summary">${safe(entry.summary)}</p>`}
    <div class="card-bottom"><span>${safe(entry.fields[0])}</span><span>${safe(entry.type)}</span></div>
  </a>`;
}

function renderHome() {
  const featured = ['sensemaking', 'structural-holes', 'exploration-exploitation'].map(id => byId.get(id));
  main.innerHTML = `<section class="hero wrap">
    <div class="hero-copy"><div class="kicker"><span class="line"></span> THE OPEN ATLAS OF MANAGEMENT IDEAS</div>
      <h1>経営学を、<br><em>問い</em>から歩く。</h1>
      <p>理論、概念、論文、そして未解決の論点へ。<br>分野を横断しながら、考え方のつながりを見つける場所。</p>
      <a class="primary-link" href="#/explore">アトラスを探索する <span aria-hidden="true">↗</span></a>
    </div>
    <div class="hero-visual" aria-hidden="true"><div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div><div class="axis vertical"></div><div class="axis horizontal"></div><span class="dot d1"></span><span class="dot d2"></span><span class="dot d3"></span><span class="dot d4"></span><span class="maplabel label-a">IDEAS</span><span class="maplabel label-b">STRUCTURE</span><span class="maplabel label-c">ACTION</span><span class="mapcenter">MTA<br><small>THEORY MAP</small></span></div>
  </section>
  <section class="search-section wrap" aria-label="全件検索"><div class="search-box"><span aria-hidden="true">⌕</span><input id="home-search" type="search" placeholder="理論、論文、問いを検索" aria-label="理論、論文、問いを検索"><kbd>/</kbd><button id="home-search-button" type="button">検索 <span aria-hidden="true">→</span></button></div>
    <div class="search-hints">たとえば <a href="${browse('q', 'アイデア')}">アイデアはどこから生まれる？</a><a href="${browse('q', '組織')}">組織はどう学ぶ？</a></div></section>
  <section class="browse-strip"><div class="wrap browse-inner"><div><span class="eyebrow">BROWSE THE ATLAS</span><h2>どこから探しますか。</h2></div><div class="browse-options">${kinds.map((kind, i) => `<a href="${browse('kind', kind)}"><span class="option-num">0${i + 1}</span><span>${safe(kindJa[kind])}<small>${kind}</small></span><span aria-hidden="true">↗</span></a>`).join('')}</div></div></section>
  <section class="wrap section"><div class="section-heading"><div><span class="eyebrow">CURATED STARTING POINTS</span><h2>入口となる理論</h2></div><a class="text-link" href="${browse('kind', 'Theory')}">すべての理論を見る ↗</a></div><div class="card-grid">${featured.map(e => card(e)).join('')}</div></section>
  <section class="wrap section fields-section"><div class="section-heading"><div><span class="eyebrow">CROSS-DISCIPLINARY</span><h2>研究分野から探す</h2></div><span class="section-note">ひとつの理論は複数分野に属します。</span></div><div class="field-list">${fields.map((field, i) => `<a href="${browse('field', field)}"><span>${String(i+1).padStart(2,'0')}</span>${safe(field)}<span aria-hidden="true">↗</span></a>`).join('')}</div></section>
  <section class="closing"><div class="wrap"><span class="eyebrow">A LIVING REFERENCE</span><h2>理論の名前を覚えるより、<br>理論が<em>何を説明するか</em>を知る。</h2><a class="primary-link" href="#/explore">問いから探してみる <span aria-hidden="true">↗</span></a></div></section>`;
  const input = document.querySelector('#home-search');
  const go = () => { location.hash = browse('q', input.value.trim()); };
  input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  document.querySelector('#home-search-button').addEventListener('click', go);
}

function renderExplore(params) {
  const q = params.get('q') || '';
  const selectedKind = params.get('kind') || '';
  const selectedField = params.get('field') || '';
  const selectedFamily = params.get('family') || '';
  const selectedLevel = params.get('level') || '';
  main.innerHTML = `<div class="wrap explorer"><div class="page-intro"><span class="eyebrow">EXPLORE / INDEX</span><h1>アトラスを探す。</h1><p>名称だけでなく、説明したい現象、分野、分析単位から探せます。</p></div>
    <div class="explore-layout"><aside class="filters"><div class="filter-group"><strong>種類</strong><div class="filter-pills" id="kind-filters"></div></div><div class="filter-group"><label for="field-filter">研究分野</label><select id="field-filter"><option value="">すべての分野</option>${fields.map(f => `<option value="${safe(f)}" ${selectedField === f ? 'selected' : ''}>${safe(f)}</option>`).join('')}</select></div><div class="filter-group"><label for="family-filter">理論系譜</label><select id="family-filter"><option value="">すべての系譜</option>${[...new Set(entries.flatMap(e => e.family))].sort().map(f => `<option value="${safe(f)}" ${selectedFamily === f ? 'selected' : ''}>${safe(f)}</option>`).join('')}</select></div><div class="filter-group"><label for="level-filter">分析単位</label><select id="level-filter"><option value="">すべての単位</option>${[...new Set(entries.flatMap(e => e.levels))].sort().map(f => `<option value="${safe(f)}" ${selectedLevel === f ? 'selected' : ''}>${safe(f)}</option>`).join('')}</select></div><button class="clear" id="clear-filters" type="button">条件をクリア ↗</button></aside>
    <section class="results" aria-label="検索結果"><div class="results-search"><span aria-hidden="true">⌕</span><input id="explore-search" type="search" value="${safe(q)}" placeholder="問い、理論名、著者、キーワード" aria-label="全文検索"></div><div class="results-meta"><span id="result-count"></span><span>ATLAS INDEX</span></div><div id="results-list"></div></section></div></div>`;
  const state = {q, kind: selectedKind, field: selectedField, family: selectedFamily, level: selectedLevel};
  const updateUrl = () => {
    const p = new URLSearchParams();
    for (const [key, value] of Object.entries(state)) if (value) p.set(key, value);
    history.replaceState(null, '', `#/explore${p.size ? '?' + p.toString() : ''}`);
  };
  const draw = () => {
    document.querySelector('#kind-filters').innerHTML = ['', ...kinds].map(k => `<button type="button" class="pill ${state.kind === k ? 'active' : ''}" data-kind="${safe(k)}" aria-pressed="${state.kind === k}">${k ? safe(kindJa[k]) : 'すべて'}</button>`).join('');
    const needle = state.q.toLocaleLowerCase();
    const result = entries.filter(e => (!state.kind || e.kind === state.kind) && (!state.field || e.fields.includes(state.field)) && (!state.family || e.family.includes(state.family)) && (!state.level || e.levels.includes(state.level)) && (!needle || [e.title,e.japanese,e.summary,e.question,e.authors,e.venue,e.type,...e.tags,...e.fields,...e.sections.flat()].filter(Boolean).join(' ').toLocaleLowerCase().includes(needle)));
    document.querySelector('#result-count').textContent = `${result.length} 件の項目`;
    document.querySelector('#results-list').innerHTML = result.length ? result.map(e => `<a class="result-row" href="${path(e.id)}"><span class="result-kind">${safe(e.kind)}</span><div><h2>${safe(e.title)}</h2><p class="jp-title">${safe(e.japanese)}</p><p>${safe(e.summary)}</p><div class="result-tags">${e.fields.map(f => `<span>${safe(f)}</span>`).join('')}</div></div><span class="result-arrow" aria-hidden="true">↗</span></a>`).join('') : '<div class="empty"><h2>該当する項目がありません。</h2><p>検索語やフィルターを変えてみてください。未登録の分野も今後追加できます。</p></div>';
    document.querySelectorAll('[data-kind]').forEach(button => button.addEventListener('click', () => { state.kind = button.dataset.kind; updateUrl(); draw(); }));
  };
  document.querySelector('#explore-search').addEventListener('input', e => { state.q = e.target.value.trim(); updateUrl(); draw(); });
  for (const key of ['field','family','level']) document.querySelector(`#${key}-filter`).addEventListener('change', e => {state[key] = e.target.value; updateUrl(); draw();});
  document.querySelector('#clear-filters').addEventListener('click', () => { location.hash = '#/explore'; renderExplore(new URLSearchParams()); });
  draw();
}

function renderEntry(id) {
  const entry = byId.get(id);
  if (!entry) { main.innerHTML = '<div class="wrap not-found"><h1>ページが見つかりません。</h1><a href="#/explore">一覧へ戻る ↗</a></div>'; return; }
  const sections = entry.sections.map(([heading, body], i) => `<section id="section-${i}" class="article-section"><div class="section-number">${String(i+1).padStart(2,'0')}</div><div><h2>${safe(heading)}</h2><p>${safe(body)}</p></div></section>`).join('');
  const related = entry.related.map(key => byId.get(key)).filter(Boolean);
  main.innerHTML = `<div class="wrap article"><div class="breadcrumbs"><a href="#/">ホーム</a><span>/</span><a href="${browse('kind',entry.kind)}">${safe(kindJa[entry.kind])}</a><span>/</span><span>${safe(entry.title)}</span></div>
    <div class="article-grid"><aside class="article-sidebar"><div class="sidebar-sticky"><span class="eyebrow">ON THIS PAGE</span><nav aria-label="目次">${entry.sections.map(([heading],i) => `<button type="button" data-scroll="section-${i}">${safe(heading)}</button>`).join('')}<button type="button" data-scroll="sources">出典</button><button type="button" data-scroll="related">関連項目</button></nav><a class="back" href="#/explore">← すべての項目</a></div></aside>
    <article class="article-body"><div class="article-header"><div class="eyebrow">${safe(entry.kind)} <span class="sep">/</span> ${safe(entry.type)}</div><h1>${safe(entry.title)}</h1><p class="article-ja">${safe(entry.japanese)}</p><p class="article-lead">${safe(entry.summary)}</p></div>
      <div class="article-facts"><div><span>説明したい問い</span><strong>${safe(entry.question)}</strong></div>${entry.authors ? `<div><span>著者・刊行</span><strong>${safe(entry.authors)}${entry.year ? `, ${entry.year}` : ''}${entry.venue ? ` · ${safe(entry.venue)}` : ''}</strong></div>` : ''}<div><span>分類</span><strong>${safe(entry.type)}</strong></div><div><span>分析単位</span><strong>${entry.levels.map(safe).join(' · ')}</strong></div><div><span>理論系譜</span><strong>${entry.family.map(safe).join(' · ')}</strong></div></div>
      <div class="article-sections">${sections}</div>
      <section id="sources" class="source-section"><span class="eyebrow">REFERENCES</span><h2>出典</h2><ul>${entry.sources.map(source => `<li><a href="${url(source.url)}" target="_blank" rel="noopener noreferrer">${safe(source.label)} ↗</a></li>`).join('')}</ul><p>本ページは学習用の要約です。正確な引用や議論には原典を確認してください。</p></section>
      <section id="related" class="related-section"><div class="section-heading"><div><span class="eyebrow">FOLLOW THE THREAD</span><h2>関連する項目</h2></div></div><div class="related-grid">${related.map(e => card(e,true)).join('')}</div></section>
    </article></div></div>`;
  document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.scroll)?.scrollIntoView({behavior:'smooth'})));
}

function render() {
  const {pathname, params} = readRoute();
  if (pathname === '/') renderHome();
  else if (pathname === '/explore') renderExplore(params);
  else if (pathname.startsWith('/entry/')) renderEntry(decodeURIComponent(pathname.slice(7)));
  else main.innerHTML = '<div class="wrap not-found"><h1>ページが見つかりません。</h1><a href="#/">ホームへ戻る ↗</a></div>';
  document.title = pathname.startsWith('/entry/') && byId.has(decodeURIComponent(pathname.slice(7))) ? `${byId.get(decodeURIComponent(pathname.slice(7))).title} | Management Theory Atlas` : 'Management Theory Atlas';
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', render);
document.addEventListener('keydown', e => {
  if (e.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
    const input = document.querySelector('#home-search, #explore-search');
    if (input) { e.preventDefault(); input.focus(); }
  }
});
render();
