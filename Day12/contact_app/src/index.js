import { createRoot } from 'react-dom/client';
import React from "react";
import Nav from './Nav';
import Content from './Content';

const nav = createRoot(document.getElementById("header"))
nav.render(
  <Nav />
)

const content = createRoot(document.getElementById("root"))
content.render(
  <Content />
)