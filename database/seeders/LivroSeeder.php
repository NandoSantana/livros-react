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
            ['titulo' => 'Code Complete', 'autor' => 'Steve McConnell', 'descricao' => 'Práticas recomendadas para desenvolvimento de software.', 'editora' => 'Microsoft Press', 'ano_publicacao' => 2004],
            ['titulo' => 'Refactoring', 'autor' => 'Martin Fowler', 'descricao' => 'Melhores práticas para refatoração de código.', 'editora' => 'Addison-Wesley', 'ano_publicacao' => 1999],
            ['titulo' => 'The Clean Coder', 'autor' => 'Robert C. Martin', 'descricao' => 'Disciplina e ética para desenvolvedores profissionais.', 'editora' => 'Prentice Hall', 'ano_publicacao' => 2011],
            ['titulo' => 'You Don’t Know JS', 'autor' => 'Kyle Simpson', 'descricao' => 'Série aprofundada sobre JavaScript.', 'editora' => 'O\'Reilly Media', 'ano_publicacao' => 2015],
            ['titulo' => 'JavaScript: The Good Parts', 'autor' => 'Douglas Crockford', 'descricao' => 'Os melhores recursos da linguagem JavaScript.', 'editora' => 'O\'Reilly Media', 'ano_publicacao' => 2008],
            ['titulo' => 'Eloquent JavaScript', 'autor' => 'Marijn Haverbeke', 'descricao' => 'Uma abordagem moderna para JavaScript.', 'editora' => 'No Starch Press', 'ano_publicacao' => 2018],
            ['titulo' => 'Python Crash Course', 'autor' => 'Eric Matthes', 'descricao' => 'Curso intensivo de Python para iniciantes.', 'editora' => 'No Starch Press', 'ano_publicacao' => 2019],
            ['titulo' => 'Automate the Boring Stuff with Python', 'autor' => 'Al Sweigart', 'descricao' => 'Automação de tarefas com Python.', 'editora' => 'No Starch Press', 'ano_publicacao' => 2015],
            ['titulo' => 'Fluent Python', 'autor' => 'Luciano Ramalho', 'descricao' => 'Uma abordagem avançada para Python.', 'editora' => 'O\'Reilly Media', 'ano_publicacao' => 2015],
            ['titulo' => 'The Mythical Man-Month', 'autor' => 'Frederick P. Brooks Jr.', 'descricao' => 'Ensaios sobre engenharia de software.', 'editora' => 'Addison-Wesley', 'ano_publicacao' => 1975],
            ['titulo' => 'Programming Pearls', 'autor' => 'Jon Bentley', 'descricao' => 'Soluções elegantes para problemas de programação.', 'editora' => 'Addison-Wesley', 'ano_publicacao' => 1986],
            ['titulo' => 'The Art of Computer Programming', 'autor' => 'Donald Knuth', 'descricao' => 'Clássico sobre algoritmos e estruturas de dados.', 'editora' => 'Addison-Wesley', 'ano_publicacao' => 1968],
            ['titulo' => 'Introduction to the Theory of Computation', 'autor' => 'Michael Sipser', 'descricao' => 'Fundamentos teóricos da computação.', 'editora' => 'Cengage Learning', 'ano_publicacao' => 1996],
            ['titulo' => 'Structure and Interpretation of Computer Programs', 'autor' => 'Harold Abelson, Gerald Jay Sussman', 'descricao' => 'Fundamentos da ciência da computação.', 'editora' => 'MIT Press', 'ano_publicacao' => 1985],
            ['titulo' => 'Compilers: Principles, Techniques, and Tools', 'autor' => 'Alfred Aho, Monica Lam, Ravi Sethi, Jeffrey Ullman', 'descricao' => 'Livro fundamental sobre compiladores.', 'editora' => 'Addison-Wesley', 'ano_publicacao' => 1986],
            ['titulo' => 'Database System Concepts', 'autor' => 'Abraham Silberschatz, Henry Korth, S. Sudarshan', 'descricao' => 'Fundamentos de bancos de dados.', 'editora' => 'McGraw-Hill', 'ano_publicacao' => 2001],
            ['titulo' => 'Designing Data-Intensive Applications', 'autor' => 'Martin Kleppmann', 'descricao' => 'Como criar sistemas escaláveis e confiáveis.', 'editora' => 'O\'Reilly Media', 'ano_publicacao' => 2017],
            ['titulo' => 'Data Science from Scratch', 'autor' => 'Joel Grus', 'descricao' => 'Conceitos de ciência de dados explicados do zero.', 'editora' => 'O\'Reilly Media', 'ano_publicacao' => 2015],
            ['titulo' => 'Machine Learning Yearning', 'autor' => 'Andrew Ng', 'descricao' => 'Guia prático para aplicação de aprendizado de máquina.', 'editora' => 'Self-Published', 'ano_publicacao' => 2018],
            ['titulo' => 'Deep Learning', 'autor' => 'Ian Goodfellow, Yoshua Bengio, Aaron Courville', 'descricao' => 'Fundamentos do deep learning.', 'editora' => 'MIT Press', 'ano_publicacao' => 2016],
            ['titulo' => 'The Elements of Statistical Learning', 'autor' => 'Trevor Hastie, Robert Tibshirani, Jerome Friedman', 'descricao' => 'Métodos estatísticos para aprendizado de máquina.', 'editora' => 'Springer', 'ano_publicacao' => 2001],
            ['titulo' => 'Artificial Intelligence: A Modern Approach', 'autor' => 'Stuart Russell, Peter Norvig', 'descricao' => 'Livro referência sobre IA.', 'editora' => 'Pearson', 'ano_publicacao' => 1995],
            ['titulo' => 'Cybersecurity and Cyberwar', 'autor' => 'P.W. Singer, Allan Friedman', 'descricao' => 'Conceitos de segurança cibernética.', 'editora' => 'Oxford University Press', 'ano_publicacao' => 2014],
            ['titulo' => 'The Web Application Hacker\'s Handbook', 'autor' => 'Dafydd Stuttard, Marcus Pinto', 'descricao' => 'Exploração e defesa contra ataques web.', 'editora' => 'Wiley', 'ano_publicacao' => 2011],
            ['titulo' => 'Computer Networking: A Top-Down Approach', 'autor' => 'James Kurose, Keith Ross', 'descricao' => 'Princípios das redes de computadores.', 'editora' => 'Pearson', 'ano_publicacao' => 2000],
            ['titulo' => 'Networking for Systems Administrators', 'autor' => 'Michael W. Lucas', 'descricao' => 'Guia prático para redes.', 'editora' => 'No Starch Press', 'ano_publicacao' => 2015],
            ['titulo' => 'The Linux Command Line', 'autor' => 'William Shotts', 'descricao' => 'Uso avançado do terminal Linux.', 'editora' => 'No Starch Press', 'ano_publicacao' => 2012],
            ['titulo' => 'How Linux Works', 'autor' => 'Brian Ward', 'descricao' => 'Explicação detalhada do funcionamento do Linux.', 'editora' => 'No Starch Press', 'ano_publicacao' => 2014],
            ['titulo' => 'The Phoenix Project', 'autor' => 'Gene Kim, Kevin Behr, George Spafford', 'descricao' => 'Romance sobre DevOps e transformação digital.', 'editora' => 'IT Revolution Press', 'ano_publicacao' => 2013],
            ['titulo' => 'Accelerate', 'autor' => 'Nicole Forsgren, Jez Humble, Gene Kim', 'descricao' => 'Guia sobre DevOps e entrega contínua.', 'editora' => 'IT Revolution Press', 'ano_publicacao' => 2018]
        ]);
    }
}
