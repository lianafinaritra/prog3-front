import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

test('renders learn react link', () => {
  const { getByTestId } = render(
      <App />
  )

  expect(getByTestId("App")).toBeTruthy();
});
