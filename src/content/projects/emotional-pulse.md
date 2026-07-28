---
title: "Tracking the emotional pulse of a nation"
description: "Tracking emotion and identity shifts in Reddit conversation with NLP and time-series models."
stat: "3M+ users · 8 years · 60M+ comments"
image: "/figures/reddit_neg_emo.png"
scale: "3M+ users · 60M+ comments · 8 years"
methods: "NLP · topic modeling · multilevel time series · HPC"
location: "Harvard University"
advisor: "Dr. Ashwini Ashokkumar"
order: 1
---

## The question

When a society is hit by a massive disruption, what happens to how people feel and who they feel they are? Does this shift in people's feeling transient or long-lasting? The COVID-19 pandemic provided the suitable context to study this question. Using natural language data from social media, I'm able to track the shift in people's psychological state at scale and across long time span. 

## What I did
I assembled a corpus of 60M+ Reddit comments from 3M+ users from 50 US city communities spanning eight years around the pandemic (2016-2024), processed on high-performance computing infrastructure. Using NLP, including dictionary approach, topic modeling and LLM evaluation, I quantified shifts in emotions and collective identity, then modeled long-term trajectories with multilevel sequential time-series models to separate durable change from short-lived spikes, comparing patterns across time. I also collected the COVID case data in the cities covered inthe dataset to investigate if the severity of the pandemic predicted changes in people emotiona and collective identity across regions. 

## What I found
I fount tht the COVID-19 pandemic led to a decline in emotional well-being and the emergence of a collective identity that lasted for 4 years, demonstrating that the pandemic induced a cultural shift that established new emotional and identity norms. Moreover, I observed people have the tendency to cope the shared crisis together. People tend to express more collective identity following the day they feel more negative. However, this increase in collective identity expression did not predict reduced negative emotion in the following day. 

<figure>
<img src="/figures/reddit_neg_emo.png" alt="Shift in negative emoions across eight years of Reddit data" />
<figcaption>Population-level negative emotions increases sharply at pandemic onset and recovers only partially over the following years.</figcaption>
</figure>

<figure>
<img src="/figures/reddit_we.png" alt="Shift in collective identity across eight years of Reddit data" />
<figcaption>Population-level collective identity expression increases sharply at pandemic onset and recovers only partially over the following years.</figcaption>
</figure>

## The impact
This is a blueprint for measuring the psychological state of an online community at scale — the same approach platforms need to understand user well-being, detect community-level distress, and evaluate whether product or policy changes actually make people's experience better.

This work is in preparation for publication with Dr. Ashwini Ashokkumar, with talks at APS, SPSP, and SAS in 2026.
