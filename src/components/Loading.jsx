const Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <div className="d-flex align-items-center">
            <strong role="status">Loading...</strong>
            <div className="spinner-border ms-auto" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
