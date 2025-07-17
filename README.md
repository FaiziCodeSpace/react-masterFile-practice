# 🧠 React Master File Practice

This repository is my core React playground — a centralized practice lab for learning, testing, and refining every concept in modern React development. All feature experiments, logic trials, and module-based learning are done here first before being extracted into standalone projects.

---

## 📌 Purpose

- To structure my daily learning as a MERN stack developer
- To explore React concepts through real practice and clean component design
- To create a version-controlled foundation for all front-end growth

---

## 📁 Folder Structure Overview

```bash
src/
├── App.jsx
├── main.jsx
├── index.css
├── assets/
│   └── react.svg
├── components/
│   ├── file-1/                 # Props, Inputs, Basic Forms
│   ├── file-2/                 # useState, useEffect, Toggling, Logic
│   ├── file-3(style)/          # Internal, External, Module CSS
│   ├── file-4(Hooks)/          # useId, useRef, forwardRef, useFormState, useTransition
│   ├── file-5(objects & arrays)/ # Array/Object Handling, Derived State, Fragments
│   ├── file-6(Routes)/         # React Router and Conditional Routing
│   ├── file-7(API)/            # API Integration and Mocking
│   ├── contextAPI/             # Context API Setup and Component Tree Flow
│   ├── CustomHooks/            # Custom Reusable Hooks with Showcase
│   ├── router/                 # Routing Layout and Navbar Visibility
│   └── css/                    # Styling Files (global, module)
```

---

## 🆕 Latest Additions (Major Concepts)

✅ API Integration  
**`file-7/API/get.jsx`**  
→ API fetch using `fetch()` to display user data from dummyjson.com

**`file-7/API/mockAPIFetch.jsx`**  
→ Local JSON Server API integration  
→ `useState` and `useEffect` for async loading simulation  
→ Loading GIF added for real-world UI feedback using conditional rendering

**`file-7/API/PostOnAPI.jsx`**  
→ API POST request using `fetch()`  
→ Sends new user data to local JSON Server  
→ Inputs are handled using `useState` for controlled form submission

✅ Routing Practice  
**`file-6(Routes)`**  
→ Components practicing conditional navbar visibility  
→ Route-based layout structure using React Router v6+

---

## 🎯 Core Concepts Practiced

🔹 **React Fundamentals**  
- JSX, Props, State, Dynamic Rendering  
- Controlled Components, Input Forms  
- Array/Object Iteration in JSX  
- Conditional Logic Rendering

🔹 **React Hooks**  
- useState, useEffect, useRef, useId  
- useFormState, useActionState, useTransition  
- forwardRef & parent-child forwarding  
- Custom Hooks with real use cases

🔹 **Styling Methods**  
- Inline, External, and Modular CSS  
- Tailwind CSS (Basic Implementation)

🔹 **Routing & Navbar Control**  
- React Router DOM structure  
- Conditional layout rendering  
- Nested routing (planned expansion)

🔹 **Context API**  
- Global state setup  
- Multi-level data passing using Context Providers

🔹 **API Practice**  
- ✅ Real API fetch from dummyjson.com  
- ✅ JSON Server as mock backend for development  
- ✅ UI loading behavior using stateful rendering  
- 🆕 **Loading GIF integration for API delay simulation**  
  → Visual feedback added before API completes  
  → Controlled using `loading` state  
  → Implemented as an isolated feature branch (`feature-loading-gif`)

---

## 🚧 Work In Progress

- Organizing files by feature sets  
- Extracting polished examples to individual GitHub repos  
- Continually improving readability, reuse, and folder separation

---

## 🔗 Related Repository

📌 This repo powers and feeds multiple topic-based repos such as:  
- [`react-hooks-practice`](https://github.com/FaiziCodeSpace/react-hooks-practice)  
- `react-custom-hooks-practice`  
- `react-objects-and-array-setup`

---

## 💡 Note

This is not a production-ready app. It’s a developer playground focused on:
- Fast learning  
- Clean code practice  
- Breaking, fixing, and building React confidently
