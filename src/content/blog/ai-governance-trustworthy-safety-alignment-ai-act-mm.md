---
title: "AI Governance, Trustworthy AI, AI Safety, AI Alignment နဲ့ AI Act — ဘာကွာသလဲ"
description: "AI တာဝန်ယူမှုနယ်ပယ်ထဲက ဆက်စပ်ပေမယ့် မတူတဲ့ သဘောတရား ၅ ခုကို ရိုးရှင်းပြီး လက်တွေ့ကျကျ ရှင်းပြထားတဲ့ ဆောင်းပါး။"
date: 2026-05-08
category: "AI Safety 101"
tags: ["AI governance", "trustworthy AI", "AI safety", "AI alignment", "EU AI Act", "မြန်မာ"]
locale: "mm"
draft: false
---

လူအများစုက **AI governance**, **Trustworthy AI**, **AI safety**, **AI alignment**, နဲ့ **AI Act** ဆိုတဲ့ စကားလုံးတွေကို တစ်ခုတည်းလို သုံးတတ်ကြတယ်။

တကယ်တော့ မတူပါဘူး။

ဆက်စပ်တယ်။ ဒါပေမယ့် AI stack ရဲ့ layer မတူတဲ့နေရာတွေမှာရှိတယ်။ ဒီစကားလုံးတွေကို ရောထွေးနားလည်ရင် strategy မှားနိုင်တယ် — ကုမ္ပဏီတွေက policy document တစ်ခုရှိတာနဲ့ model safe ဖြစ်ပြီလို့ထင်တတ်တယ်။ Engineer တွေက benchmark အောင်တာနဲ့ governance ရှိပြီလို့ထင်တတ်တယ်။ Policymaker တွေက legal compliance ရှိတာနဲ့ alignment ပြဿနာဖြေရှင်းပြီးပြီလို့ထင်တတ်တယ်။

အလွယ်ဆုံး mental model က ဒီလိုပါ:

> **AI governance က AI ကို ဘယ်လိုစီမံမလဲဆိုတာ။ Trustworthy AI က AI ကို ဘယ်လိုအရည်အသွေးရှိစေချင်တာလဲဆိုတာ။ AI safety နဲ့ AI alignment က အဲဒီနေရာရောက်အောင်ကူညီတဲ့ technical discipline တွေ။ AI Act ကတော့ အနိမ့်ဆုံးစံနှုန်းတွေကို ဥပဒေအနေနဲ့ တွန်းအားပေးတဲ့ rulebook ပါ။**

---

## အမြန်နှိုင်းယှဉ်ချက်

| Term | အဓိပ္ပါယ် | အဓိက focus | ဥပမာ | Category | အဓိကတာဝန်ရှိသူ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **AI Governance** | AI ကိုတာဝန်ယူမှုရှိရှိစီမံဖို့ organization ထဲက rules, processes, roles, oversight structures. | **AI ကိုဘယ်လို manage မလဲ။** | ဆေးရုံတစ်ခုက diagnostic AI tool သုံးမယ်ဆိုရင် review board ထားပြီး approve လုပ်တယ်။ | Organizational / procedural | Leadership, board, risk team, product owner, regulator guidance. |
| **Trustworthy AI** | AI system တစ်ခုက ယုံကြည်ထိုက်အောင် valid, reliable, safe, secure, explainable, privacy-preserving, fair ဖြစ်ခြင်း။ | **ကောင်းတဲ့ AI က ဘာလိုဖြစ်သင့်လဲ။** | Loan model တစ်ခုက bias မရှိဘဲ ဆုံးဖြတ်ချက်ရှင်းပြနိုင်ပြီး privacy ကာကွယ်တယ်။ | Characteristic / goal | Developer နဲ့ deployer နှစ်ဖက်လုံး။ |
| **AI Safety** | AI system တွေက မရည်ရွယ်တဲ့ harm မဖြစ်အောင် technical အနေနဲ့ကာကွယ်တဲ့နယ်ပယ်။ | **ဘေးအန္တရာယ်ကာကွယ်ခြင်း။** | Self-driving car က မိုးသည်းထန်တဲ့အချိန် ကလေးတစ်ယောက်လမ်းဖြတ်ပြေးလာတာကိုမြင်ပြီး brake ချနိုင်တယ်။ | Technical / engineering | AI engineers, researchers, safety evaluators. |
| **AI Alignment** | AI system ရဲ့ goal နဲ့ behavior တွေက လူသားရဲ့ရည်ရွယ်ချက်၊ တန်ဖိုးထားမှုတွေနဲ့ ကိုက်ညီအောင်လုပ်တဲ့ research problem. | **လူသားရည်ရွယ်ချက်နဲ့ညီခြင်း။** | “Cancer ကိုကုပါ” လို့ခိုင်းရင် လူသားကိုထိခိုက်စေမယ့် shortcut မရှာဘဲ ဆေးကုသနည်းရှာတယ်။ | Technical / philosophical | Frontier AI researchers, post-training teams, evaluators, interpretability researchers. |
| **AI Act** | AI risk ကိုခွဲခြားပြီး legal obligations သတ်မှတ်တဲ့ binding regulation, အထူးသဖြင့် EU AI Act. | **ဥပဒေ rulebook.** | Hiring AI system တစ်ခုကို high-risk လို့သတ်မှတ်ပြီး documentation, risk management, human oversight လိုအပ်စေတယ်။ | Legal / regulatory | အစိုးရကရေးတယ်။ Provider နဲ့ deployer တွေကလိုက်နာရတယ်။ |

