function Users() {
  return (
    <div className="flex gap-10 items-start mt-10">
      <div
        style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}
      >
        <iframe
          src="https://kinescope.io/embed/5L8yQxvTa8e28zL7zRHL7N"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            width: "100%",
            height: "69%",
            top: 0,
            left: 0,
          }}
        ></iframe>
      </div>
      <div style={{ marginTop: "0rem" }}>
        <iframe
          src="https://kinescope.io/chat/5L8yQxvTa8e28zL7zRHL7N"
          allow="fullscreen"
          frameborder="0"
          allowfullscreen
          width="400"
          height="600"
        ></iframe>
      </div>
    </div>
  );
}

export default Users;
