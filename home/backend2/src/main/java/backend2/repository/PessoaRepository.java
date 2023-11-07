package backend2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


import backend2.model.Pessoa;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    Optional<Pessoa> findById(Long id);
}

