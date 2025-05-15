import { NextPage } from "next";

const OrderOnline: NextPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="https://orderonline.granburyrs.com/slice/index.html?accountId=dd37e4bf-6698-4488-9c72-7c6e8284dd89&locationId=5bf36e26-080a-492d-9fb3-022a059b1a08"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Order Online"
      />
    </div>
  );
};

export default OrderOnline;
