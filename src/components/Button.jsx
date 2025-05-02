function Button({ children, color }) {
  const styles = {
    backgroundColor: color ? color : "lightgreen",
  };

  return <button style={styles}>{children}</button>;
}

export default Button;
