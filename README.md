Microfrontend & Accessibility Projects

This repository contains two independent frontend projects:

Microfrontend Architecture Demo

Accessibility-First Web Application (Keyboard & Voice Controlled)

Both projects are built to demonstrate modern frontend engineering principles with a strong focus on scalability, modularity, and inclusive design.

📦 Project 1: Microfrontend Architecture
Overview

This project demonstrates a Microfrontend architecture, where a large frontend application is split into smaller, independently developed and deployed applications.

Each micro app is responsible for a specific domain and can be built, tested, and deployed separately.

Why Microfrontends?

Traditional monolithic frontends:

Become hard to scale

Slow down team productivity

Increase deployment risk

Microfrontends solve this by:

Decoupling features

Allowing independent deployments

Enabling multiple teams to work in parallel

Improving maintainability

Architecture Concept

The project follows this structure:

Host / Container App

Loads and integrates micro apps

Remote / Child Applications

Independently developed modules

Dynamically loaded into the host

The communication between micro apps is handled using shared state or event-based mechanisms depending on implementation.

Technologies Used

JavaScript

Module Federation / Dynamic Import (if used)

HTML5

CSS3

Key Concepts Demonstrated

Code splitting

Independent deployment

Shared dependencies

Runtime integration

Scalable frontend architecture

♿ Project 2: Accessibility-First Application
Overview

This project focuses on building a fully accessible web application that can be controlled using:

Keyboard navigation

Voice commands

The goal is to ensure usability for users with disabilities and improve overall user experience.

Keyboard Accessibility

The application supports:

Full navigation using Tab, Shift + Tab

Enter and Space key interactions

Focus management

Visible focus indicators

Proper semantic HTML structure

ARIA roles and attributes where necessary

This ensures users who cannot use a mouse can still interact with the entire application.

Voice Control Support

The application also supports control using voice commands.

Users can:

Trigger actions using speech

Navigate between sections

Interact with UI elements without physical input devices

This is implemented using browser-based Speech Recognition APIs (where supported).

Accessibility Principles Followed

Semantic HTML

Proper heading structure

ARIA labels and roles

Color contrast compliance

Focus management

Screen reader compatibility

Keyboard-only navigation

Assistive technology support
