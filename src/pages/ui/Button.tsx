
interface btntype {
  btntext: String;
}

const Button = ({ btntext}: btntype) => {
  return (
    <button className="rounded-2xl bg-primary py-2 px-5">
      {btntext}
    </button>
  );
};

export default Button;
