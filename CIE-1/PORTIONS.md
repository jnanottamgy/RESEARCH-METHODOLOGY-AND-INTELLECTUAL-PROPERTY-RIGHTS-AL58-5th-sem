# CIE-1 Portions — AL58 RMIPR

> **Current exam: CIE-1 (Internal Test 1)**: 30 marks, assesses **CO1, CO2, CO3**.
> Portions: **Unit I + Unit II + Unit III up to Data Analysis** (class slides 1–54).

Full syllabus: [`../syllabus/SYLLABUS.md`](../syllabus/SYLLABUS.md)

---

## 1. Portions at a glance

| Unit | Block | In CIE-1? | CO | Primary textbook |
|---|---|---|---|---|
| I | Introduction to Research (meaning, objectives, types, ethics, misconduct) | Yes | CO1 | Kothari & Garg; Deb, Dey & Balas |
| I | Literature Review & Technical Reading | Yes | CO1 | Deb, Dey & Balas |
| I | Citations, Acknowledgments & Attributions | Yes | CO1 | Deb, Dey & Balas |
| II | Research Design & its concepts | Yes | CO2 | Kothari & Garg |
| II | Experimental Designs (CRD, RBD, LSD, Factorial) | Yes | CO2 | Kothari & Garg |
| III | Method of Data Collection (Primary & Secondary) | Yes | CO3 | Kothari & Garg |
| III | Sampling Design (fundamentals, measurement & scaling, criteria, characteristics, types) | Yes | CO3 | Kothari & Garg |
| III | **Data Analysis** (hypothesis testing, Chi-square, ANOVA, ANOCOVA) | **No** (slides 55–80) | CO3 | Kothari & Garg |
| IV | IPR, TRIPS, PCT, Patents | No (CIE-2) | CO4 | Wadehra |
| V | Designs, Trademarks, Copyrights | No (CIE-2) | CO5 | Wadehra |

### Boundary note: "Unit III till Data Analysis" (confirmed)
Confirmed against the Unit III deck: **slide 54 is "Scaling Technique – Rating scale"**, the last slide before the "Data Analysis" divider on slide 55. So the CIE-1 portion is Unit III slides 1–54: Data Collection, Sampling Design, and Measurement & Scaling (up to the rating scale). Slides 55–80 (testing of hypotheses, Type I/II errors, level of significance, z/t tests, Chi-square, ANOVA, ANOCOVA) are **out**.
Exception: null vs alternative and directional vs non-directional hypotheses are taught in the **Unit II** deck (slides 13–16), so they are in scope through Unit II.

### Where CIE-1 material counts
| Component | Marks | Draws from CIE-1 portion? |
|---|---|---|
| Internal Test 1 | 30 (averaged with Test 2 → 30) | **Fully** (CO1–CO3) |
| Assignment | 10 | **Fully** (CO1, CO2) |
| Quiz | 10 | Partly (CO3, plus CO4/CO5 from CIE-2) |
| SEE | 100 | Yes (all five COs) |

---

## 2. Topic map

### UNIT I: Research Methodology (CO1)

**A. Introduction**
| Syllabus item | What it covers |
|---|---|
| Meaning of Research | Systematic, scientific search for new knowledge; the research process (define problem → hypothesis → collect & analyse data → conclude → test conclusions) |
| Objectives of Research | Four classic objectives: Exploratory/Formulative, Descriptive, Diagnostic, Hypothesis-testing (causal) |
| Types of Research | Descriptive vs Analytical · Applied vs Fundamental · Quantitative vs Qualitative · Conceptual vs Empirical · plus others (one-time vs longitudinal, lab/field/simulation, historical, exploratory vs formalised) |
| Ethics in Research | Honesty, objectivity, integrity, openness, confidentiality, respect for IP, responsible publication, protection of human/animal subjects |
| Types of Research Misconduct | **FFP**: Fabrication, Falsification, Plagiarism; also duplicate publication/self-plagiarism, gift/ghost authorship, undisclosed conflict of interest, citation manipulation |

**B. Literature Review & Technical Reading**
| Syllabus item | What it covers |
|---|---|
| Literature Review & Technical Reading | Why review (state of the art, gap, avoid duplication); sources (journals, conferences, patents, theses, standards); how to read a paper efficiently |
| New and Existing Knowledge | Research = existing knowledge + a novel contribution; locating the gap |
| Analysis and Synthesis of Prior Art | *Analysis* breaks each work down (problem, method, result, limitation); *synthesis* combines works into a coherent picture of trends and gaps. "Prior art" is also the patent term, which links forward to Unit IV |
| Bibliographic Databases | Scopus, Web of Science, IEEE Xplore, ScienceDirect, Google Scholar; patent DBs (Google Patents, Espacenet, WIPO Patentscope); citation tracking, metrics |
| Conceptualizing Research | Broad area → specific researchable problem → research question/objectives → hypothesis |
| Critical and Creative Reading | *Critical*: question assumptions, evaluate evidence and method, spot bias. *Creative*: new connections, extensions, applications |

**C. Citations**
| Syllabus item | What it covers |
|---|---|
| Functions and Attributes | Give credit, support claims, let readers verify, avoid plagiarism; accuracy, completeness, consistent style (IEEE/APA/Harvard) |
| Impact of Title and Keywords on Citations | Discoverability: concise, informative titles and well-chosen keywords → found in searches → cited more |
| Knowledge flow through Citations | Citation networks; backward (references) and forward (cited-by) tracing; how ideas evolve |
| Acknowledgments and Attributions | Who gets authorship vs acknowledgment (funding, technical help); crediting ideas, data, figures |

### UNIT II: Research Design (CO2)