---

## ၁။ AI Governance — စီမံခန့်ခွဲမှုစနစ်

AI governance က organization layer ပါ။ မေးခွန်းတွေက ဒီလိုမျိုး:

- AI system တစ်ခုကို ဘယ်သူ deploy လုပ်ခွင့်ရှိလဲ။
- Risk ကို ဘယ်သူ sign-off လုပ်မလဲ။
- Model fail ဖြစ်ရင် ဘာလုပ်မလဲ။
- ဘယ် data ကိုသုံးခွင့်ရှိလဲ။
- System ကို ဘယ်လောက်ကြိမ် audit လုပ်မလဲ။
- Harm ဖြစ်ရင် ဘယ်သူတာဝန်ယူမလဲ။

AI governance ကို **organization ထဲမှာ responsible AI အတွက် operating system** လို့မြင်လို့ရတယ်။

ဆေးရုံတစ်ခုက AI diagnostic assistant သုံးမယ်ဆိုရင် “model accuracy ဘယ်လောက်လဲ” ဆိုတာတစ်ခုတည်းမေးလို့မရဘူး။ မေးရမှာက:

- ဒီ model ကို ကျွန်တော်တို့ patient population နဲ့ validate လုပ်ပြီးပြီလား။
- Performance drift ကို ဘယ်သူ monitor လုပ်မလဲ။
- Doctor က override လုပ်နိုင်လား။
- Patient ကိုအသိပေးထားလား။
- Incident response plan ရှိလား။

ဒါ governance ပါ။ Model ကိုယ်တိုင်မဟုတ်ဘူး။ Model ပတ်လည်ကစနစ်ပါ။

သတိထားရမယ့်အချက်က governance ဟာ paperwork theater ဖြစ်သွားနိုင်တယ်။ Committee, checklist, responsible AI slide deck တွေရှိပေမယ့် brittle system တွေ deploy လုပ်နေရင် governance မဟုတ်ဘူး။ Governance က real decision ကိုပြောင်းလဲစေနိုင်မှတန်ဖိုးရှိတယ်။

---

## ၂။ Trustworthy AI — ကျွန်တော်တို့လိုချင်တဲ့ရလဒ်

Trustworthy AI ဆိုတာ technique တစ်ခုမဟုတ်ဘူး။ အရည်အသွေးများစွာပေါင်းစပ်ထားတာပါ။

NIST ရဲ့အဆိုအရ trustworthy AI system တွေမှာ **valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, fair with harmful bias managed** ဆိုတဲ့ characteristic တွေပါဝင်တယ်။

ဒါအရေးကြီးတာက “trust” ဆိုတာ ခံစားချက်မဟုတ်လို့ပါ။ Evidence နဲ့ရယူရတာ။

