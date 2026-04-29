<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Enquiry_model extends CI_Model {

    private $table = 'enquiries';

    public function get_all() {
        return $this->db->order_by('created_at', 'DESC')->get($this->table)->result();
    }

    public function get_by_id($id) {
        return $this->db->get_where($this->table, array('id' => $id))->row();
    }

    public function insert($data) {
        $this->db->insert($this->table, $data);
        return $this->db->insert_id();
    }

    public function update($id, $data) {
        $this->db->where('id', $id)->update($this->table, $data);
    }

    public function delete($id) {
        $this->db->where('id', $id)->delete($this->table);
    }
}
