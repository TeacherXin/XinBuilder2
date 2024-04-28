const isRender = () => {
    if(window.location.pathname === '/render') {
      return true;
    }else {
      return false;
    }
}

export {
    isRender
  }