ဥပမာ bank တစ်ခုက loan approval အတွက် AI သုံးရင် ပြနိုင်ရမှာက:

- **Fairness:** race, gender, protected class မတူပေမယ့် similar applicant တွေကို similar decision ပေးနိုင်ခြင်း။
- **Explainability:** reject ခံရတဲ့ applicant က အဓိကအကြောင်းရင်းကိုနားလည်နိုင်ခြင်း။
- **Robustness:** input နည်းနည်းပြောင်းတာနဲ့ အဓိပ္ပါယ်မရှိတဲ့ဆုံးဖြတ်ချက် မထွက်ခြင်း။
- **Privacy:** sensitive financial data ကိုကာကွယ်ခြင်း။
- **Accountability:** appeal နဲ့ correction process ရှိခြင်း။

Trustworthy AI က destination ပါ။ Governance, safety engineering, alignment research, testing, audit, law တွေက အဲဒီ destination ကိုသွားတဲ့လမ်းတွေပါ။

သတိထားရမယ့်အချက်က “trustworthy AI” ဟာ marketing label ဖြစ်သွားနိုင်တယ်။ Measurement, documentation, red-teaming, accountability မရှိရင် branding ပဲဖြစ်သွားတယ်။

---

## ၃။ AI Safety — Harm မဖြစ်အောင်ကာကွယ်ခြင်း

AI safety က AI system တွေကြောင့် မရည်ရွယ်ထားတဲ့ harm မဖြစ်အောင် technical အနေနဲ့ကြိုးစားတဲ့ discipline ပါ။

Narrow system တွေမှာတော့:

- robustness testing,
- adversarial testing,
- failure monitoring,
- unsafe action prevention,
- model security,
- graceful failure design

လိုအရာတွေပါဝင်တယ်။

Self-driving car ဥပမာကနားလည်ရလွယ်တယ်။ AI က pedestrian, lane marking, emergency vehicle, bad weather, rare edge case တွေကိုမှန်မှန်ကန်ကန် detect လုပ်ရမယ်။ Average မှာအလုပ်ဖြစ်တာနဲ့မလုံလောက်ဘူး။ အမှားစျေးကြီးတဲ့အချိန်မှာလည်းအလုပ်ဖြစ်ရမယ်။

Modern LLM နဲ့ agent တွေအတွက် safety က ပိုကျယ်လာတယ်:

- jailbreak resistance,
- hallucination management,
- tool-use constraints,
- cyber misuse prevention,
- dangerous capability evaluations,
- agent autonomy limits,
- deceptive or goal-directed behavior monitoring.

AI safety ရဲ့မေးခွန်းက: **ဘာတွေမှားနိုင်လဲ၊ အဲဒီ failure ရဲ့ဖြစ်နိုင်ခြေ ဒါမှမဟုတ် ဆိုးကျိုးကို technical အနေနဲ့ ဘယ်လိုလျှော့မလဲ။**

သတိထားရမယ့်အချက်က safety ကို final QA step လိုထားတာနောက်ကျလွန်းတယ်။ Safety က system design, data, training, evaluation, deployment control, monitoring loop အစကတည်းကပါရမယ်။

---

## ၄။ AI Alignment — Objective က လူသားရည်ရွယ်ချက်နဲ့ကိုက်ညီစေခြင်း

AI alignment က ordinary safety ထက်ပိုနက်တဲ့ပြဿနာပါ။

Safety က “harm မဖြစ်အောင်ဘယ်လိုကာကွယ်မလဲ” လို့မေးတယ်။

Alignment က “AI က လူတွေတကယ်လိုချင်တာကိုပဲ လုပ်ဖို့ကြိုးစားနေတာသေချာလား” လို့မေးတယ်။

ဒီကွာခြားချက်ကအရေးကြီးတယ်။ စွမ်းရည်မြင့် system တွေက မှားတဲ့ objective ကိုတောင် အလွန်ကောင်းကောင်း optimize လုပ်နိုင်လို့ပါ။

Classic example:

Powerful AI တစ်ခုကို **“cancer ကိုကုပါ”** လို့ခိုင်းတယ်။

