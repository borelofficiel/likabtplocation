<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../vendor/autoload.php';

// ================================
// 🔹 CORS
// ================================
header("Access-Control-Allow-Origin: http://localhost:5173"); // React app
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // ⚠️ Ajouter Content-Type

// ================================
// 🔹 Préflight OPTIONS
// ================================
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ================================
// 🔹 Vérification POST
// ================================
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Méthode non autorisée"]);
    exit;
}

// ================================
// 🔹 Récupérer les données JSON
// ================================
$input = json_decode(file_get_contents('php://input'), true);

$name = htmlspecialchars($input['name'] ?? '');
$email = htmlspecialchars($input['email'] ?? '');
$phone = htmlspecialchars($input['phone'] ?? '');
$subject = htmlspecialchars($input['subject'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');

// ================================
// 🔹 Validation simple
// ================================
if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Veuillez remplir tous les champs obligatoires !"]);
    exit;
}

// ================================
// 🔹 PHPMailer
// ================================
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'boreltiefoue@gmail.com';
    $mail->Password   = 'kxja kytb dnlf dsni'; // mot de passe d'application Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Expéditeur & destinataire
    $mail->setFrom('boreltiefoue@gmail.com', 'Site LikaBTP');
    $mail->addAddress('boreltiefoue@gmail.com', 'Borel Tiefoue');

    // Contenu
    $mail->isHTML(true);
    $mail->Subject = 'Nouveau message: ' . $subject;
    $mail->Body = "
        <h2>Nouveau message depuis le formulaire</h2>
        <p><strong>Nom :</strong> {$name}</p>
        <p><strong>Email :</strong> {$email}</p>
        <p><strong>Téléphone :</strong> {$phone}</p>
        <p><strong>Sujet :</strong> {$subject}</p>
        <p><strong>Message :</strong><br>{$message}</p>
    ";

    $mail->send();

    echo json_encode(["status" => "success", "message" => "Le message a été envoyé avec succès !"]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Erreur lors de l'envoi du mail: {$mail->ErrorInfo}"]);
}