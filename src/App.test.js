import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

//import ListItem from './components/ListItem';

/*
const mockData = [
  "test1",
  "test2"
]
*/
const func = jest.fn()

describe("add component", () => {
  test('check onChange component', () => {
    render(<App />);
    const element = screen.getByPlaceholderText(/add a task/i);
    expect(element).toBeInTheDocument();
  });

  test('check onChange component', () => {
    render(<App setInput={func}/>);
    const element = screen.getByPlaceholderText(/add a task/i);
    fireEvent.change(element, { target: {value: "Push to Github"}})
    expect(element.value).toBe("Push to Github")
  });
})

