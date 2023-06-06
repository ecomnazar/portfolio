const Mobile = () => {
  const mobileData = [
    [
      "https://github.com/ecomnazar/flutterapi",
      "E-Commerce App",
      "Flutter E-Commerce Project. In This Project I've Used BLoC for StateManagment",
    ]
  ];
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container">
      <div id="mobile" className="row">
        {mobileData.map((elem, index) => {
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

export default Mobile;
