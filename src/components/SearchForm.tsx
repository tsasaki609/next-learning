import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

export type Inputs = {
  example: string;
  exampleRequired: string;
};

type Props = {
  update: (data: Inputs) => void;
  example: string;
};

const SearchForm: FC<Props> = (props) => {
  const { update, example } = props;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => update(data); // TODO useContext？useReducer?

  // useCallbackで入力値を制御する？ ライブラリがやってくれてそうな感はあるけど
  // 入力値のローカルステートは自前で管理する必要がなくてハンドラに渡ってくるものを使えばよし

  // console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue={example} ref={register} />
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default SearchForm;
