import react, { FC } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const SearchForm: FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default SearchForm;
