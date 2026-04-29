<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {

    private $table = 'users';

    public function get_by_username($username) {
        return $this->db->get_where($this->table, array('username' => $username))->row();
    }

    public function get_by_token($token) {
        return $this->db->get_where($this->table, array('auth_token' => $token))->row();
    }

    public function update_token($id, $token) {
        $this->db->where('id', $id);
        $this->db->update($this->table, array('auth_token' => $token));
    }
}
