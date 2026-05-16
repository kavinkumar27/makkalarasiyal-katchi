<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'core/Api_Controller.php';

class Auth extends Api_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('User_model');
    }

    public function login() {
        $input = $this->get_json_input();
        $username = isset($input['username']) ? trim($input['username']) : '';
        $password = isset($input['password']) ? $input['password'] : '';

        if (empty($username) || empty($password)) {
            $this->json_response(array('status' => 'error', 'message' => 'Username and password required'), 400);
        }

        $user = $this->User_model->get_by_username($username);

//         $hash = password_hash($password, PASSWORD_DEFAULT);

// echo $hash."\n";
// echo strlen($hash);

        if ($user && password_verify($password, $user->password)) {
            $token = bin2hex(random_bytes(32));
            $this->User_model->update_token($user->id, $token);
            $this->json_response(array(
                'status' => 'success',
                'token' => $token,
                'user' => $user->username
            ));
        }

        $this->json_response(array('status' => 'error', 'message' => 'Invalid credentials'), 401);
    }

    public function logout() {
        $user = $this->require_auth();
        $this->User_model->update_token($user->id, null);
        $this->json_response(array('status' => 'success', 'message' => 'Logged out'));
    }
}
