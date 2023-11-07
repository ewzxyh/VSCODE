package backend2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend2.dto.PessoaDto;
import backend2.model.Pessoa;
import backend2.repository.PessoaRepository;
import backend2.mapper.PessoaMapper;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Service

public class PessoaService {
    
    @Autowired
    PessoaRepository pessoaRepository;

    public void save(PessoaDto pessoaDto) {
        Pessoa entity = PessoaMapper.INSTANCE.toModel(pessoaDto);
        pessoaRepository.save(entity);
    }

    public ResponseEntity<?> getPessoa(Long id) {
        Optional<Pessoa> pessoa = pessoaRepository.findById(id);
        if (pessoa.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(PessoaMapper.INSTANCE.toDto(pessoa.get()));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa não encontrada");
    }
}
