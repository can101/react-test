import { render, screen } from '@testing-library/react';
import App from './App';

it("should render App component without crashing", () => {
  render(<App />)
  expect(screen.getByText("Modern Testing")).toBeInTheDocument();
})

it("should render button component", () => {
  render(<App />)
  expect(screen.getByText("Button")).toBeInTheDocument();
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/*
test('testin aciklamasi',()=>{
  //Arrange
  //act
  //assertion
},timeout)
*/