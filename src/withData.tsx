import { useEffect, useState } from "react";

const withData = (Element: any, asyncFn: any) => {
  return (props: any) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
      try {
        setLoading(true);
        const data = await asyncFn();
        setData(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      getData();
    }, [asyncFn]);

    if (loading) {
      return <span>Loading...</span>;
    }

    return <Element {...props} data={data} />;
  };
};

export default withData;
