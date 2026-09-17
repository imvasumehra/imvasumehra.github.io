// Renders **marked** spans in constant strings as bold, so the content stays
// plain text that's easy to edit rather than JSX.
const RichText = ({ children }) => {
  if (typeof children !== "string") return children;

  return children.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className='font-semibold text-white'>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
};

export default RichText;
