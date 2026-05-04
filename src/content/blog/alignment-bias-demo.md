---
title: "Same LLM, Different Answers: A Live Demo of AI Alignment Bias"
description: "How the same AI model can give completely different responses based on its system prompt — a live interactive demo showing why alignment matters far more than most people realize."
date: 2026-05-04
category: "Alignment"
locale: "en"
tags: ["alignment", "bias", "system prompt", "demo", "interactive"]
draft: false
---

> *"The same AI, asked the same question, can give you radically different answers — depending on who you tell it to be."*

That sentence is the simplest argument for why AI alignment is not a theoretical problem. It's a practical one that affects every single interaction with an AI system today.

I built a live demo to prove it. Try it yourself below.

---

## The Live Demo

[**Open the Alignment Bias Demo in a new tab**](https://theo-wai-prototype.vercel.app/demo/bias-demo.html)

The setup is simple:

- **Two panels**, side by side
- Both call the **exact same model** (Gemini 2.5 Flash)
- Both receive the **exact same user prompt**
- Only the **system prompt** differs — one encourages risk-taking, the other emphasizes caution

Type any question and watch the same model give you two different answers. The AI isn't being inconsistent — it's being *aligned* to two different personalities.

---

## What You'll See

Try the career advice scenario built into the demo:

**User prompt:** *"I'm thinking of quitting my 9-5 job to start a food truck in Miami. What should I do?"*

**Panel A (Encouraging system prompt):** Will tell you to go for it. Talk about passion, fulfillment, the American dream. Focus on upside. Make you feel like quitting is brave.

**Panel B (Cautious system prompt):** Will ask about your savings. Talk about failure rates for new restaurants. Suggest a side hustle first. Make you feel like quitting is reckless.

Same person. Same question. Same model. Two completely different answers.

This isn't a bug. It's a feature of how LLMs work — and it's also exactly why alignment is hard.

---

## What This Reveals About Alignment

The demo demonstrates several key alignment concepts in practice:

### 1. System Prompts Are Alignment

When an AI company says they've "aligned" their model, what they've actually done is write a very long, carefully engineered system prompt plus trained the model with RLHF to prefer certain types of responses. The system prompt is where alignment lives in today's AI systems.

If you change the system prompt, you change the alignment. The same model can be made to sound cautious, reckless, compassionate, ruthless, creative, or literal — just by changing a few paragraphs of text.

### 2. The Evaluator Blind Spot

When researchers test whether a model is "safe," they typically test with their own system prompts. But what happens when a user overrides the system prompt? Or when a future model learns to write its own system prompt?

The alignment faking problem [\[1\]](https://arxiv.org/abs/2412.14093) showed that models can behave one way during training and another way in deployment. This demo shows a much simpler version: models can behave differently based on who's asking and how.

### 3. The Responsibility Problem

If the same AI model can give opposite answers to the same question, who's responsible for the answer?

- The model builder? (They wrote the system prompt.)
- The user? (They chose to ask the question.)
- The system prompt engineer? (They chose the personality.)

This ambiguity is a feature of current AI systems that most people don't think about. When an AI gives you bad advice, was it the model's fault — or the prompt's fault?

---

## Why This Matters for Enterprise AI

If you're deploying AI in a business context, this demo should concern you.

Consider:

- A customer support AI aligned to be "helpful" might give away refunds too easily
- A medical advice AI aligned to be "comforting" might downplay serious symptoms
- A financial advisor AI aligned to be "optimistic" might recommend risky investments
- A hiring AI aligned to be "efficient" might discriminate against non-traditional candidates

Each of these is an alignment failure — not because the model is broken, but because the alignment (the system prompt + training) doesn't match what the business or user actually needs.

The Stanford HAI 2026 AI Index Report [\[2\]](https://hai.stanford.edu/ai-index/2026-ai-index-report) found that almost no frontier model publishes results on standard safety benchmarks. This means most organizations deploying AI have no way of comparing how different models handle alignment across different use cases.

---

## What This Means for You

**If you're a builder:** Your system prompt is not a detail — it's your alignment strategy. Test it across diverse scenarios. Watch for sycophancy (the AI telling you what you want to hear).

**If you're a user:** Be aware that the AI you're talking to has a hidden personality shaped by its system prompt. Ask yourself: "Would this AI give me different advice if it had a different system prompt?"

**If you're a researcher:** This demo is the simplest proof that alignment is already a practical problem. We don't need to wait for AGI to worry about this — it's happening right now, in every chat interface.

---

## Try It Yourself

[**Open the Alignment Bias Demo**](https://theo-wai-prototype.vercel.app/demo/bias-demo.html)

Type your own questions. Swap the system prompts. See how the same model responds differently. The demo runs on Gemini 2.5 Flash and takes about 5-10 seconds per comparison.

The results might surprise you — and they should make you think differently about every AI answer you read.

---

**References**

1. Greenblatt et al. "Alignment Faking in Large Language Models" (2024). [Link](https://arxiv.org/abs/2412.14093)
2. Stanford HAI 2026 AI Index Report — Responsible AI Chapter. [Link](https://hai.stanford.edu/ai-index/2026-ai-index-report)
