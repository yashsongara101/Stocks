import upstoxClient from "../client/upstoxClient";

const investmentService = {
  getInvestments: async () => {
    try {
      const { data } = await upstoxClient.get('/bde7230e-bc91-43bc-901d-c79d008bddc8');
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }
};

export default investmentService;