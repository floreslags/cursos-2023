/* export const helpHttp = ()=>{

    const customFetch = (endPoint,options)=>{

        // Declaración de cabeceras por defecto
        const defaultHeaders = {
            accept:"application/json"
        }

        // Configuración para cuando no hay respuesta del servidor API
        const controller = new AbortController();
        options.signal = controller.signal;
        
        //Configuración de los métodos
        options.method = options.method || "GET";

        //Configuración de los encabezados
        options.headers = options.headers ? {...defaultHeaders,...options.headers} : defaultHeaders;
        
        //Formateo del la data de intercambio
        options.body = JSON.stringify(options.body) || false;

        // Validación de un objeto body, antes de ser enviado
        if(!options.body) delete options.body;

        console.log(options);

        setTimeout(() => controller.abort(), 3000);


        return fetch(endPoint,options)
        .then((res)=>{
            res.ok
            ?res.json()
            :Promise.reject({
                err:true,
                status:res.status||"00",
                statusText:res.statusText||"There was an error"
            })
        })
        .catch((err)=>err);
    }

    const get = (url,options = {})=>customFetch(url,options);

    const post = (url,options = {})=>{
        options.method = "POST";
        return customFetch(url,options);
    }

    const put = (url,options = {})=>{
        options.method = "PUT";
        return customFetch(url,options);
    }

    const del = (url,options = {})=>{
        options.method = "DELETE";
        return customFetch(url,options);
    }
    
    return {
        get,post,put,del
    }
} */

export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
      const defaultHeader = {
        accept: "application/json",
      };
  
      const controller = new AbortController();
      options.signal = controller.signal;
  
      options.method = options.method || "GET";
      options.headers = options.headers
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;
  
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
  
      //console.log(options);
      setTimeout(() => controller.abort(), 3000);
  
      return fetch(endpoint, options)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error",
              })
        )
        .catch((err) => err);
    };
  
    const get = (url, options = {}) => customFetch(url, options);
  
    const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    };
  
    const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    };
  
    const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  };