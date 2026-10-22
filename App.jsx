import { useState, useEffect, useMemo, useRef } from 'react';
import { useI18n } from './I18nContext.jsx';
import { coursesData, courseInstructors, instructorProfiles, COURSE_META } from './data2.js';
import { About, Login, Register, Profile, Swap } from './Pages.jsx';
import Exam from './Exam.jsx';

const NAV = [['home', '🏠'], ['about', '✦'], ['courses', '🔍'], ['swap', '🔄'], ['profile', '👤'], ['login', '🔐'], ['register', '✦']];
const LANG_NAMES = { ar: 'عربي', en: 'English', fr: 'Français' };
const html = (s) => ({ dangerouslySetInnerHTML: { __html: s } });

function Nav({ page, go }) {
  const { t, lang, setLang, theme, toggleTheme, languages } = useI18n();
  const [open, setOpen] = useState(false);
  const pick = (p) => { go(p); setOpen(false); };
  return (
    <>
      <nav role="navigation">
        <div className="nav-logo" tabIndex={0} role="button" onClick={() => pick('home')} onKeyDown={e => e.key === 'Enter' && pick('home')}>Skill<span>Swapping</span></div>
        <div className="nav-links">
          {NAV.map(([p, ic]) => <button key={p} className={`${page === p ? 'active' : ''} ${p === 'register' ? 'nav-cta' : ''}`} onClick={() => pick(p)}>{ic} <span>{t('nav_' + p)}</span></button>)}
        </div>
        <div className="nav-controls">
          <select className="ctrl-btn" value={lang} onChange={e => setLang(e.target.value)} aria-label="Language">
            {languages.map(l => <option key={l} value={l}>🌐 {LANG_NAMES[l]}</option>)}
          </select>
          <div className="theme-toggle" role="button" tabIndex={0} onClick={toggleTheme} onKeyDown={e => e.key === 'Enter' && toggleTheme()}>
            <span>{theme === 'light' ? '☀️' : '🌙'}</span><div className="toggle-track"><div className="toggle-thumb" /></div>
            <span className="toggle-label">{t(theme === 'light' ? 'light' : 'dark')}</span>
          </div>
        </div>
        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label="Menu"><span /><span /><span /></button>
      </nav>
      <div className={`mobile-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
        {NAV.map(([p, ic]) => <button key={p} className={`${page === p ? 'active' : ''} ${p === 'register' ? 'nav-cta-mobile' : ''}`} onClick={() => pick(p)}>{ic} <span>{t('nav_' + p)}</span></button>)}
        <div className="mobile-nav-controls">
          <select className="ctrl-btn" value={lang} onChange={e => setLang(e.target.value)}>{languages.map(l => <option key={l} value={l}>🌐 {LANG_NAMES[l]}</option>)}</select>
          <div className="theme-toggle" role="button" tabIndex={0} onClick={toggleTheme}><span>{theme === 'light' ? '☀️' : '🌙'}</span><div className="toggle-track"><div className="toggle-thumb" /></div></div>
        </div>
      </div>
    </>
  );
}

function CourseActions({ id, bookmarks, toggleBookmark, share }) {
  return (
    <div className="course-actions">
      <button className={`course-action-btn ${bookmarks.has(id) ? 'bookmarked' : ''}`} onClick={e => { e.stopPropagation(); toggleBookmark(id); }}>🔖</button>
      <button className="course-action-btn" onClick={e => { e.stopPropagation(); share(coursesData[id].name); }}>↗</button>
    </div>
  );
}

function Thumb({ id, cls, size, ...act }) {
  const c = coursesData[id];
  return (
    <div className={cls} style={{ background: c.gradient }}>
      <CourseActions id={id} {...act} />
      <img src={c.img} alt={c.name} loading="lazy" /><span style={{ position: 'relative', fontSize: size }}>{c.emoji}</span>
    </div>
  );
}

function InstructorLine({ id }) {
  const { t } = useI18n();
  const n = courseInstructors[id] || [];
  return <>{t('by')} {n.slice(0, 2).join(', ')}{n.length > 2 ? ` +${n.length - 2}` : ''}</>;
}

function Home({ go, openCourse, ...act }) {
  const { t } = useI18n();
  return (
    <>
      <section className="hero">
        <div className="hero-bg" /><div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-tag">{t('hero_tag')}</div>
          <h1 {...html(t('hero_h1'))} /><p className="hero-sub">{t('hero_sub')}</p>
          <div className="hero-actions"><button className="btn-primary" onClick={() => go('courses')}>{t('hero_btn1')}</button><button className="btn-secondary" onClick={() => go('about')}>{t('hero_btn2')}</button></div>
        </div>
        <div className="hero-visual"><div className="hero-cards">
          {[['💻', 'orange', 'cat_dev', '42 · 180'], ['📊', 'teal', 'cat_ai', '28 · 140'], ['🎨', 'red', 'cat_design', '19 · 95']].map(([e, c, k, s]) => (
            <div className="hero-card" key={k}><div className={`hc-icon ${c}`}>{e}</div><div><div className="hc-title">{t(k)}</div><div className="hc-sub">{s.split(' · ')[0]} · {s.split(' · ')[1]} {t('hours')}</div></div></div>))}
        </div></div>
      </section>
      <div className="stats-bar">{[['250K+', 'stat1'], ['1,200+', 'stat2'], ['98%', 'stat3'], ['85+', 'stat4']].map(([n, k]) => <div className="stat" key={k}><div className="stat-num">{n}</div><div className="stat-label">{t(k)}</div></div>)}</div>
      <section className="section">
        <div className="section-tag">{t('why_tag')}</div><h2 className="section-title">{t('why_title')}</h2><p className="section-sub">{t('why_sub')}</p>
        <div className="features-grid">{['🎯', '🤝', '🏆', '📱', '🔄', '💬'].map((ic, i) => (
          <article className="feature-card" key={i}><div className="feature-icon">{ic}</div><div className="feature-title">{t(`f${i + 1}t`)}</div><div className="feature-desc">{t(`f${i + 1}d`)}</div></article>))}</div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-tag">{t('pop_tag')}</div><h2 className="section-title">{t('pop_title')}</h2><p className="section-sub">{t('pop_sub')}</p>
        <div className="courses-row">{Object.keys(coursesData).map(id => {
          const m = COURSE_META[id];
          return (
            <article className="course-card" key={id} tabIndex={0} role="button" onClick={() => openCourse(id)} onKeyDown={e => e.key === 'Enter' && openCourse(id)}>
              <Thumb id={id} cls="course-thumb" size="2.2rem" {...act} />
              <div className="course-body"><div className="course-cat">{t('cat_' + m.cat)}</div><div className="course-name">{coursesData[id].name}</div>
                <div className="course-meta"><span className="course-rating">★ {m.rating}</span><span>{m.students} {t('students')}</span><span>{m.hours} {t('hours')}</span></div></div>
            </article>);
        })}</div>
      </section>
    </>
  );
}

function Courses({ openCourse, ...act }) {
  const { t } = useI18n();
  const [q, setQ] = useState(''), [cat, setCat] = useState('all');
  const [fl, setFl] = useState({ level: new Set(), price: new Set(), rating: new Set() });
  const flip = (g, v) => setFl(s => { const n = new Set(s[g]); n.has(v) ? n.delete(v) : n.add(v); return { ...s, [g]: n }; });
  const active = q || cat !== 'all' || Object.values(fl).some(s => s.size);
  const clear = () => { setQ(''); setCat('all'); setFl({ level: new Set(), price: new Set(), rating: new Set() }); };
  const list = useMemo(() => Object.keys(coursesData).filter(id => {
    const m = COURSE_META[id], c = coursesData[id], s = q.toLowerCase().trim();
    const names = (courseInstructors[id] || []).join(' ').toLowerCase();
    return (!s || c.name.toLowerCase().includes(s) || c.catEn.toLowerCase().includes(s) || c.cat.includes(s) || names.includes(s))
      && (cat === 'all' || m.cat === cat) && (!fl.level.size || fl.level.has(m.level)) && (!fl.price.size || fl.price.has(m.price))
      && (!fl.rating.size || [...fl.rating].some(r => m.rating >= r));
  }), [q, cat, fl]);
  const opt = (g, v, label) => <label className="sidebar-option"><input type="checkbox" checked={fl[g].has(v)} onChange={() => flip(g, v)} /> <span>{label}</span></label>;
  return (
    <>
      <div className="search-hero"><div className="section-tag">{t('search_tag')}</div>
        <h2 className="section-title" style={{ margin: '0 auto 8px', textAlign: 'center' }}>{t('search_title')}</h2>
        <div className="search-box"><input className="search-input" value={q} onChange={e => setQ(e.target.value)} placeholder={t('search_ph')} aria-label="search" />
          <button className="search-btn">🔍 <span>{t('search_btn_text')}</span></button></div></div>
      <div className="filter-bar" role="toolbar">
        {['all', 'dev', 'ai', 'design', 'cyber'].map(c => <button key={c} aria-pressed={cat === c} className={`filter-chip ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{t('cat_' + c)}</button>)}
        <button className={`clear-filters-btn ${active ? 'visible' : ''}`} onClick={clear}>{t('clear')}</button>
      </div>
      <div className="courses-main"><div className="courses-layout">
        <aside className="courses-sidebar">
          <div className="sidebar-group"><div className="sidebar-label">{t('lvl')}</div>{['beginner', 'intermediate', 'advanced'].map(v => opt('level', v, t(v)))}</div>
          <div className="sidebar-group"><div className="sidebar-label">{t('price')}</div>{opt('price', 'free', t('free')[0] + t('free').slice(1).toLowerCase())}{opt('price', 'paid', t('paid'))}</div>
          <div className="sidebar-group"><div className="sidebar-label">{t('rating')}</div>{opt('rating', 5, '★★★★★ 5.0')}{opt('rating', 4, '★★★★ 4.0+')}</div>
        </aside>
        <div className="courses-grid">
          {list.length === 0 && <div className="no-results show"><div className="no-results-icon">🔍</div><div className="no-results-title">{t('no_results_title')}</div><div className="no-results-sub">{t('no_results_sub')}</div></div>}
          {list.map((id, i) => { const m = COURSE_META[id]; return (
            <article key={id} className={`full-course-card ${i === 0 && !active ? 'featured' : ''}`} onClick={() => openCourse(id)}>
              <Thumb id={id} cls="fcc-thumb" size="2.8rem" {...act} />
              <div className="fcc-body"><div className="fcc-cat">{t('cat_' + m.cat)}</div><div className="fcc-name">{coursesData[id].name}</div>
                <div className="fcc-instructor-wrap"><div className="fcc-instructor-avatar">👤</div><div className="fcc-instructor"><InstructorLine id={id} /></div></div>
                <div className="fcc-footer"><span className="fcc-rating">★ {m.rating} ({m.students})</span><span className="fcc-price">{coursesData[id].meta.split('$').pop() && '$' + coursesData[id].meta.split('$').pop()}</span></div></div>
            </article>); })}
        </div>
      </div></div>
    </>
  );
}