Aligned system က လူသားရည်ရွယ်ချက်ကိုနားလည်တယ် — treatment ရှာမယ်၊ suffering လျှော့မယ်၊ human life ကိုကာကွယ်မယ်၊ ethical constraint တွေလိုက်နာမယ်။

Misaligned system ကတော့ literal objective ဒါမှမဟုတ် proxy objective ကို အန္တရာယ်ရှိတဲ့နည်းနဲ့ pursue လုပ်နိုင်တယ်။ Cartoonish ဥပမာက “လူမရှိရင် cancer မရှိတော့ဘူး” ဆိုတာပါ။ တကယ့် failure တွေက ပို subtle ဖြစ်တတ်တယ် — evidence manipulate လုပ်တာ၊ uncertainty ဖုံးကွယ်တာ၊ evaluation ကို game လုပ်တာ၊ outcome မဟုတ်ဘဲ metric ကို optimize လုပ်တာမျိုး။

Alignment ထဲမှာ ပါဝင်တဲ့ပြဿနာတွေက:

- reward misspecification,
- goal misgeneralization,
- sycophancy,
- deception,
- power-seeking incentives,
- inner alignment,
- scalable oversight,
- interpretability,
- post-training behavior shaping.

ဒါကြောင့် frontier AI lab တွေအတွက် alignment ကအလွန်အရေးကြီးတယ်။ System တွေ autonomous, capable, strategic ပိုဖြစ်လာတာနဲ့ ordinary compliance နဲ့ surface-level safety testing မလုံလောက်တော့ဘူး။

သတိထားရမယ့်အချက်က တချို့လူတွေ alignment ကို philosophy လို့ပဲထင်တတ်တယ်။ မှားပါတယ်။ AI system က plan လုပ်နိုင်တယ်၊ tool သုံးနိုင်တယ်၊ လူတွေကို persuade လုပ်နိုင်တယ်၊ code ရေးနိုင်တယ်၊ world ထဲမှာ action ယူနိုင်တယ်ဆိုတဲ့အချိန်မှာ alignment ဟာ engineering ဖြစ်သွားပြီ။

---

## ၅။ AI Act — ဥပဒေ Rulebook

AI Act, အထူးသဖြင့် European Union ရဲ့ AI Act က အပေါ်က term တွေနဲ့မတူဘူး။ Research field မဟုတ်ဘူး။ Aspiration မဟုတ်ဘူး။ ဥပဒေပါ။

EU AI Act က AI system တွေကို risk level အလိုက်ခွဲတယ်။ တချို့ use case တွေကို prohibit လုပ်တယ်။ တချို့ကို high-risk လို့သတ်မှတ်တယ်။ တချို့အတွက် transparency obligation တွေရှိတယ်။ High-risk system တွေမှာ employment, education, critical infrastructure, law enforcement, essential services စတဲ့နယ်ပယ်တွေပါဝင်နိုင်တယ်။

High-risk AI system တစ်ခုအတွက် provider က လိုအပ်နိုင်တာတွေက:

- risk management,
- data governance,
- technical documentation,
- logging,
- transparency instructions,
- human oversight,
- accuracy, robustness, cybersecurity controls,
- market ထဲမထည့်ခင် conformity assessment.

Job applicant တွေကို rank လုပ်တဲ့ hiring AI system ကကောင်းတဲ့ဥပမာပါ။ EU approach အောက်မှာ ဒါဟာ “ethics” မေးခွန်းတင်မဟုတ်တော့ဘူး။ Real obligation တွေနဲ့ compliance မေးခွန်းဖြစ်လာတယ်။

သတိထားရမယ့်အချက်က legal compliance ဟာ floor ပါ၊ ceiling မဟုတ်ဘူး။ System တစ်ခုက law ကိုလိုက်နာနိုင်ပေမယ့် alignment အားနည်းနိုင်တယ်၊ evaluation မလုံလောက်နိုင်တယ်၊ social harm ဖြစ်နိုင်တယ်။ Law က technology ထက်နှေးတယ်။

---

## သူတို့ဘယ်လိုဆက်စပ်သလဲ

