import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [tasks,setTasks] = useState([])
    const [isLoading, setIsLoading]=useState([])
  //const [count, setCount] = useState(5)
  //const [count1, setCount1] = useState(30)

    const loadTasks = () =>{
        setIsLoading(true)
        axios({
         method:'GET',
            url: 'https://pasv-kanban.herokuapp.com/card'
        }).then(({data}) =>{
            setTasks(data)
        }).finally(()=>{
            setIsLoading(false)
        })

        // eslint-disable-next-line react-hooks/rules-of-hooks


    }
    useEffect(() => {console.log('Once')
        loadTasks() }, [])
  return (
    //<div className="App">
   //Hello {count} {count1}
      //<button onClick={() => setCount(count + 1)}> Plus</button>
      //<button onClick={() => setCount1(count1 + 10)}>Plus1</button>
    //</div>
      <div>
          <button onClick={loadTasks}>Load Tasks </button>
          {isLoading?'...loading':tasks.map(el => <li key={el.id}>{el.name}-{el.status} </li>)}


      </div>
  );
}

export default App;
