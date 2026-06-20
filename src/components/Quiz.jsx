import { useState } from "react";

export default function Quiz() {
  // initial permission to start the quiz
  const [allowed, setAllowed] = useState(null); // null = not started, true = allowed, false = declined

  // ---------------------------
  // QUESTIONS: edit these arrays to add your questions
  // ---------------------------
  // basicQuestions: short onboarding questionnaire shown first
  // focusedQuestions: main mental-health prediction questionnaire (shown only if user agrees)
  // Replace the commented examples with your real questions. Keep objects in the shown shape.
  const basicQuestions = [
    {
      id: 'b1',
      type: 'text', // 'single' | 'multi' | 'text' | 'scale'
      question: 'What is your age range?',
      name: 'age_range',
      placeholder: 'Enter your Exact Age.....',
      required: true,
    },
    {
      id: 'b2',
      type: 'single',
      question: "What's your gender?",
      name: 'gender',
      options: [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Others', label: 'Others' },
      ],
      required: true,
    },
    {
      id: 'b3',
      type: 'multi',
      question: "What's your Occupation?",
      name: 'occupation',
      options: [
        { value: 'Student', label: 'Student' },
        { value: 'Employee', label: 'Employee' },
        { value: 'Worker', label: 'Worker' },
        { value: 'None', label: 'None' },
      ],
    },
    {
      id: 'b4',
      type: 'single',
      question: "What's your Marital Status?",
      name: 'marital_status',
      options: [
        { value: 'Single', label: 'Single' },
        { value: 'Married', label: 'Married' },
        { value: 'In Relationship', label: 'In Relationship' },
        { value: 'None', label: 'None' },
      ],
    },
    {
      id: 'b5',
      type: 'single',
      question: 'How many hours do you sleep?',
      name: 'sleep_hours',
      options: [
        { value: '1-4', label: '1-4' },
        { value: '4-6', label: '4-6' },
        { value: '6-8', label: '6-8' },
        { value: 'more', label: 'More than enough' },
      ],
    },
    {
      id: 'b6',
      type: 'single',
      question: 'How many hours do you use screens daily?',
      name: 'daily_screen_time',
      options: [
        { value: '1-4', label: '1-4' },
        { value: '4-6', label: '4-6' },
        { value: '8-12', label: '8-12' },
        { value: 'none', label: 'Not at all' },
      ],
    },
    {
      id: 'b7',
      type: 'multi',
      question: 'What are your Physical Activities?',
      name: 'activities',
      options: [
        { value: 'Cycling', label: 'Cycling' },
        { value: 'Running', label: 'Running' },
        { value: 'Walking', label: 'Walking' },
        { value: 'Gym', label: 'Gym with Exercises' },
        { value: 'none', label: 'None of these' },
      ],
    },
    {
      id: 'b8',
      type: 'single',
      question: 'Do you take any Medications?',
      name: 'medication',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },

  ];

  const focusedQuestions = [
    {
      id: 'f1',
      type: 'single',
      question: 'How often do you feel sad or empty?',
      name: 'feeling',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f2',
      type: 'single',
      question: 'Have you lost interest in things you used to enjoy?',
      name: 'interest_lost',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f3',
      type: 'single',
      question: 'Do you struggle getting out of bed?',
      name: 'tired',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f4',
      type: 'single',
      question: 'Do you worry excessively?',
      name: 'worry',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f5',
      type: 'single',
      question: 'Do small issues make you panic?',
      name: 'panic_attack',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f6',
      type: 'single',
      question: 'Do you overthink at night?',
      name: 'overthink',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f7',
      type: 'single',
      question: 'Do you feel mentally exhausted?',
      name: 'exhausted',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f8',
      type: 'single',
      question: 'Do you feel pressure from family/work?',
      name: 'pressurize',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f9',
      type: 'single',
      question: 'Do you feel burned out?',
      name: 'stress',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f10',
      type: 'single',
      question: 'Do you have difficulty sleeping?',
      name: 'sleep_difficulty',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f11',
      type: 'single',
      question: 'Do nightmares disturb you?',
      name: 'nightmares',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f12',
      type: 'single',
      question: 'Do you wake up during night?',
      name: 'wake_up',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f13',
      type: 'single',
      question: 'Do you avoid social gatherings?',
      name: 'social_avoidance',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f14',
      type: 'single',
      question: 'Do you struggle expressing feelings?',
      name: 'express_feelings',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f15',
      type: 'single',
      question: 'Have you had thoughts of harming yourself?',
      name: 'self_harm_thoughts',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f16',
      type: 'single',
      question: 'Have you felt life is meaningless?',
      name: 'life_meaningless',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f17',
      type: 'single',
      question: 'Have you experienced severe emotional breakdowns?',
      name: 'emotional_breakdowns',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f18',
      type: 'single',
      question: 'Do you sweat when you think about your past or intrusive thoughts?',
      name: 'sweat_intrusive',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
    {
      id: 'f19',
      type: 'single',
      question: 'Do you feel sometimes more motivated and energetic to do work or sometimes more low potential to do that work?',
      name: 'motivation_variation',
      options: [
        { value: 'Never', label: 'Never' },
        { value: 'Rarely', label: 'Rarely' },
        { value: 'Sometimes', label: 'Sometimes' },
        { value: 'Often', label: 'Often' },
        { value: 'Always', label: 'Always' },
      ],
    },
  ];

  // ---------------------------
  // Local state
  // ---------------------------
  const [basicIndex, setBasicIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [answersBasic, setAnswersBasic] = useState({});
  const [answersFocused, setAnswersFocused] = useState({});
  const [basicCompleted, setBasicCompleted] = useState(false);
  const [showFocusedPermission, setShowFocusedPermission] = useState(false);

  // ---------------------------
  // Helpers
  // ---------------------------
  // Generic answer setter factory: pass the appropriate setter (setAnswersBasic/setAnswersFocused)
  const handleAnswerChange = (setter) => (name, value) => {
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const next = (indexSetter, current, questionsArr) => {
    if (current < Math.max(0, questionsArr.length - 1)) indexSetter((i) => i + 1);
  };
  const prev = (indexSetter, current) => {
    if (current > 0) indexSetter((i) => i - 1);
  };

  const submitBasic = (e) => {
    e?.preventDefault();
    setBasicCompleted(true);
    setShowFocusedPermission(true);
    console.log('Basic answers:', answersBasic);
    // TODO: send answersBasic to your backend if needed
  };

  const submitFocused = (e) => {
    e?.preventDefault();
    // compute analysis from focused answers and save to localStorage, then navigate to Analysis page
    const mapping = { Never: 0, Rarely: 4, Sometimes: 8, Often: 12, Always: 15 };

    // total score
    let total = 0;
    let maxTotal = focusedQuestions.length * 15;

    // category mappings
    const categories = {
      depression: ['feeling', 'interest_lost', 'self_harm_thoughts', 'life_meaningless', 'express_feelings', 'emotional_breakdowns'],
      anxiety: ['worry', 'panic_attack', 'overthink', 'sweat_intrusive', 'nightmares'],
      sleep: ['sleep_difficulty', 'wake_up', 'tired', 'nightmares'],
      stress: ['stress', 'pressurize', 'exhausted', 'motivation_variation'],
      social: ['social_avoidance'],
    };

    const categoryScores = {};

    // compute per-question totals
    focusedQuestions.forEach((q) => {
      const resp = answersFocused[q.name];
      const val = typeof resp === 'number' ? resp : mapping[resp] ?? 0;
      total += val;
    });

    // compute category scores (sum normalized to percentage)
    Object.keys(categories).forEach((cat) => {
      const keys = categories[cat];
      let sum = 0;
      let max = keys.length * 15;
      keys.forEach((k) => {
        const v = answersFocused[k];
        const n = typeof v === 'number' ? v : mapping[v] ?? 0;
        sum += n;
      });
      categoryScores[cat] = max > 0 ? Math.round((sum / max) * 100) : 0;
    });

    const percent = Math.round((total / maxTotal) * 100);

    // simple heuristic predictions based on top category scores
    const preds = [];
    const symptoms = new Set();
    const recs = new Set();

    // helper add
    const addRec = (items) => items.forEach((it) => recs.add(it));
    const addSym = (items) => items.forEach((it) => symptoms.add(it));

    // evaluate categories
    if (categoryScores.depression >= 40) {
      preds.push('Depression');
      addSym(['Low mood', 'Loss of interest', 'Fatigue', 'Sleep changes']);
      addRec(['Consider talking to a therapist', 'Routine exercise', 'Structured sleep schedule', 'Mindfulness practice']);
    }
    if (categoryScores.anxiety >= 40) {
      preds.push('Anxiety');
      addSym(['Excessive worry', 'Panic', 'Racing thoughts']);
      addRec(['Breathing exercises', 'Cognitive techniques', 'Limit stimulants', 'Therapy options']);
    }
    if (categoryScores.sleep >= 35) {
      preds.push('Sleep Issues');
      addSym(['Difficulty sleeping', 'Night waking', 'Daytime tiredness']);
      addRec(['Sleep hygiene', 'Reduce screens before bed', 'Regular sleep window']);
    }
    if (categoryScores.stress >= 40) {
      preds.push('Burnout / Stress');
      addSym(['Feeling burned out', 'Emotional exhaustion', 'Lower motivation']);
      addRec(['Work-life boundaries', 'Scheduled breaks', 'Seek support from peers or professionals']);
    }
    if (categoryScores.social >= 40) {
      preds.push('Social Anxiety / Isolation');
      addSym(['Avoidance of gatherings', 'Difficulty with social situations']);
      addRec(['Gradual exposure', 'Social skills practice', 'Peer support groups']);
    }

    // urgent alert if self-harm thoughts reported often/always
    const selfHarm = mapping[answersFocused['self_harm_thoughts']] ?? 0;

    // mental stability label
    let stability = 'Low Concern';
    if (percent >= 70) stability = 'High Concern';
    else if (percent >= 40) stability = 'Moderate Concern';

    const analysis = {
      createdAt: new Date().toISOString(),
      total,
      maxTotal,
      percent,
      categoryScores,
      predictions: preds.length ? preds : ['No clear disorder detected — monitor symptoms'],
      symptoms: Array.from(symptoms),
      recommendations: Array.from(recs),
      stability,
      urgent: selfHarm >= 12, // true if Often or Always
      answers: answersFocused,
    };

    try {
      localStorage.setItem('latestAnalysis', JSON.stringify(analysis));
    } catch (err) {
      console.error('Failed to save analysis', err);
    }

    // navigate to Analysis page to show result
    window.location.href = '/analysis';
  };

  // ---------------------------
  // Renderers for question types
  // ---------------------------
  function renderQuestion(q, answers, setAnswers) {
    const val = answers[q.name];

    // Normalize options support: accept `q.options` or `q.option`, and allow
    // arrays of strings, arrays of {value,label} or a single object map.
    const rawOptions = q.options ?? q.option ?? [];
    let options = [];
    if (Array.isArray(rawOptions)) {
      if (rawOptions.length === 0) options = [];
      else if (typeof rawOptions[0] === 'string') {
        options = rawOptions.map((s) => ({ value: s, label: s }));
      } else if (rawOptions.length === 1 && rawOptions[0] && typeof rawOptions[0] === 'object' && !('value' in rawOptions[0] && 'label' in rawOptions[0])) {
        // single object with multiple key/values like { Student: 'Student', Employee: 'Employee' }
        options = Object.entries(rawOptions[0]).map(([k, v]) => ({ value: k, label: v }));
      } else {
        // assume array of { value, label }
        options = rawOptions.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
      }
    }

    if (q.type === 'single') {
      return (
        <div>
          {options.map((opt) => (
            <label key={opt.value} style={{ display: 'flex', gap: 8, alignItems: 'center', margin: '6px 0' }}>
              <input
                type="radio"
                name={q.name}
                value={opt.value}
                checked={val === opt.value}
                onChange={() => handleAnswerChange(setAnswers)(q.name, opt.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      );
    }

    if (q.type === 'multi') {
      const arr = Array.isArray(val) ? val : [];
      const toggle = (v) => {
        const next = arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
        handleAnswerChange(setAnswers)(q.name, next);
      };
      return (
        <div>
          {options.map((opt) => (
            <label key={opt.value} style={{ display: 'flex', gap: 8, alignItems: 'center', margin: '6px 0' }}>
              <input type="checkbox" checked={arr.includes(opt.value)} onChange={() => toggle(opt.value)} />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      );
    }
    if (q.type === 'text') {
      return (
        <div>
          <input
            type="text"
            placeholder={q.placeholder || ''}
            value={val || ''}
            onChange={(e) => handleAnswerChange(setAnswers)(q.name, e.target.value)}
            style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ddd' }}
          />
        </div>
      );
    }

    if (q.type === 'scale') {
      const min = q.min ?? 1;
      const max = q.max ?? 5;
      const cur = typeof val !== 'undefined' ? val : min;
      return (
        <div>
          <input type="range" min={min} max={max} value={cur} onChange={(e) => handleAnswerChange(setAnswers)(q.name, Number(e.target.value))} />
          <div style={{ marginTop: 8 }}>Value: {cur}</div>
        </div>
      );
    }

    return <div>Unsupported question type</div>;
  }

  // ---------------------------
  // UI flow (build content with if/else to avoid nested ternaries)
  // ---------------------------
  let content = null;

  if (allowed === null) {
    content = (
      <section className="quiz-permit frosted-glass" aria-labelledby="quiz-permission">
        <h2 id="quiz-permission">Start Quiz</h2>
        <p>Do you want to start the short questionnaire?</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={() => setAllowed(true)} type="button">Yes</button>
          <button className="btn" onClick={() => { setAllowed(false); window.location.href = '/'; }} type="button">No</button>
        </div>
      </section>
    );
  } else if (!basicCompleted) {
    content = (
      <form onSubmit={submitBasic} className="quiz-start">
        <h2>Basic Questions</h2>
        {basicQuestions.length === 0 ? (
          <div className="questions-placeholder" style={{ minHeight: 160, border: '1px dashed #ccc', padding: 12 }}>
            <p style={{ opacity: 0.85 }}>
              No basic questions defined. Add question objects to the <code>basicQuestions</code> array (see comments in this file).
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: 8 }}>Question {basicIndex + 1} of {basicQuestions.length}</div>
            <h3 style={{ marginTop: 0 }}>{basicQuestions[basicIndex].question}</h3>
            {renderQuestion(basicQuestions[basicIndex], answersBasic, setAnswersBasic)}
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="btn" type="button" onClick={() => prev(setBasicIndex, basicIndex)} disabled={basicIndex === 0}>Previous</button>
          <button className="btn" type="button" onClick={() => next(setBasicIndex, basicIndex, basicQuestions)} disabled={basicIndex >= Math.max(0, basicQuestions.length - 1)}>Next</button>
          <button className="btn" type="submit">Finish Basic</button>
        </div>
      </form>
    );
  } else if (showFocusedPermission === true) {
    content = (
      <section className="quiz-permit frosted-glass">
        <h2>Focused Mental Health Quiz</h2>
        <p>Do you want to continue to a focused quiz for a mental-health prediction?</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={() => { setShowFocusedPermission(false); }} type="button">No, thanks</button>
          <button className="btn" onClick={() => setShowFocusedPermission('yes')} type="button">Yes, continue</button>
        </div>
      </section>
    );
  } else if (showFocusedPermission === 'yes') {
    content = (
      <form onSubmit={submitFocused} className="quiz-start">
        <h2>Focused Questions</h2>
        {focusedQuestions.length === 0 ? (
          <div className="questions-placeholder" style={{ minHeight: 160, border: '1px dashed #ccc', padding: 12 }}>
            <p style={{ opacity: 0.85 }}>No focused questions defined. Add question objects to the <code>focusedQuestions</code> array (see comments in this file).</p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: 8 }}>Question {focusedIndex + 1} of {focusedQuestions.length}</div>
            <h3 style={{ marginTop: 0 }}>{focusedQuestions[focusedIndex].question}</h3>
            {renderQuestion(focusedQuestions[focusedIndex], answersFocused, setAnswersFocused)}
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="btn" type="button" onClick={() => prev(setFocusedIndex, focusedIndex)} disabled={focusedIndex === 0}>Previous</button>
          <button className="btn" type="button" onClick={() => next(setFocusedIndex, focusedIndex, focusedQuestions)} disabled={focusedIndex >= Math.max(0, focusedQuestions.length - 1)}>Next</button>
          <button className="btn" type="submit">Submit Focused</button>
        </div>
      </form>
    );
  } else {
    content = (
      <section className="quiz-permit frosted-glass">
        <h2>Thanks</h2>
        <p>Thanks for completing the basic questionnaire. You can come back anytime to take the focused quiz.</p>
      </section>
    );
  }

  return (
    <div className="container">
      <h1 id="quiz">Quiz</h1>
      <div className="quiz-card">
        <div className="card">{content}</div>
      </div>
    </div>
  );
}
