import { useState, useEffect, useRef } from 'react';
import { useI18n } from './I18nContext.jsx';
import { getFallbackQuestions } from './questions.js';

export default function Exam({ skill, onPass, onRetry }) {
  const { t } = useI18n();
  const questions = useRef(getFallbackQuestions(skill || 'General Teaching')).current;
  const [loading, setLoading] = useState(true);
  const [i, setI] = useState(0), [score, setScore] = useState(0), [sel, setSel] = useState(null), [left, setLeft] = useState(60);
  const timeout = useRef();
  const done = i >= questions.length;

  useEffect(() => { const id = setTimeout(() => setLoading(false), 800); return () => clearTimeout(id); }, []);
  useEffect(() => () => clearTimeout(timeout.current), []);
  useEffect(() => {
    if (loading || done || sel !== null) return;
    const id = setInterval(() => setLeft(s => s - 1), 1000);
    return () => clearInterval(id);
  }, [loading, i, sel, done]);

  const answer = (idx) => {
    setSel(idx);
    if (idx === questions[i].correct) setScore(s => s + 1);
    timeout.current = setTimeout(() => { setI(x => x + 1); setSel(null); setLeft(60); }, idx === -1 ? 1400 : 1500);
  };
  useEffect(() => { if (!loading && !done && sel === null && left <= 0) answer(-1); });

  if (loading) return (
    <div className="exam-loading"><div className="exam-loading-inner"><div className="exam-loading-spinner" />
      <div className="exam-loading-title">{t('exam_gen')}</div>
      <div className="exam-loading-sub">{t('exam_prep')} "{skill}"...</div>
      <div className="exam-loading-dots"><span /><span /><span /></div></div></div>
  );
  if (done) {
    const pct = Math.round(score / questions.length * 100), ok = pct >= 75;
    return (
      <div className={`result-container ${ok ? '' : 'result-fail'}`}>
        <div className="result-icon">{ok ? '🏆' : '😔'}</div>
        <div className="result-title">{t(ok ? 'pass' : 'fail')}</div>
        <div className="result-score">{pct}%</div>
        <div className="result-msg">{t(ok ? 'res_pass' : 'res_fail')}</div>
        <button className="btn-primary" onClick={ok ? onPass : onRetry}>{t(ok ? 'res_btn_pass' : 'res_btn_fail')}</button>
      </div>
    );
  }
  const q = questions[i];
  return (
    <div className="exam-container">
      <div className="exam-header">
        <div className="exam-title">{t('exam_title')}</div><div className="exam-subtitle">{t('exam_subtitle')}</div>
        <div className="exam-skill-badge">🎯 {skill}</div>
        <div className="exam-progress-wrap"><div className="exam-progress-bar"><div className="exam-progress-fill" style={{ width: `${i / questions.length * 100}%` }} /></div>
          <div className="exam-q-count">{t('q')} {i + 1} {t('of')} {questions.length}</div></div>
      </div>
      <div className="exam-body">
        <div className="exam-timer-wrap"><div className={`exam-timer ${left <= 10 ? 'danger' : ''}`}>{left}</div><div className="exam-timer-label">{t('timer_label')}</div></div>
        <div className="exam-question">{q.q}</div>
        <div className="exam-options">
          {q.options.map((o, k) => (
            <button key={k} disabled={sel !== null} aria-label={`${String.fromCharCode(65 + k)}: ${o}`}
              className={`exam-option ${sel !== null ? 'disabled' : ''} ${sel !== null && k === q.correct ? 'correct' : ''} ${sel === k && k !== q.correct ? 'wrong' : ''}`}
              onClick={() => answer(k)}>{o}</button>
          ))}
        </div>
        {sel !== null && <div className={`exam-feedback ${sel === q.correct ? 'correct' : 'wrong'}`} style={{ display: 'block' }}>
          {sel === -1 ? t('time_up') : t(sel === q.correct ? 'correct' : 'wrong')}</div>}
      </div>
    </div>
  );
}
