<?php

namespace App\Http\Controllers;
use App\Models\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{

    public function index(Request $request)
    {
        $query = Livro::query();
        if ($request->has('search')) {
            $query->where('titulo', 'like', "%{$request->search}%"); // Filtro por titulo
        }
        return $query->paginate(10);
    }

    public function show(Livro $livro)
    {
        return response()->json($livro);
    }

    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'autor' => 'required|string|max:255',
            'descricao' => 'nullable|string',
            'editora' => 'nullable|string|max:255',
            'ano_publicacao' => 'nullable|integer',
        ]);

        $livro = Livro::create($request->all());
        return response()->json($livro, 201);
    }

    public function update(Request $request, Livro $livro)
    {
        $request->validate([
            'titulo' => 'sometimes|required|string|max:255',
            'autor' => 'sometimes|required|string|max:255',
            'descricao' => 'nullable|string',
            'editora' => 'nullable|string|max:255',
            'ano_publicacao' => 'nullable|integer',
        ]);

        $livro->update($request->all());
        return response()->json($livro);
    }

    public function destroy(Livro $livro)
    {
        $livro->delete();
        return response()->json(null, 204);
    }
}