**A. Research Design**
| Syllabus item | What it covers |
|---|---|
| Need for Research Design | Blueprint for collection, measurement and analysis of data; maximum information for minimum effort, time and money; features of a good design (flexible, appropriate, efficient, economical, minimises bias) |
| Variable | A concept that takes different quantitative values; continuous vs discrete |
| Dependent & Independent Variables | Dependent = the outcome; independent = the antecedent (e.g. height depends on age) |
| Extraneous Variable | An independent variable unrelated to the study's purpose that still affects the dependent variable; its effect = *experimental error* |
| Control *(syllabus: "Common Control")* | Designing the study to minimise the effect of extraneous variables |
| Confounded Relationship | When the dependent variable is not free from extraneous influence, the DV–IV relationship is "confounded" |
| Research Hypothesis | A predictive statement relating an IV to a DV, testable by scientific methods (needs at least one IV and one DV) |
| Experimental & Control Groups | Control group = usual conditions; experimental group = special condition/treatment |
| Treatments | The different conditions applied to the groups |

**B. Experimental Designs**: the base is Fisher's three principles: **Replication, Randomisation, Local Control**
| Design | Principles used | Key idea | Analysed by |
|---|---|---|---|
| Completely Randomised Design (CRD) | Replication + Randomisation | Units randomly assigned to treatments; for homogeneous units | One-way ANOVA |
| Randomised Block Design (RBD) | + Local control | Units grouped into homogeneous *blocks*; treatments randomised within each block | Two-way ANOVA |
| Latin Square Design (LSD) | + Local control in two directions | n × n grid; each treatment once per row and once per column; removes two extraneous factors (agricultural origin) | ANOVA (rows, columns, treatments) |
| Factorial Design | n/a | More than one factor at a time; simple (2 factors) vs complex (3+); gives **main effects + interaction effects** | ANOVA |

### UNIT III: Data Collection & Sampling (CO3)

**A. Method of Data Collection**
| Syllabus item | What it covers |
|---|---|
| Primary Data | Collected fresh, first-hand: Observation · Interview (personal/telephone) · Questionnaire (mailed) · Schedule (filled by enumerator) · others (consumer panels, audits, projective techniques, depth interviews, content analysis) |
| Secondary Data | Already collected by others: published / unpublished; check **reliability, suitability, adequacy** before use |
| Choosing a method | Nature and scope of enquiry, funds, time, precision required |

**B. Sampling Design**
| Syllabus item | What it covers |
|---|---|
| Sampling fundamentals | Census vs sample; universe, sampling frame, sampling unit, sample size; parameter vs statistic; sampling vs non-sampling error; sampling distribution, standard error, central limit theorem; estimation and sample size |
| Measurement | Scales: **Nominal, Ordinal, Interval, Ratio**; sources of measurement error; tests of sound measurement: **Validity, Reliability, Practicality** |
| Scaling Techniques | Rating (graphic, itemised) and Ranking (paired comparison, rank order) scales; scale construction: Arbitrary, Differential (Thurstone), Summated (Likert), Cumulative (Guttman), Factor scales (semantic differential, MDS) |
| Criteria of Selecting a Sampling Procedure | Two costs: data collection vs incorrect inference; two causes of wrong inference: **systematic bias** (bad frame, faulty instrument, non-response, indeterminacy, reporting bias) and **sampling error** |
| Characteristics of a Good Sample Design | Representative · small sampling error · viable within budget · controls systematic bias · results generalisable with confidence |
| Types of Sample Design | **Probability**: simple random, systematic, stratified, cluster/area, multi-stage. **Non-probability**: convenience, judgement/purposive, quota |

**C. Data Analysis**: *not in CIE-1 (slides 55–80); see the note above*
Testing of Hypotheses (H₀, H₁, Type I & II errors, Level of Significance) · tests for Mean, Variance, Proportion · Chi-square · One-way ANOVA · ANOCOVA.

---

## 3. How the CIE-1 portion fits together

The three units describe one research workflow in order:

```
Unit I                      Unit II                          Unit III
Literature review  ──►  Research hypothesis  ──►  Collect data  ──►  Sample  ──►  (Analyse)
find the gap            IV, DV, extraneous,       primary vs        how many,     H₀/H₁, ANOVA:
conceptualise           control, treatments       secondary         which ones    tests the
the problem             CRD / RBD / LSD /                                         Unit II hypothesis
                        Factorial                                                 & designs
```

- The **research hypothesis** (Unit II) becomes the formal **H₀ / H₁** in Data Analysis.
- **CRD → one-way ANOVA, RBD → two-way ANOVA**: the Unit II designs are analysed with the Unit III tools.
- **Prior art** (Unit I) appears again as a patent concept in Unit IV.

## 4. Common internal-test question forms for these units
These are the usual question shapes, not a prediction of the paper.
- **Define / explain with example**: research, research design, extraneous variable, confounded relationship, treatments
- **Differentiate**: applied vs fundamental, descriptive vs analytical, primary vs secondary data, questionnaire vs schedule, probability vs non-probability sampling, CRD vs RBD, analysis vs synthesis, critical vs creative reading, experimental vs control group
- **List and explain**: objectives of research, types of misconduct, measurement scales, characteristics of a good sample design, criteria for selecting a sampling procedure
- **Draw / illustrate**: a Latin square layout, RBD blocking, a 2 × 2 factorial

---

## Study material
- **[`RMIPR-CIE1-Must-Learn.pdf`](RMIPR-CIE1-Must-Learn.pdf)**: 21 must-learn questions (7 per unit) with exam-ready 4/5/6-mark answers, 13 rapid-fire short answers, 10 L3 scenario drills, an analysis of the Nov 2024 CIE-1 paper, a study plan and a one-page cheat sheet.
- Source: [`must-learn/guide.html`](must-learn/guide.html). Rebuild with `node must-learn/build.js` (needs Playwright).
