package backend2.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "empresa")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Empresa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(length = 150)
    private String nome;
    @Column(unique = true, length = 15)
    private String cnpj;
    @Column(length = 250)
    private String endereco;
}
