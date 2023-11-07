package backend2.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "pessoa")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 150)
    private String nome;

    @Column(unique = true, length = 11)
    private String cpf;

    @Column(length = 250)
    private String endereco;
}
