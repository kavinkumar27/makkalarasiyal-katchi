<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gallery_model extends CI_Model {

    private $table = 'gallery';

    public function get_all() {
        return $this->db->order_by('created_at', 'DESC')->get($this->table)->result();
    }

    public function get_by_category($category) {
        return $this->db->where('category', $category)->order_by('created_at', 'DESC')->get($this->table)->result();
    }

    public function get_by_id($id) {
        return $this->db->get_where($this->table, array('id' => $id))->row();
    }

    public function insert($data) {
        $this->db->insert($this->table, $data);
        return $this->db->insert_id();
    }

    public function delete($id) {
        $this->db->where('id', $id)->delete($this->table);
    }
}
