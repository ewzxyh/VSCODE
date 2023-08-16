import java.io.File;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;

public class ImageResizer {

  // Redimensiona uma imagem para um tamanho específico usando a biblioteca de imagens Java
  public static BufferedImage resizeImage(BufferedImage originalImage, int targetWidth, int targetHeight) throws IOException {
    BufferedImage resizedImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);
    resizedImage.getGraphics().drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);
    return resizedImage;
  }
  
  public void resizePng() throws IOException {
    // O caminho para a pasta onde as imagens estão armazenadas
    String path = "C:\\Users\\yoshi\\OneDrive\\Área de Trabalho\\lovtokimages";

    // Lê o conteúdo da pasta
    File folder = new File(path);
    File[] listOfFiles = folder.listFiles();

    // Percorre cada arquivo na pasta
    for (File file : listOfFiles) {
      if (file.isFile() && file.getName().endsWith(".png")) {
        try {
          // Abre a imagem usando a biblioteca de imagens Java
          BufferedImage image = ImageIO.read(file);

          // Redimensiona a imagem para 1000x1000 usando a biblioteca de imagens Java
          BufferedImage resizedImage = resizeImage(image, 1000, 1000);

          // Salva a imagem redimensionada com o mesmo nome do arquivo original
          ImageIO.write(resizedImage, "png", file);
        } catch (IOException e) {
          System.out.println("Erro ao redimensionar imagem: " + file.getName());
          e.printStackTrace();
        }
      }
    }
  }
}


