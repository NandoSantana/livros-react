export default function LivroService(url, data){

    function getOneBook(data){
        axios
        .get(`http://127.0.0.1:8000/api/livros/${data.id}`, data)
        .then((res) => {

        });
    }

    function insert(data){
        axios
        .post(`http://127.0.0.1:8000/api/livros`, data)
        .then((res) => {

        });
    }

    function edit(data){
        axios
        .put(`http://127.0.0.1:8000/api/livros/${data.id}`)
        .then((res) => {

        });
    }

    function remove(data){
        axios
        .delete(`http://127.0.0.1:8000/api/livros/${data.id}`)
        .then((res) => {

        });
    }


}