---
title: Simple
---

## Introduction

Issue: software engineers are building complex unmaintainable big balls of mud because of an industry that focuses on quick profit and throwaway solutions.

Solution: simplify solutions.

Alan Kaye suggests the following components for simplicity:
1. Mathematics: mathematics models the real physical world.
2. Engineering: apply mathematics systematically, based on reproducible operations, and following standards.

## Computational Physics

## Scratcpad

# Sam Ritchie on Computational Physics, Beyond the Looking Glass Youtube video

Sam Ritchie on Computational Physics, Beyond the Looking Glass:
- Dynamic Land: students learn computer without screens and devices, just bread boards.
  - Goal: abstract out the power of computers, visualize state, allow state to be changed directly and physically
- For kids: Diamond Age, Structure and Interpretation of Classical Mechanics & Functional Differential Geometry
  - Scheme, precise
Eureka moment: move Euler-Lagrange example from the book to the web with visualization.

## Steps

### Visual Computer Algebra System (CAS)

Bring physics to life!
- Browser, web app, CAS in notebook, Closure
- SCMUtils by GJS - the library that powers it.
- Mathbox by Steven Wittens, declarative math visualizations.

### Seed the Culture

### Run Anywhere: Browser, Robots

### Make it Collaborative for adoption

### Build a Community

Goal: an interactive book. Read Seymour Papert in Mindstorms!

# Stop Writing Dead Programs, Jack Rusher, Strange Loop 2022, https://www.youtube.com/watch?v=8Ab3ArE8W3s

Again read Seymour Papert in Mindstorms!

## Runtime Programs

- Haskell, APL is terse and mathematical
- Ritchiki wrote Clojure:
  - State/Time: immutable data structures
  - Atom (sync mutable box with functional update semantics)
  - STM (alter, ref, &c)
  - Core.Async macro, sucks! Also callback hell!
- Go
  - Static language - a no-no! Cannot ask questions during runtime.
- Erlang/OTP
  - Allows you to kill process without losing state
  - Good for long-running processes
- Clojurescript
  - Cells: visual interactive JS/DOM tool
- Maria.cloud
  - Cells -> but in a notebook. Visual interactive JS/DOM/notebook tool
- Propagators
  - Susman's project, when Actors created and Kay interested in Smalltalk at MIT in the 70's
  - Dataflow-based, truth maintenance, provenance (???)

## Program Representation

- VAX Punchcard, Teletype: gave us 80 columns + fixed width
- V2 100: gave us escape codes
- 80M3A: VI key bindings, Bill Joy's keyboard ahd arrow keys in hjkl, control codes to move printer, "~" as home
- Text sucks!
- PDP11: gave us "tty" (teletype) on Linux terminal
- Bauhausbucher: Kandinsky: Point and Line to Plane (100 year old book)
- Graph as text sucks!
  - Kreb's cycle sucks as text, works as visualization
- Pragmatics
  - Relationship between a language and its users.
- Interactive Programming
  - live-coding, opposite of batch processing
  - environment + programming language is merged
  - no compilation/no feedback loop
  - no blank state or termination/debug while running
  - Runtime introspection
  - Failures don't halt program
- Short feedback loop
  - Common Lisp, Julia, decompile code of running program, and update functions live!
- Types: missing in these live programs. Chris Done's twitter post.
- Mcilroy's Power Series, beautiful source code in Haskell:
  - sins = int coss
  - coss = 1 - int sins
- Model Checkers
  - Coq, Teapot
  - Space probes in Lisp and FORTH debugged while offworld, no need for "proven 100%" on launch but updates post-launch!
  - Programming = design discipline, find out what you're building while you're building, sucks to prove theorems which will be thrown away, the spec is wrong! and when right, it will change tomorrow!
  - Debugging > Correctness by Construction
- Debugging
  - C + GDB, separate processes
  - Common Lisp for visualizing graphing code
  - Clojure for visualizing graphing code
  - Smalltalk Object Browser
  - Glamorous Toolkit (modern tool!)
- Error Handling
  - Error doesn't crash program
  - Common Lisp prompts you how to progress on crash, call another function instead, retry, or change state of running image
- Fast Compiler
  - Shitty. Problems with blank slate/run to termination style. Data/AI workloads take a long time to load. GUI state tedious to reproduce. Attach long-running servers and debug while running in production.
  - Rust, Zig sucks
- Future Directions
  - Racket/Scheme, Andrew Blin, structure editor
  - Racket/Scheme, Lief Anderson diagram view for documentation, self-documenting code
  - Data Rabbit, data vis in Clojure, boxes and links
  - Clerk
  - Hazel, Carus Omar, typed holes for type inference, improve UI, built a Student Tests UI
  - Hazel made TYLR by David Moon
  - David Moon + Andrew Blin, widgets/livelets in notebook, such as a dataframe

NEXT UP: https://www.youtube.com/watch?v=B9kqD8vBuwU&pp=0gcJCa0JAYcqIYzv