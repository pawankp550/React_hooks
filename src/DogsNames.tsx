import withData from "./withData";

const DogNames = (props: any) => {
  const { data } = props;
  return (
    <div>
      <title> Dog Names </title>
      {data?.map((d) => (
        <span>{d}</span>
      ))}
    </div>
  );
};

export default withData(DogNames);
