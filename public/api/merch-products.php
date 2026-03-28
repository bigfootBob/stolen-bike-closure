<?php
header('Content-Type: application/json');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Allow: GET');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$token = getenv('FOURTHWALL_STOREFRONT_TOKEN');
if (!$token) {
    http_response_code(500);
    echo json_encode(['error' => 'Missing storefront token']);
    exit;
}

$url = 'https://storefront-api.fourthwall.com/v1/collections/all/products'
     . '?storefront_token=' . urlencode($token)
     . '&page=0&size=50';

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => ['Accept: application/json'],
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_FOLLOWLOCATION => false,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to reach storefront API']);
    exit;
}

$data = json_decode($response, true);
$results = isset($data['results']) && is_array($data['results']) ? $data['results'] : [];

http_response_code($httpCode === 200 ? 200 : $httpCode);
echo json_encode(['results' => $results]);
