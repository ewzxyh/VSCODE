package backend2.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "pessoa_empresa")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class PessoaEmpresa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(optional = false)
    private Pessoa pessoa;

    @ManyToOne(optional = false)
    private Empresa empresa;
}
