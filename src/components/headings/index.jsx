/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Componente títulos <Headings>
 */

const Heading1 = ({ content, anchor }) => {
  return <h1 id={anchor && anchor}>{content}</h1>;
};

const Heading2 = ({ content, anchor }) => {
  return <h2 id={anchor && anchor}>{content}</h2>;
};

const Heading3 = ({ content, anchor }) => {
  return <h3 id={anchor && anchor}>{content}</h3>;
};

const HeadingAlert = ({ content, anchor }) => {
  return <span className="heading-alert" id={anchor && anchor}>{content}</span>;
};

export { Heading1, Heading2, Heading3, HeadingAlert };
