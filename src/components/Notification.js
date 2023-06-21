const Notification = (props) => {
  let specaitlClasses = "";

  if (props.status === "error") {
    specaitlClasses += classes.error;
  }
  if (props.status === "success") {
    specaitlClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specaitlClasses}`;

  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};
export default Notification;
