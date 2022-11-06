import React from 'react';



function Gallery(props) {
  const { currentPage } = props;
  return (
    <section>
      {/* name of category will appear at the top of the div */}
      {/* <h1 data-testid="h1tag">{(currentPage.name)}</h1> */}
      {/* corresponding component will pop up based off whatever category is picked*/}
      <p>{currentPage.description}</p>
    </section>
  );
}
export default Gallery;