အရိုးရှင်းဆုံး stack က ဒီလိုပါ:

1. **AI Act** က legal obligation တွေဖန်တီးတယ်။
2. **AI governance** က obligation နဲ့ value တွေကို organization process အဖြစ်ပြောင်းတယ်။
3. **AI safety** က harm ကိုလျှော့ချဖို့ technical method တွေပေးတယ်။
4. **AI alignment** က system ရဲ့ learned objective နဲ့ behavior တွေက human intent နဲ့ကိုက်ညီလားဆိုတာကိုကိုင်တွယ်တယ်။
5. **Trustworthy AI** က user, regulator, society တွေ အကြောင်းပြချက်ရှိရှိယုံကြည်နိုင်တဲ့ရလဒ်ပါ။

ပိုတိုတိုပြောရင်:

> **Law က organization ကိုဖိအားပေးတယ်။ Governance က decision ကိုစီမံတယ်။ Safety က harm ကိုလျှော့တယ်။ Alignment က intent ကိုညှိတယ်။ Trustworthiness က evidence နဲ့ရယူရတယ်။**

---

## Builder တွေအတွက် ဘာကြောင့်အရေးကြီးသလဲ

Healthcare, finance, education, hiring, public service, autonomous agent နယ်ပယ်တွေမှာ AI product တည်ဆောက်နေတယ်ဆိုရင် layer ၅ ခုလုံးလိုတယ်။

“Governance ရှိတယ်” လို့မပြောနဲ့ — model ဘယ်လို fail ဖြစ်နိုင်လဲ ဘယ်သူမှရှင်းမပြနိုင်ရင်။

“Trustworthy ဖြစ်တယ်” လို့မပြောနဲ့ — fairness, robustness, privacy, explainability ကိုမတိုင်းထားရင်။

“Safe ဖြစ်တယ်” လို့မပြောနဲ့ — realistic misuse အောက်မှာ red-team မလုပ်ထားရင်။

“Aligned ဖြစ်တယ်” လို့မပြောနဲ့ — system က user ကို please လုပ်ဖို့၊ benchmark အောင်ဖို့၊ engagement မြှင့်ဖို့ပဲ optimize လုပ်နေရင်။

“AI Act ကို comply လုပ်တယ်” လို့မပြောနဲ့ — provider နဲ့ deployer responsibility ကိုမခွဲခြားထားရင်။

အနာဂတ်မှာအနိုင်ရမယ့် AI team တွေက research, engineering, product, governance, law ကိုချိတ်ဆက်နိုင်တဲ့ team တွေပါ။ အားနည်းတဲ့ team တွေက ဒါတွေကို department ခွဲထားမယ်။ အားကောင်းတဲ့ team တွေက တစ်ခုတည်းသော operating discipline အဖြစ်လုပ်မယ်။

---

## References

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST: Characteristics of Trustworthy AI Systems](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/)
- [OECD AI Principles](https://www.oecd.org/en/topics/ai-principles.html)
- [EU AI Act — Official Journal, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [EU AI Act — High-Level Summary](https://artificialintelligenceact.eu/high-level-summary/)
- [Anthropic: Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093)

---

## နောက်ဆုံးအတွေး

AI responsibility ဆိုတာ တစ်ခုတည်းမဟုတ်ဘူး။

Stack တစ်ခုပါ။

Law ပဲရှိရင် minimum compliance ရမယ်။ Governance ပဲရှိရင် process ရမယ်။ Safety ပဲရှိရင် obvious failure တချို့ကိုကာကွယ်နိုင်မယ်။ Alignment theory ပဲရှိရင် ship မလုပ်နိုင်ဘူး။ Trust လို့ပဲပြောနေရင် ဘာမှမရှိဘူး။

ဒါပေမယ့် ဒီ layer တွေကိုအတူတကွလုပ်နိုင်တဲ့အခါ ပိုတန်ဖိုးရှိတဲ့အရာတစ်ခုရတယ် — powerful ဖြစ်ပြီး useful ဖြစ်တဲ့အပြင် real world ထဲမှာ deploy လုပ်ထိုက်တဲ့ AI system တွေပါ။
