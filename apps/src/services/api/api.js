export const pagarComPagSeguro = async () => {
    const response = await fetch("http://localhost:3001/pagseguro/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference_id: "pedido123", amount: 7990 }),
    });
  
    return await response.json();
  };
  
  export const pagarComPix = async () => {
    const response = await fetch("http://localhost:3001/pix/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 7990, reference_id: "pedido123" }),
    });
  
    return await response.json();
  };
  
  export const pagarComPayPal = async () => {
    const response = await fetch("http://localhost:3001/paypal/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: "79.90" }),
    });
  
    return await response.json();
  };
  