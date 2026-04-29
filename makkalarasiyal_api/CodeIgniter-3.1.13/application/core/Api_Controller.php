<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Base API Controller - Provides CORS headers and JSON helpers
 */
class Api_Controller extends CI_Controller {

    public function __construct() {
        parent::__construct();
        
        // CORS Headers
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Content-Type: application/json; charset=UTF-8');

        // Handle preflight
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        }
    }

    protected function json_response($data, $status = 200) {
        http_response_code($status);
        echo json_encode($data);
        exit();
    }

    protected function get_json_input() {
        $json = file_get_contents('php://input');
        return json_decode($json, true) ?: array();
    }

    protected function require_auth() {
        $headers = $this->input->request_headers();
        $auth = isset($headers['Authorization']) ? $headers['Authorization'] : '';
        
        if (strpos($auth, 'Bearer ') === 0) {
            $token = substr($auth, 7);
            $this->load->model('User_model');
            $user = $this->User_model->get_by_token($token);
            if ($user) {
                return $user;
            }
        }

        $this->json_response(array('status' => 'error', 'message' => 'Unauthorized'), 401);
    }
}
