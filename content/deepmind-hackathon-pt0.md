---
title: Building for DeepMind's Hackathon Pt.0
---

### [[index|rohitdat dot com]]

# Building for DeepMind's Hackathon Pt.0

---

On July 5, 2025, our team was selected to contest with 130 other participants in the **"Solve for Healthcare & Life Sciences with Gemma Hackathon"** in Paris Google Office. Having just released their new line of open-source models: **MedGemma**, **TxGemma** et **Gemma**, the goal was to leverage them to prototype solutions for healthcare.

This post will go through the technical details of our solution, awarded jury's honorable mention, and is intended to anyone interested in **medical imaging**, **vision language models** and **agentic AI**. I believe it provides some starting points for anyone interested in the following techniques: 
- Building a computer vision model for segmentation
- Finetuning a VLM
- Building a RAG system

And more generally, to anyone curious about participating in a hackathon, but still hesitant to do it. I hope this gives you insights on how things go during such an event.

## The Problem Space

Having worked with solutions for AI-assisted brain diagnosis, one interesting path came up related to **anti-amyloid treatment**. Not to go into too much details about the pathology itself but **Alzheimer's Disease (AD)** is attributed to the buildup of amyloid plaques in the brain, which leads to neuronal death. The faultiness in the clearance mechanism seems thus to be the root cause. 

Recent treatments hence have explored **anti-amyloid therapies**, as a way to promote this clearance mechanism again, and reduce amyloid plaques accumulation. Many drugs have gone under trial (CITE) and have exhibited side effects known as **ARIA**, standing for **anti-amyloid related imaging abnormalities**: visible as edemas and microhemorrhages on brain MRI sequences, they need to be monitored periodically to assess their growth and to determine treatment continuation.

## The Challenge

Reading those MRI is a **time-consuming task** and findings and interpretation are **subjective** to the reader's experience, especially when they lack education about such recent advancements. Furthermore, having the need to schedule frequent MRI appointments can be quite a hassle for both medical staff and patients. Also, **patient anxiety** and **empowerment** are both huge topics, and both patients and their family could benefit from understanding what is going on from a medical point of view.

## Our Solution

**What if we built an agentic framework** to support clinicians and patients throughout this whole journey: from analyzing MRI exams, sending quantitative findings to the physician, helping him understand and stay up to date with latest research in this field, communicating with the patients and scheduling the next appointments, an agentic system supported by several expert models could solve many of those pain points.

---

This is **part 0** of the series covering the work done. 

**Part 1** will cover the computer vision model that segments and quantifies ARIA findings on FLAIR sequences and **Part 2** will go over MedGemma's finetuning on MRI domain and the setup of the RAG system to incorporate latest AD's research findings to the radiological interpretations.