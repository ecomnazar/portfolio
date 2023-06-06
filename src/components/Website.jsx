const Website = () => {
  const websiteData = [
    [
      "http://payhasly-logistics.com.tm/",
      "Logistics Website",
      "Logistics Website. In This Project I've Used React TypeScript Tailwind",
    ],
    [
        "http://abraylymebel.com.tm/",
        "Furniture Website",
        "Furniture Website. In This Project I've Used React JS SCSS Firebase",
    ],
    [
        "https://ecomnazar.github.io/blimb5/",
        "Website For Eyes",
        "Website For Eyes. This project is website for eye exercise",
    ],
    [
      "https://github.com/ecomnazar/todoapp",
      "Draggable ToDoApp",
      "To Do App in React. Not responsive (Only For PC)",
  ],
  ];
  return (
    <div className="container">
      <div id="website" className="row">
        {websiteData.map((elem, index) => {
          return (
            <a href={elem[0]} key={index} className="col-3">
              <h2>{elem[1]}</h2>
              <div className="hoverDiv">
                <p>{elem[2]}</p>
                <button>CLICK</button>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Website;
