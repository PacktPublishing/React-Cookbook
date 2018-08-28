import axios from 'axios';
import Layout from '../components/Layout';
import Coins from '../components/Coins';

const Index = ({ coins }) => (
  <Layout>
    <div className="index">
      <Coins coins={coins} />
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const url = 'https://api.coinmarketcap.com/v1/ticker/';
  const res = await axios.get(url);

  return {
    coins: res.data
  };
};

export default Index;
