# Interactive-Story-Generator-AI

## Overview

Interactive Story Generator AI is a full-stack web application that generates dynamic, branching narrative experiences based on user-provided themes. The system uses asynchronous backend processing to handle AI story generation and delivers results through a React frontend with real-time status updates.

Users can generate stories from a theme, track generation progress, and navigate through multiple story paths.

---

## What I Built

- Designed full-stack architecture (React + FastAPI)
- Implemented async job processing system for long-running AI tasks
- Built polling-based frontend state synchronization system
- Structured AI output into a navigable story graph
- Managed API integration between frontend and backend services

---

## Key Features

- AI-generated interactive branching stories
- Asynchronous job-based backend architecture
- Real-time polling for job status updates
- Multi-node story structure (decision-based narrative tree)
- REST API for job creation, status tracking, and story retrieval
- React frontend with dynamic routing

---

## Architecture

### Frontend
- React (Vite)
- React Router
- Axios
- Theme input + story rendering UI

### Backend
- FastAPI (Python)
- Async job processing system
- REST endpoints for story generation
- Database-backed job tracking

### Core Concept
1. User submits theme (React frontend)
2. POST request creates job in backend
3. Backend queues async story generation
4. AI service generates branching story tree
5. Job status is polled every 3 seconds
6. Once complete, frontend fetches story by ID
7. User navigates story nodes interactively

---

## Tech Stack

Frontend:
- React
- Vite
- React Router
- Axios

Backend:
- FastAPI
- Python
- Pydantic
- Uvicorn

AI:
- Large Language Model (LLM) used to generate branching narrative nodes
- Structured output enforced for tree-based story format
- Prompt-engineered generation for consistency across nodes

---

## Getting Started

### Clone repository
```bash
git clone <repo-url>
cd Interactive-Story-Generator-AI
```
---

## Backend Setup

### Install dependencies
```bash
pip install -r requirements.txt
```
### Run server
```bash
uvicorn main:app --reload

Backend runs at:
http://localhost:8000
```
---

## Frontend Setup

### Install dependencies
```bash
npm install
```
### Run dev server
```bash
npm run dev

Frontend runs at:
http://localhost:5173
```
---

## API Endpoints

### Create story generation job
POST `/stories/create`

Request:
```json
{
  "theme": "space exploration"
}
```

---

### Check job status
GET `/jobs/{job_id}`

Response:
```json
{
  "job_id": "string",
  "status": "processing | completed | failed",
  "story_id": "string | null",
  "error": null
}
```

---

### Fetch story
GET `/stories/{story_id}`

Returns full story tree structure with nodes and choices.

---

## Data Model

### StoryNode
- id
- text
- choices[]
- is_root
- is_ending

### Story
- id
- root_node
- nodes[]

---

## Design Decisions

- Polling used instead of WebSockets for simplicity
- Job-based async backend architecture
- Story represented as a graph/tree structure
- Frontend routing handles node navigation

---

## Future Improvements

- Replace polling with WebSockets
- Add user authentication
- Save/load stories per user
- Improve AI branching consistency
- Add story visualization graph

---

## Purpose

This project demonstrates:
- Full-stack application design
- Async backend processing
- Frontend-backend integration
- AI integration in real-world apps
- Portfolio-ready engineering practices

---

## Acknowledgements

This project was inspired by and partially built with reference to:

- https://github.com/techwithtim/Choose-Your-Own-Adventure-AI

The original project helped inform the overall architecture and idea, but this implementation includes custom backend structure, frontend design, and additional features developed independently.