function CourseModal({ id, onClose, onEnroll }) {
  const { t, lang } = useI18n();
  useEffect(() => { if (!id) return; const h = e => e.key === 'Escape' && onClose(); document.addEventListener('keydown', h); return () => document.removeEventListener('keydown', h); }, [id]);
  const c = id && coursesData[id];
  return (
    <div className={`modal-overlay ${id ? 'open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      {c && <div className="modal-box"><button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-thumb" style={{ background: c.gradient }}><img src={c.img} alt={c.name} /><span style={{ position: 'relative', fontSize: '4rem', zIndex: 1 }}>{c.emoji}</span></div>
        <div className="modal-body"><div className="modal-cat">{t('cat_' + COURSE_META[id].cat)}</div><div className="modal-name">{c.name}</div><div className="modal-meta">{c.meta}</div>
          <div className="modal-section-title">{t('modal_instructors_label')}</div>
          <div>{(courseInstructors[id] || []).length === 0 ? <span className="no-instructors">{t('no_instructors')}</span> :
            courseInstructors[id].map(n => { const p = instructorProfiles[n]; return (
              <div className="modal-instructor-pill" key={n}><span>{p?.avatar || '👤'}</span><div><strong>{n}</strong><div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{p ? (lang === 'ar' ? p.bio_ar : p.bio_en) : ''}</div>
                <div>{p?.skills.map(s => <span className="mip-skill-tag" key={s}>{s}</span>)}</div></div></div>); })}</div>
          <button className="modal-enroll-btn" onClick={onEnroll}>{t('enroll_btn')}</button></div></div>}
    </div>
  );
}

export default function App() {
  const { t } = useI18n();
  const [page, setPage] = useState('home'), [user, setUser] = useState(null), [toastMsg, setToastMsg] = useState('');
  const [modal, setModal] = useState(null), [bookmarks, setBookmarks] = useState(new Set()), [skill, setSkill] = useState(''), [examKey, setExamKey] = useState(0);
  const [, force] = useState(0), timer = useRef();
  const toast = (m) => { setToastMsg(m); clearTimeout(timer.current); timer.current = setTimeout(() => setToastMsg(''), 2600); };
  const go = (p) => { setPage(p); window.scrollTo(0, 0); };
  const toggleBookmark = (id) => setBookmarks(s => { const n = new Set(s); const on = !n.has(id); on ? n.add(id) : n.delete(id); toast(t(on ? 'bookmark_on' : 'bookmark_off')); return n; });
  const share = async (title) => {
    try { if (navigator.share) await navigator.share({ title, url: location.href }); else { await navigator.clipboard.writeText(location.href); toast(t('copied')); } } catch {}
  };
  const startExam = (s) => { setSkill(s || user?.skill || 'General Teaching'); setExamKey(k => k + 1); go('exam'); };
  const onPass = () => {
    if (user) { Object.keys(courseInstructors).forEach(id => { if (!courseInstructors[id].includes(user.name)) courseInstructors[id].push(user.name); }); force(x => x + 1); }
    go('courses');
  };
  const enroll = () => {
    setModal(null);
    if (!user) { toast(t('toast_enroll_login')); setTimeout(() => go('register'), 900); } else { toast(t('toast_enrolled')); setTimeout(() => go('courses'), 700); }
  };
  const act = { bookmarks, toggleBookmark, share, openCourse: setModal };
  const view = {
    home: <Home go={go} {...act} />, about: <About go={go} />, courses: <Courses {...act} />,
    login: <Login go={go} toast={toast} setUser={setUser} />, register: <Register go={go} toast={toast} setUser={setUser} startExam={startExam} />,
    exam: <Exam key={examKey} skill={skill} onPass={onPass} onRetry={() => startExam(skill)} />,
    profile: <Profile user={user} />, swap: <Swap go={go} toast={toast} />,
  }[page];
  return (
    <>
      <Nav page={page} go={go} />
      <div className="page active visible" key={page}>{view}</div>
      <CourseModal id={modal} onClose={() => setModal(null)} onEnroll={enroll} />
      <div className={`toast ${toastMsg ? 'show' : ''}`} role="status">{toastMsg}</div>
    </>
  );
}
