package backend2.mapper;

import backend2.dto.PessoaDto;
import backend2.model.Pessoa;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-11-07T19:44:44-0300",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.36.0.v20231030-1524, environment: Java 17.0.9 (Eclipse Adoptium)"
)
public class PessoaMapperImpl implements PessoaMapper {

    @Override
    public PessoaDto toDto(Pessoa p) {
        if ( p == null ) {
            return null;
        }

        PessoaDto pessoaDto = new PessoaDto();

        pessoaDto.setCpf( p.getCpf() );
        pessoaDto.setEndereco( p.getEndereco() );
        pessoaDto.setId( p.getId() );
        pessoaDto.setNome( p.getNome() );

        return pessoaDto;
    }

    @Override
    public Pessoa toModel(PessoaDto p) {
        if ( p == null ) {
            return null;
        }

        Pessoa pessoa = new Pessoa();

        pessoa.setCpf( p.getCpf() );
        pessoa.setEndereco( p.getEndereco() );
        pessoa.setId( p.getId() );
        pessoa.setNome( p.getNome() );

        return pessoa;
    }
}
