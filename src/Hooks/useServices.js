import { useEffect, useState } from "react";


const useServices =()=>{

  // get all services from json file 
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("/classes.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return {services};
}

export default useServices;