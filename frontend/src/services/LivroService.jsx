export default function LivroService(url, data){

    function insert(url, data){
        axios
        .post(`http://127.0.0.1:8000/api/livros?search=${search}&page=${page}`)
        .then((res) => {

        });
    }

    function edit(url, data){
        axios
        .put(`http://127.0.0.1:8000/api/livros/${data.id}`)
        .then((res) => {

        });
    }

    function remove(url, data){
        axios
        .delete(`http://127.0.0.1:8000/api/livros/${data.id}`)
        .then((res) => {

        });
    }


}