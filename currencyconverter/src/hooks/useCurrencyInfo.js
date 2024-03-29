import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
        setData({}); // Resetting data or setting it to a known error state might be helpful
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
