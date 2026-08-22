function TextInput({ text, setText, fontSize }) {
  return (
    <textarea
      className="text-area"
      placeholder="Paste or type your content here...

• You can enter articles
• Research papers
• Documents
• Notes
• Any amount of text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{
        fontSize: fontSize + "px",
      }}
    />
  );
}

export default TextInput;