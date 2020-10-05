import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../Components/Prices'


const Index = (props) => (
  <Layout>
    <div>
      <h1>Crypto Price</h1>
      <Prices bpi = {props.bpi} />
      
    </div>
  </Layout>
);
Index.getInitialProps = async function(){
    const res = await fetch('API URL');
    const data = await res.json();
    
    return {
        bpi : data.bpi
    };
}

export default Index;