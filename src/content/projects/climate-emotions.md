---
title: "Can the right emotion change beliefs and actions about climate?"
description: "An emotion-induction intervention tested in randomized controlled experiments, with effects across political ideologies."
stat: "4,000+ participants · +20% belief · +15% policy support"
figure: "bars"
scale: "4,000+ participants across RCTs"
methods: "RCTs · mixed-effects models · Bayesian analysis"
location: "Stanford University"
advisor: "Dr. Madalina Vlasceanu"
order: 2
---

## The question

Climate communication usually picks a lane: alarm people into action, or inspire them with hope. Which emotional strategy actually moves belief and behavior — fear, hope, or something else entirely?

## What I did

I started with LLM-based text analysis of the emotions people expressed in letters to future generations about climate change, generating hypotheses about which emotional profiles travel with stronger climate beliefs. I then designed an emotion-induction intervention, in which I used climate consequences information to induce negative emotion and climate solution information to induce positive emotions. I then stress-tested it in large-scale randomized controlled experiments with 4,000+ participants, analyzing outcomes in Python and R with mixed-effects models and Bayesian analysis — checking whether effects held across the political spectrum rather than only for the already-convinced.

## What I found

The combination of positive and negative emotion — not either alone — produced the strongest movement: climate belief rose by 20%, policy support by 15%, and action intentions by 10%, with effects holding across political ideologies.

<figure>
<img src="/figures/Climate_Support.png" alt="Intervention effect in climate policy support" />
<img src="/figures/Climate_priority.png" alt="Intervention effect in climate policy support" />
<figcaption>The intervention combines positive and negative emotions increased both the policy support and the priority.</figcaption>
</figure>

## The impacts

Message design that works across ideological lines is exactly what climate communicators and policy teams need, and the playbook — hypotheses from observational text, then intervention, then RCT — generalizes to any behavior-change problem. This work is under revise-and-resubmit at the *Journal of Experimental Psychology: Applied*.