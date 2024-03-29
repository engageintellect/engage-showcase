---
pubDate: 2024-3-3T00:00:00Z
title: Stonk Ai.
description: A stock market prediction app built with Sveltekit, Python, TensorFlow, TailwindCSS, and DaisyUI.
excerpt: hello world
category: Project
image: /images/stonkAi4.png
tags:
  - Sveltekit
  - TypeScript
  - TailwindCSS
  - Python
  - TensorFlow
  - OpenAI
  - ChatGPT
  - FastAPI
  - AI
  - Ubuntu
  - Nginx
  - Vercel
---

<div class="flex gap-2 my-5">
  <button class="p-2 rounded border border-gray-900/20 md:hover:shadow transition-shadow duration-200"> 
    <a href="https://stonkai.xyz" target="_blank"> Go to App </a>
  </button>

  <button class="p-2 rounded border border-gray-900/20 md:hover:shadow transition-shadow duration-200"> 
    <a href="https://github.com/engageintellect/ai-stock-client.git" target="_blank">Go to Repository</a>
  </button>
</div>

# Introduction

This app is an AI stock market prediction app built with Sveltekit, Python, TensorFlow, FastAPI, TailwindCSS, and DaisyUI. It uses a machine learning model to predict stock prices and display them on the frontend. This app is a work in progress and is not yet ready for production use.

## Features

- [x] Fetch and aggregate stock data.
- [x] Train a machine learning model to predict stock prices.
- [x] Fetch related news articles.
- [x] Display stock price predictions on the frontend.
- [x] Refresh data every 30 seconds.
- [x] Contact button
- [x] Built-in theme switcher with persistence.
      <br/>
      <br/>

# Predict Stock Prices based on past data

![image](/images/stonkAi2.png)
<br/>

## Getting Started

### Frontend

```bash
# Clone the repository
git clone https://github.com/engageintellect/ai-stock-client.git
```

```bash
# Install dependencies and run the app
cd ai-stock-client && pnpm i && pnpm run dev
```

### Backend

```bash
# Clone the repository
git clone https://github.com/engageintellect/ai-stock-server.git
```

```bash
# Create a virtual environment
python3 -m venv venv
```

```bash
# Activate the virtual environment
source venv/bin/activate
```

```bash
# Install dependencies
pip3 install -r requirements.txt
```

```bash
# Run the app
python3 main.py
```
