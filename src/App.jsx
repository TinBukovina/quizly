import { useMemo, useState } from "react";
import notesRaw from "../notes.md?raw";
import pdfUrl from "../Programsko inženjerstvo i informacijski sustavi.pdf?url";
import { questions as baseQuestions } from "./questions";

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function prepareQuestions() {
  return baseQuestions.map((question) => ({
    ...question,
    options: shuffle(question.options),
  }));
}

function prepareQuestionSet(mode, sourceQuestions = baseQuestions) {
  const orderedQuestions = mode === "random" ? shuffle(sourceQuestions) : [...sourceQuestions];

  return orderedQuestions.map((question) => ({
    ...question,
    options: shuffle(question.options),
  }));
}

function buildTopicStats(answeredQuestions) {
  const totals = answeredQuestions.reduce((accumulator, item) => {
    const current = accumulator[item.topic] ?? { total: 0, correct: 0 };
    current.total += 1;
    if (item.isCorrect) {
      current.correct += 1;
    }
    accumulator[item.topic] = current;
    return accumulator;
  }, {});

  return Object.entries(totals).sort(([left], [right]) => left.localeCompare(right, "hr"));
}

function BookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3V5.5Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M8 7h8" />
      <path d="M8 11h6" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M14 3v5a2 2 0 0 0 2 2h5" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l7 7v9a2 2 0 0 1-2 2Z" />
      <path d="M8 15h1.5a1.5 1.5 0 0 0 0-3H8v5" />
      <path d="M13 12v5" />
      <path d="M13 12h1a2 2 0 0 1 0 4h-1" />
      <path d="M18 12h-2v5" />
      <path d="M16 15h1.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function renderInline(text) {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) =>
    part.startsWith("`") && part.endsWith("`") ? <code key={index}>{part.slice(1, -1)}</code> : part,
  );
}

