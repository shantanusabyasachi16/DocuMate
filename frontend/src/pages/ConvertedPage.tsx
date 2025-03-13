import  { useState } from 'react';


const ConverterPage = () => {
  const [codeInput, setCodeInput] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    if (!codeInput.trim()) {
      setError('Please enter some code to convert');
      return;
    }
    // Add your conversion logic here
    console.log('Converting code:', codeInput);
    setError('');
  };

  return (
    <div className="converter-container">
      <h2>Paste Your Code Here</h2>
      <textarea
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        placeholder="Enter your code here..."
        className="code-input"
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleConvert} className="convert-button">
        Convert to Documentation
      </button>
    </div>
  );
};

export default ConverterPage;