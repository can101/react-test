import { render, screen } from '@testing-library/react';
import App from './App';

it("should render App component without crashing", () => {
  render(<App />)
  const element = screen.getByText("Modern Testing");
  expect(element).toBeInTheDocument();//Matchers
})

it("should render button component", () => {
  render(<App />)
  const element = screen.getByText("Button");
  expect(element).toBeInTheDocument();//Matchers
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