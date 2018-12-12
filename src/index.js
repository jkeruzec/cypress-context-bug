import React from "react";
import ReactDOM from "react-dom";
import { ContextMenu, Item, ContextMenuProvider } from 'react-contexify';


function App() {
  return (
    <div className="App">
      <h2>Context Bug</h2>
      
      <div data-cy="menu">   
      <ContextMenuProvider id="test">
          <span>test</span>
      </ContextMenuProvider>
          
      <ContextMenu animation="fade" id="test" style={{ zIndex: 10 }} >
      <Item
      onClick={() => window.alert("Hello bug !")} id="test2" data-cy="add-new-item-tree-button">
      test menu
  </Item>
      </ContextMenu>
    </div>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