function NotesContent({ content }) {
  const elements = [];
  let listItems = [];
  let tableRows = [];

  function flushList() {
    if (listItems.length === 0) {
      return;
    }

    elements.push(
      <ul key={`list-${elements.length}`}>
        {listItems.map((item, index) => (
          <li key={index}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  }

  function flushTable() {
    if (tableRows.length === 0) {
      return;
    }

    const rows = tableRows
      .map((row) =>
        row
          .replace(/^- /, "")
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean),
      )
      .filter((row) => row.length > 0 && !row.every((cell) => /^-+$/.test(cell)));

    if (rows.length > 0) {
      elements.push(
        <div className="notes-table-wrap" key={`table-${elements.length}`}>
          <table>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) =>
                    rowIndex === 0 ? (
                      <th key={cellIndex}>{renderInline(cell)}</th>
                    ) : (
                      <td key={cellIndex}>{renderInline(cell)}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
    }

    tableRows = [];
  }

  content.split("\n").forEach((line, index) => {
    const trimmed = line.trim();
    const tableCandidate = trimmed.replace(/^- /, "");

    if (!trimmed) {
      flushList();
      flushTable();
      return;
    }

    if (tableCandidate.startsWith("|")) {
      flushList();
      tableRows.push(tableCandidate);
      return;
    }

    flushTable();

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushList();
      const level = Math.min(heading[1].length + 1, 6);
      const HeadingTag = `h${level}`;
      elements.push(<HeadingTag key={`heading-${index}`}>{renderInline(heading[2])}</HeadingTag>);
      return;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();
    elements.push(<p key={`paragraph-${index}`}>{renderInline(trimmed)}</p>);
  });

  flushList();
  flushTable();

  return <div className="notes-content">{elements}</div>;
}

function NotesPanel({ onClose }) {
  return (
    <aside className="panel notes-panel" aria-label="Natuknice">
      <div className="notes-header">
        <div>
          <p className="eyebrow">Natuknice</p>
          <h2>Bilješke za učenje</h2>
        </div>
        <button className="icon-button" type="button" aria-label="Zatvori natuknice" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <NotesContent content={notesRaw} />
    </aside>
  );
}

function PdfPanel({ onClose }) {
  return (
    <aside className="panel pdf-panel" aria-label="PDF skripta">
      <div className="notes-header">
        <div>
          <p className="eyebrow">PDF</p>
          <h2>Skripta</h2>
        </div>
        <button className="icon-button" type="button" aria-label="Zatvori PDF" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <iframe className="pdf-frame" title="Programsko inženjerstvo i informacijski sustavi PDF" src={pdfUrl} />
    </aside>
  );
}

function App() {
  const [questionMode, setQuestionMode] = useState("sequential");
  const [questions, setQuestions] = useState(() => prepareQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [pendingMode, setPendingMode] = useState(null);
  const [studyPanel, setStudyPanel] = useState(null);

  const currentQuestion = questions[currentIndex];
  const score = answers.filter((item) => item.isCorrect).length;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const answeredQuestions = useMemo(
    () =>
      answers.map((answer) => {
        const question = questions.find((item) => item.id === answer.questionId);
        return {
          ...question,
          isCorrect: answer.isCorrect,
          selectedOptionId: answer.selectedOptionId,
        };
      }),
    [answers, questions],
  );

  const topicStats = useMemo(() => buildTopicStats(answeredQuestions), [answeredQuestions]);

  function handleSelect(optionId) {
    if (selectedOptionId) {
      return;
    }

    setSelectedOptionId(optionId);

    const isCorrect = optionId === currentQuestion.correctId;

    setAnswers((previous) => [
      ...previous,
      {
        questionId: currentQuestion.id,
        selectedOptionId: optionId,
        isCorrect,
      },
    ]);
  }

  function handleNext() {
    if (currentIndex === questions.length - 1) {
      setQuizFinished(true);
      return;
    }

    setCurrentIndex((previous) => previous + 1);
    setSelectedOptionId(null);
  }

  function handleRetryQuestion() {
    setQuestions((previousQuestions) =>
      previousQuestions.map((question, index) =>
        index === currentIndex
          ? {
              ...question,
              options: shuffle(question.options),
            }
          : question,
      ),
    );
    setAnswers((previousAnswers) => previousAnswers.slice(0, -1));
    setSelectedOptionId(null);
  }

  function resetQuiz(nextQuestions) {
    setQuestions(nextQuestions.length > 0 ? nextQuestions : prepareQuestionSet(questionMode));
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setAnswers([]);
    setQuizFinished(false);
  }

  function handleRestart(mode = "all") {
    const nextQuestions =
      mode === "wrong"
        ? answeredQuestions
            .filter((question) => !question.isCorrect)
            .map(({ selectedOptionId: _, isCorrect: __, ...question }) => question)
        : baseQuestions;

    resetQuiz(prepareQuestionSet(questionMode, nextQuestions));
  }

  function handleModeChange(mode) {
    if (mode === questionMode) {
      return;
    }

    setPendingMode(mode);
  }

  function confirmModeChange() {
    if (!pendingMode) {
      return;
    }

    const nextMode = pendingMode;
    setPendingMode(null);
    setQuestionMode(nextMode);
    resetQuiz(prepareQuestionSet(nextMode));
  }

  function cancelModeChange() {
    setPendingMode(null);
  }

  if (quizFinished) {
    const total = answers.length;
    const percentage = Math.round((score / total) * 100);
    const wrongCount = total - score;

    return (
      <main className="app-shell">
        <section className="panel result-panel">
          <p className="eyebrow">Rezultat</p>
          <h1>Pregled odgovora</h1>
          <p className="result-score">
            {score}/{total}
          </p>
          <p className="result-subtitle">
            Točnost: <strong>{percentage}%</strong>
          </p>

          <div className="summary-grid">
            <article className="summary-card">
              <span>Pogođeno</span>
              <strong>{score}</strong>
            </article>
            <article className="summary-card">
              <span>Krivo</span>
              <strong>{wrongCount}</strong>
            </article>
            <article className="summary-card">
              <span>Pitanja</span>
              <strong>{total}</strong>
            </article>
          </div>

          <div className="topic-breakdown">
            <h2>Po temama</h2>
            {topicStats.map(([topic, stats]) => (
              <div key={topic} className="topic-row">
                <span>{topic}</span>
                <strong>
                  {stats.correct}/{stats.total}
                </strong>
              </div>
            ))}
          </div>

          <div className="missed-list">
            <h2>Kriva pitanja</h2>
            {answeredQuestions.filter((item) => !item.isCorrect).length === 0 ? (
              <p>Nema krivih odgovora. Prođi još jednom za ponavljanje.</p>
            ) : (
              answeredQuestions
                .filter((item) => !item.isCorrect)
                .map((item) => {
                  const selected = item.options.find((option) => option.id === item.selectedOptionId);
                  const correct = item.options.find((option) => option.id === item.correctId);

                  return (
                    <article key={item.id} className="mistake-card">
                      <p className="mistake-topic">{item.topic}</p>
                      <h3>{item.prompt}</h3>
                      <p>
                        Tvoj odgovor: <strong>{selected?.text ?? "Nema"}</strong>
                      </p>
                      <p>
                        Točan odgovor: <strong>{correct?.text}</strong>
                      </p>
                      <p className="mistake-explanation">{item.explanation}</p>
                    </article>
                  );
                })
            )}
          </div>

          <div className="actions">
            <button className="button button-primary" onClick={() => handleRestart("all")}>
              Novi puni kviz
            </button>
            <button
              className="button button-secondary"
              disabled={wrongCount === 0}
              onClick={() => handleRestart("wrong")}
            >
              Ponovi samo kriva
            </button>
          </div>
        </section>
      </main>
    );
  }

  const correctOptionId = selectedOptionId ? currentQuestion.correctId : null;

  return (
    <main className={studyPanel ? "app-shell app-shell-notes" : "app-shell"}>
      <div className="study-layout">
      <section className="panel quiz-panel">
        <div className="quiz-header">
          <div>
            <p className="eyebrow">1. kolokvij</p>
            <h1 className="quiz-title">Kviz znanja</h1>
          </div>

          <div className="header-controls">
            <button
              className={studyPanel === "notes" ? "icon-button icon-button-active" : "icon-button"}
              type="button"
              aria-label={studyPanel === "notes" ? "Sakrij natuknice" : "Prikazi natuknice"}
              title={studyPanel === "notes" ? "Sakrij natuknice" : "Prikazi natuknice"}
              onClick={() => setStudyPanel((value) => (value === "notes" ? null : "notes"))}
            >
              <BookIcon />
            </button>
            <button
              className={studyPanel === "pdf" ? "icon-button icon-button-active" : "icon-button"}
              type="button"
              aria-label={studyPanel === "pdf" ? "Sakrij PDF" : "Prikazi PDF"}
              title={studyPanel === "pdf" ? "Sakrij PDF" : "Prikazi PDF"}
              onClick={() => setStudyPanel((value) => (value === "pdf" ? null : "pdf"))}
            >
              <PdfIcon />
            </button>

            <div className="mode-switch" aria-label="Nacin redoslijeda pitanja">
              <button
                className={questionMode === "sequential" ? "mode-button mode-button-active" : "mode-button"}
                type="button"
                onClick={() => handleModeChange("sequential")}
              >
                Slijedno
              </button>
              <button
                className={questionMode === "random" ? "mode-button mode-button-active" : "mode-button"}
                type="button"
                onClick={() => handleModeChange("random")}
              >
                Random
              </button>
            </div>
          </div>
        </div>

        <div className="progress-block">
          <div className="progress-copy">
            <span>Napredak</span>
            <strong>
              {currentIndex + 1}/{questions.length}
            </strong>
          </div>
          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="question-card">
          <span className="topic-badge">{currentQuestion.topic}</span>
          <h2>{currentQuestion.prompt}</h2>

          <div className="options-grid">
            {currentQuestion.options.map((option, optionIndex) => {
              const isSelected = selectedOptionId === option.id;
              const isCorrect = correctOptionId === option.id;
              const displayLetter = String.fromCharCode(65 + optionIndex);
              const stateClass = selectedOptionId
                ? isCorrect
                  ? "option-correct"
                  : isSelected
                    ? "option-wrong"
                    : "option-neutral"
                : "";

              return (
                <button
                  key={option.id}
                  className={`option-card ${stateClass}`}
                  disabled={Boolean(selectedOptionId)}
                  onClick={() => handleSelect(option.id)}
                >
                  <span className="option-letter">{displayLetter}</span>
                  <span>{option.text}</span>
                </button>
              );
            })}
          </div>

          {selectedOptionId ? (
            <div className="feedback-box">
              <p className={selectedOptionId === currentQuestion.correctId ? "feedback-good" : "feedback-bad"}>
                {selectedOptionId === currentQuestion.correctId
                  ? "Točno. Ovo je pogodak."
                  : "Netočno. Pogledaj objašnjenje prije idućeg pitanja."}
              </p>
              <p>{currentQuestion.explanation}</p>
            </div>
          ) : (
            <div className="feedback-box feedback-idle">
              <p>Odaberi odgovor. Nakon toga će se prikazati objašnjenje i tipka za nastavak.</p>
            </div>
          )}
        </div>

        <div className="actions">
          <button className="button button-secondary" onClick={() => handleRestart("all")}>
            Restart
          </button>
          <button
            className="button button-secondary"
            disabled={!selectedOptionId}
            onClick={handleRetryQuestion}
          >
            Ponovi pitanje
          </button>
          <button
            className="button button-primary"
            disabled={!selectedOptionId}
            onClick={handleNext}
          >
            {currentIndex === questions.length - 1 ? "Završi kviz" : "Sljedeće pitanje"}
          </button>
        </div>
      </section>

      {studyPanel === "notes" ? <NotesPanel onClose={() => setStudyPanel(null)} /> : null}
      {studyPanel === "pdf" ? <PdfPanel onClose={() => setStudyPanel(null)} /> : null}
      </div>

      {pendingMode ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={cancelModeChange}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mode-change-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <p className="eyebrow">Promjena moda</p>
            <h2 id="mode-change-title">Krenuti ispočetka?</h2>
            <p>
              Promjena moda na <strong>{pendingMode === "random" ? "Random" : "Slijedno"}</strong> resetira
              trenutni kviz i vraca te na prvo pitanje.
            </p>
            <div className="modal-actions">
              <button className="button button-secondary" type="button" onClick={cancelModeChange}>
                Odustani
              </button>
              <button className="button button-primary" type="button" onClick={confirmModeChange}>
                Kreni ispocetka
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}

export default App;
