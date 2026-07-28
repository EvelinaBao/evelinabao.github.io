---
title: "Does GPT-4 understand feelings like we do?"
description: "Benchmarking LLM emotion inferences against human annotations to test human–AI alignment in affective reasoning."
figure: "alignment"
methods: "LLM pipeline · human benchmarking · prompt engineering"
location: "Stanford University"
advisor: "Dr. Madalina Vlasceanu"
order: 5
---

## The question

Researchers and product teams increasingly use LLMs to label emotions in user-generated text at a scale no human team could match. But can a model like GPT-4 be trusted to read affect the way humans do — and where does it quietly diverge?

## What I did

I built a human–AI analytical pipeline in which GPT-4 generated emotion inferences from user-generated text, collected human annotations of the same texts as a benchmark, and systematically compared the two to evaluate LLM–human alignment in affective reasoning.

## What I found

Benchmarking revealed both the promise and the limits of LLM affect annotation: meaningful alignment with human judgment in many cases, alongside systematic divergences that any team relying on LLM-labeled emotion data needs to account for before trusting labels at scale.

## The impact

This is a validation blueprint for one of the most common applied-AI patterns today — LLM-as-annotator. The validated pipeline also powered the emotion analyses behind the climate intervention work, under revise-and-resubmit at the *Journal of Experimental Psychology: Applied*.