function Main({ children }) {
  return (
    <main>
      <div>
        <p>From:</p>
        <select>
          <option value="Decimal">Decimal 10</option>
          <option value="Binary">Binary 2</option>
          <option value="Octal">Octal 8</option>
          <option value="Hexadecimal">Hexadecimal 16</option>
        </select>
      </div>
      <div>
        <p>To:</p>
        <select>
          <option value="Binary">Binary 2</option>
          <option value="Octal">Octal 8</option>
          <option value="Hexadecimal">Hexadecimal 16</option>
          <option value="Decimal">Decimal 10</option>
        </select>
      </div>
      {children}
      <div>0101101</div>
    </main>
  );
}

export default Main;
