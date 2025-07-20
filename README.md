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
│   ├── file-1/                   # Props, Inputs, Basic Forms
│   ├── file-2/                   # useState, useEffect, Toggling, Logic
│   ├── file-3(style)/            # Internal, External, Module CSS
│   ├── file-4(Hooks)/            # useId, useRef, forwardRef, useFormState, useTransition
│   ├── file-5(objects & arrays)/ # Array/Object Handling, Derived State, Fragments
│   ├── file-6(Routes)/           # React Router and Conditional Routing
│   ├── file-7(API)/              # API Integration and Mocking
│   ├── contextAPI/               # Context API Setup and Component Tree Flow
│   ├── CustomHooks/              # Custom Reusable Hooks with Showcase
│   ├── router/                   # Routing Layout and Navbar Visibility
│   └── css/                      # Styling Files (global, module)
```

---

## 🆕 Latest Additions (Major Concepts)

✅ **API Integration**  
**`file-7/API/get.jsx`**  
→ Fetching external user data from DummyJSON API using `fetch()`  

**`file-7/API/mockAPIFetch.jsx`**  
→ JSON Server mock backend  
→ Conditional loader using `useState` and `useEffect`  
→ GIF loader for better UX during fetch delay  

**`file-7/API/PostOnAPI.jsx`**  
→ Dynamic `POST` API integration  
→ Supports URL selection (`localhost:3000` or `localhost:8000`)  
→ Input handling via `useState`  
→ Controlled form submission to add new users  

**`file-7/API/DeleteUser.jsx`**  
→ Functional delete button to remove user from state and server  
→ `DELETE` method integrated with JSON Server  

**`file-7/API/Navigator.jsx`**  
→ Navigator UI element to switch between “Post” and “View” components  
→ Page-based logic added for better UX  

**`file-7/API/EditUser.jsx`**  
→ Functional edit form integrated with `useParams()` for ID detection  
→ `PUT` request to update user details on JSON server  
→ Uses controlled inputs with real-time data updates  

**`file-7/API/FormValidation.jsx`**  
→ Added basic validation for username and password  
→ Validates length and character types using regex  
→ Error messages appear conditionally with dynamic state  

**`file-3(style)/formValidationUI.css`**  
→ Centered the form vertically and improved input spacing  
→ Styled error messages for visibility and UX  

✅ **Routing Practice**  
**`file-6(Routes)/`**  
→ Modular route structure  
→ Conditional rendering of Navbar  
→ Route-based layout flow and separation  

---

## 🎯 Core Concepts Practiced

🔹 **React Fundamentals**  
- JSX, Props, State, Dynamic Rendering  
- Controlled Components, Form Handling  
- Array/Object Iteration in JSX  
- Conditional Logic & Component Composition  

🔹 **React Hooks**  
- useState, useEffect, useRef, useId  
- useFormState, useActionState, useTransition  
- forwardRef & Ref forwarding to child  
- Custom Hooks with logic encapsulation  

🔹 **Styling Methods**  
- Internal, External, and CSS Modules  
- Tailwind CSS (planned integration)  
- 🆕 UI refinement for validation form layout and error display  

🔹 **Routing & Navigation**  
- React Router DOM v6+  
- Route-based layout flow  
- Navbar toggling via route logic  
- Navigator component to switch between forms and lists  

🔹 **Context API**  
- Global state using Context Provider  
- Context tree implementation and consumption  

🔹 **API Practice**  
- ✅ GET: External API with dummyjson.com  
- ✅ POST: Add user via fetch and dynamic server  
- ✅ DELETE: Remove user from JSON Server  
- ✅ PUT: Edit user info via ID-based routing  
- ✅ Conditional loading feedback using `useState`  
- ✅ GIF-based loader UX improvement  

---

## 🚧 Work In Progress

- Component folder refactoring by feature sets  
- Routing optimization with nested routes  
- Extracting reusable utilities & hook libraries  
- Creating polished sub-repos for job/internship showcases  

---

## 🔗 Related Repositories

This master repo powers and inspires these focused practice repositories:

- [`react-hooks-practice`](https://github.com/FaiziCodeSpace/react-hooks-practice)  
- [`react-custom-hooks-practice`](https://github.com/FaiziCodeSpace/react-custom-hooks-practice)  
- [`react-objects-and-array-setup`](https://github.com/FaiziCodeSpace/react-objects-and-array-setup)  

---

## 💡 Developer Note

This is not a production-ready app. It's my personal development sandbox — where I break, debug, design, and improve everything in React before applying it to full-stack projects.

> ✨ *"Build small. Learn deep. Document smart."* – Faizan
