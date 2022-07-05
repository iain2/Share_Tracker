import SearchBar from "../components/SearchBar";
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';

describe("SearchBar", () => {
  
    let container;
    let searchH1;

    beforeEach(() => {
      container = render(<SearchBar/>);
      searchH1 = container.getByTestId("input")
    });

})