package backend2.mapper;

import org.mapstruct.factory.Mappers;
import backend2.dto.PessoaDto;
import backend2.model.Pessoa;
import org.mapstruct.Mapper;

@Mapper
public interface PessoaMapper {
    PessoaMapper INSTANCE = Mappers.getMapper(PessoaMapper.class);
    PessoaDto toDto(Pessoa p);
    Pessoa toModel(PessoaDto p);
}