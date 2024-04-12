---
pubDate: 2024-4-12T12:00:00Z
title: Server Dashboard.
description: A simple server dashboard that displays the CPU and memory usage of the server it is running on. The server is written in Python and the client is written in Svelte.
excerpt: hello world
category: Project
image: /images/server-dashboard.png
tags:
  - Sveltekit
  - TypeScript
  - TailwindCSS
  - Python
  - APU
  - WebSockets
  - Ubuntu
  - Nginx
  - Vercel
---

<div class="flex gap-2">
  <button class="p-2 rounded border border-gray-900/20 md:hover:shadow transition-shadow duration-200"> 
    <a href="https://engage-server-dashboard.vercel.app" target="_blank"> Go to App </a>
  </button>

  <button class="p-2 rounded border border-gray-900/20 md:hover:shadow transition-shadow duration-200"> 
    <a href="https://github.com/engageintellect/server-dashboard.git" target="_blank">Go to Repository</a>
  </button>
</div>

# Introduction

Sveltekit chatGPT integration with dynamic 3rd party API-fed context injection. Made using Vercel's AI SDK, OpenAI, TailwindCSS, and DaisyUI.

# create-svelte

## Description

A simple server dashboard that displays the CPU and memory usage of the server it is running on. The server is written in Python and the client is written in Svelte.

## Getting Started

## Requirements

- Nmap (install using your package manager)

<strong>Note:</strong> The server must be run as root to be able to scan the network.

### Running the server

```bash
cd server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
chmod +x main.py
./main.py
```

### Running the client

```bash
# create a new project in the current directory
cd client
pnpm i && pnpm run dev --host
```

## Building the client

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
