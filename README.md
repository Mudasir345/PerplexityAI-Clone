# 🚀 PerplexityAI Clone - An AI-powered search engine 🔎 <!-- omit in toc -->

![preview](.assets/perplexica-screenshot.png)

## Table of Contents <!-- omit in toc -->

- [Overview](#overview)
- [Preview](#preview)
- [Features](#features)
- [Installation](#installation)
  - [Getting Started with Docker (Recommended)](#getting-started-with-docker-recommended)
  - [Non-Docker Installation](#non-docker-installation)
  - [Ollama Connection Errors](#ollama-connection-errors)
- [Using as a Search Engine](#using-as-a-search-engine)
- [One-Click Deployment](#one-click-deployment)
- [Upcoming Features](#upcoming-features)
- [Contribution](#contribution)
- [Help and Support](#help-and-support)

## Overview

PerplexityAI Clone is an open-source AI-powered searching tool or an AI-powered search engine that goes deep into the internet to find answers. Inspired by Perplexity AI, it's an open-source option that not just searches the web but understands your questions. It uses advanced machine learning algorithms like similarity searching and embeddings to refine results and provides clear answers with sources cited.

Using SearxNG to stay current and fully open source, PerplexityAI Clone ensures you always get the most up-to-date information without compromising your privacy.

Want to know more about its architecture and how it works? You can read it [here](https://github.com/Mudasir345/PerplexityAI-Clone/tree/master/docs/architecture/README.md).

## Preview

![video-preview](.assets/perplexica-preview.gif)

## Features

- **Local LLMs**: You can make use local LLMs such as Llama3 and Mixtral using Ollama.
- **Two Main Modes:**
  - **Copilot Mode:** (In development) Boosts search by generating different queries to find more relevant internet sources. Like normal search instead of just using the context by SearxNG, it visits the top matches and tries to find relevant sources to the user's query directly from the page.
  - **Normal Mode:** Processes your query and performs a web search.
- **Focus Modes:** Special modes to better answer specific types of questions. PerplexityAI Clone currently has 6 focus modes:
  - **All Mode:** Searches the entire web to find the best results.
  - **Writing Assistant Mode:** Helpful for writing tasks that do not require searching the web.
  - **Academic Search Mode:** Finds articles and papers, ideal for academic research.
  - **YouTube Search Mode:** Finds YouTube videos based on the search query.
  - **Wolfram Alpha Search Mode:** Answers queries that need calculations or data analysis using Wolfram Alpha.
  - **Reddit Search Mode:** Searches Reddit for discussions and opinions related to the query.
- **Current Information:** Some search tools might give you outdated info because they use data from crawling bots and convert them into embeddings and store them in an index. Unlike them, PerplexityAI Clone uses SearxNG, a metasearch engine to get the results and rerank and get the most relevant source out of it, ensuring you always get the latest information without the overhead of daily data updates.

It has many more features like image and video search. Some of the planned features are mentioned in [upcoming features](#upcoming-features).

## Installation

There are mainly 2 ways of installing PerplexityAI Clone - With Docker, Without Docker. Using Docker is highly recommended.

### Getting Started with Docker (Recommended)

1. Ensure Docker is installed and running on your system.
2. Clone the PerplexityAI Clone repository:

   ```bash
   git clone https://github.com/Mudasir345/PerplexityAI-Clone.git
   ```

3. After cloning, navigate to the directory containing the project files.

4. Rename the `sample.config.toml` file to `config.toml`. For Docker setups, you need only fill in the following fields:

   - `OPENAI`: Your OpenAI API key. **You only need to fill this if you wish to use OpenAI's models**.
   - `OLLAMA`: Your Ollama API URL. You should enter it as `http://host.docker.internal:PORT_NUMBER`. If you installed Ollama on port 11434, use `http://host.docker.internal:11434`. For other ports, adjust accordingly. **You need to fill this if you wish to use Ollama's models instead of OpenAI's**.
   - `GROQ`: Your Groq API key. **You only need to fill this if you wish to use Groq's hosted models**.
   - `ANTHROPIC`: Your Anthropic API key. **You only need to fill this if you wish to use Anthropic models**.

     **Note**: You can change these after starting PerplexityAI Clone from the settings dialog.

   - `SIMILARITY_MEASURE`: The similarity measure to use (This is filled by default; you can leave it as is if you are unsure about it.)

5. Ensure you are in the directory containing the `docker-compose.yaml` file and execute:

   ```bash
   docker compose up -d
   ```

6. Wait a few minutes for the setup to complete. You can access PerplexityAI Clone at http://localhost:3000 in your web browser.

### Non-Docker Installation

Follow the same steps as above, adjusting as necessary for a non-Docker environment.

### Ollama Connection Errors

If you're encountering an Ollama connection error, it is likely due to the backend being unable to connect to Ollama's API. See the [troubleshooting guide](https://github.com/Mudasir345/PerplexityAI-Clone/tree/master/docs/installation).

## Using as a Search Engine

You can configure PerplexityAI Clone as your browser's default search engine. Follow the instructions in your browser settings and use the URL `http://localhost:3000/?q=%s`.

## One-Click Deployment

[![Deploy to RepoCloud](https://d16t0pc4846x52.cloudfront.net/deploylobe.svg)](https://repocloud.io/details/?app_id=267)

## Upcoming Features

- [x] Add settings page
- [x] Adding support for local LLMs
- [x] History Saving features
- [x] Introducing various Focus Modes
- [ ] Finalizing Copilot Mode
- [ ] Adding Discover

## Contribution

PerplexityAI Clone is built on the idea that AI and large language models should be easy for everyone to use. If you find bugs or have ideas, please share them via GitHub Issues. Read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## Help and Support

For any questions or support, feel free to contact me:

📧 **Email:** mudasirchoudhry345@gmail.com  
📞 **Phone:** +923047045345  

Thank you for exploring PerplexityAI Clone, the AI-powered search engine designed to enhance your search experience!

