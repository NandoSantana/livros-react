import axios from "axios";

const LivroService = {
    
    // function insert(data){
    //     axios
    //     .post(`http://127.0.0.1:8000/api/livros`, data)
    //     .then((res) => {
    //         console.log('res insert', res )
    //     });
    // }

    // function edit(data){
    //     axios
    //     .put(`http://127.0.0.1:8000/api/livros/${data.id}`, data)
    //     .then((res) => {
    //         console.log('Edit',res)
    //     });
    // }

    // function remove(data){
    //     console.log('data', data)
    //     // axios
    //     // .delete(`http://127.0.0.1:8000/api/livros/${data.id}`)
    //     // .then((res) => {
    //     //     Console.log('res deleting', res)
    //     // });
    // }
    getOne: (id) => {
        return axios.get(`http://127.0.0.1:8000/api/livros/${id}`)
          .then((res) => {
            console.log("Livro colhido com sucesso", res.data);
            return res.data;
          })
          .catch((error) => {
            console.error("Erro ao colher livro", error);
            throw error;
          });
      },
    
    insert: (data) => {
        return axios.post(`http://127.0.0.1:8000/api/livros/`, data)
          .then((res) => {
            console.log("Livro inserido com sucesso", res.data);
            return res.data;
          })
          .catch((error) => {
            console.error("Erro ao inserir livro", error);
            throw error;
          });
      },
    
      edit: (data) => {
        return axios.put(`http://127.0.0.1:8000/api/livros/${data.id}`, data)
          .then((res) => {
            console.log("Livro editado com sucesso", res.data);
            return res.data;
          })
          .catch((error) => {
            console.error("Erro ao editar livro", error);
            throw error;
          });
      },
    

    remove: (id) => {
        return axios.delete(`http://127.0.0.1:8000/api/livros/${id}`)
          .then((res) => {
            console.log("Livro removido com sucesso");
            return res.data;
          })
          .catch((error) => {
            console.error("Erro ao remover livro", error);
            throw error;
          });
      }


}
export default LivroService;