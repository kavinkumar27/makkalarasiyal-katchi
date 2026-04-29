<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'core/Api_Controller.php';

class GalleryApi extends Api_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Gallery_model');
    }

    // GET /api/gallery
    public function index() {
        $category = $this->input->get('category');
        if ($category) {
            $images = $this->Gallery_model->get_by_category($category);
        } else {
            $images = $this->Gallery_model->get_all();
        }
        $this->json_response(array('status' => 'success', 'data' => $images));
    }

    // POST /api/gallery/upload
    public function upload() {
        $this->require_auth();

        $config['upload_path'] = './uploads/gallery/';
        $config['allowed_types'] = 'gif|jpg|jpeg|png|webp';
        $config['max_size'] = 5120; // 5MB
        $config['encrypt_name'] = TRUE;

        if (!is_dir($config['upload_path'])) {
            mkdir($config['upload_path'], 0777, true);
        }

        $this->load->library('upload', $config);

        if (!$this->upload->do_upload('image')) {
            $this->json_response(array('status' => 'error', 'message' => $this->upload->display_errors('', '')), 400);
        }

        $upload_data = $this->upload->data();
        $data = array(
            'title' => $this->input->post('title'),
            'category' => $this->input->post('category'),
            'image_path' => base_url('uploads/gallery/' . $upload_data['file_name'])
        );

        $id = $this->Gallery_model->insert($data);
        $this->json_response(array('status' => 'success', 'id' => $id, 'message' => 'Image uploaded'));
    }

    // DELETE /api/gallery/:id
    public function delete($id = null) {
        $this->require_auth();
        if (!$id) $this->json_response(array('status' => 'error', 'message' => 'ID required'), 400);
        $this->Gallery_model->delete($id);
        $this->json_response(array('status' => 'success', 'message' => 'Image deleted'));
    }
}
