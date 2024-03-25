---
pubDate: 2023-10-09T00:00:00Z
title: Blood Glucose Tracker.
description: A glucose monitor tracker built with Sveltekit, TailwindCSS, and DaisyUI.
excerpt: hello world
category: Project
image: /images/engage-glucose3.png
tags:
  - Sveltekit
  - TypeScript
  - TailwindCSS
  - LibreView
  - API
  - Vercel
---

<div class="flex gap-2 my-5">
  <button class="p-2 rounded border border-gray-900/20 md:hover:shadow transition-shadow duration-200"> 
    <a href="https://engage-glucose.vercel.app" target="_blank"> Go to App </a>
  </button>

  <button class="p-2 rounded border border-gray-900/20 md:hover:shadow transition-shadow duration-200"> 
    <a href="https://github.com/engageintellect/engage-glucose" target="_blank">Go to Repository</a>
  </button>
</div>

# Introduction

This app is a glucose monitor tracker built with Sveltekit, TailwindCSS, and DaisyUI. It uses the LibreView API to fetch data from your glucose monitor and display it on the frontend. This app is a work in progress and is not yet ready for production use.

## Features

- [x] Fetch live glucose and user data from LibreView Glucose Monitor
- [x] Display glucose data current glucose valu
- [x] Determine is glucose is in range
- [x] Show alarm ranges for high and low glucose
- [x] Show recent high and low events
- [x] Refresh data every 30 seconds
- [x] Contact button
- [ ] Notes
- [ ] Meals
      <br/>
      <br/>

![image](/images/engage-glucose.png)
<br/>

## Getting Started

```bash
git clone https://github.com/engageintellect/engage-glucose.git
```

## Create .env file

You will need some environment variables from LibreView to run this app.

```bash
cd engage-glucose && touch .env
```

File should look something like this:

```
USR_EMAIL=<your email>
USER_PASSWORD=<your password>
```

### Run code

```bash
cd engage-glucose && pnpm i && pnpm run dev
```
