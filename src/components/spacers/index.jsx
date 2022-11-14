/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Componente de espacios en blanco <WhiteSpace>
 */

const WhiteSpace = ({ size, anchor }) => {
  return <div className={`white-space-${size}`} id={anchor || "#"}></div>;
};

export default WhiteSpace;
