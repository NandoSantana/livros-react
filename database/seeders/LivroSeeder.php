<?php

namespace Database\Seeders;

use App\Models\Livro;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class LivroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Livro::insert([
            [
                'titulo' => 'Clean Code',
                'autor' => 'Robert C. Martin',
                'descricao' => 'Um livro sobre boas práticas na programação.',
                'editora' => 'Prentice Hall',
                'ano_publicacao' => 2008,
            ],
            [
                'titulo' => 'The Pragmatic Programmer',
                'autor' => 'Andrew Hunt, David Thomas',
                'descricao' => 'Melhores práticas para desenvolvedores pragmáticos.',
                'editora' => 'Addison-Wesley',
                'ano_publicacao' => 1999,
            ],
            [
                'titulo' => 'Design Patterns',
                'autor' => 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
                'descricao' => 'Padrões de projeto na programação orientada a objetos.',
                'editora' => 'Addison-Wesley',
                'ano_publicacao' => 1994,
            ]
        ]);
    }
}
