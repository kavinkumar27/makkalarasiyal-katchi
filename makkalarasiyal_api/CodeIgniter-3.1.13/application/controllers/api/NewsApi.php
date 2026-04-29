<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'core/Api_Controller.php';

class NewsApi extends Api_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('News_model');
    }

    // GET /api/news
    public function index() {
        $news = $this->News_model->get_all();
        $this->json_response(array('status' => 'success', 'data' => $news));
    }

    // GET /api/news/:id
    public function show($id = null) {
        if (!$id) $this->json_response(array('status' => 'error', 'message' => 'ID required'), 400);
        $item = $this->News_model->get_by_id($id);
        if (!$item) $this->json_response(array('status' => 'error', 'message' => 'Not found'), 404);
        $this->json_response(array('status' => 'success', 'data' => $item));
    }

    // POST /api/news/create
    public function create() {
        $this->require_auth();

        $data = array(
            'title' => $this->input->post('title'),
            'description' => $this->input->post('description'),
            'news_date' => $this->input->post('news_date'),
        );

        // Optional image upload
        if (!empty($_FILES['image']['name'])) {
            $config['upload_path'] = './uploads/news/';
            $config['allowed_types'] = 'gif|jpg|jpeg|png|webp';
            $config['max_size'] = 5120;
            $config['encrypt_name'] = TRUE;

            if (!is_dir($config['upload_path'])) {
                mkdir($config['upload_path'], 0777, true);
            }

            $this->load->library('upload', $config);
            if ($this->upload->do_upload('image')) {
                $upload_data = $this->upload->data();
                $data['image_path'] = base_url('uploads/news/' . $upload_data['file_name']);
            }
        }

        $id = $this->News_model->insert($data);
        $this->json_response(array('status' => 'success', 'id' => $id, 'message' => 'News created'));
    }

    // POST /api/news/update/:id
    public function update($id = null) {
        $this->require_auth();
        if (!$id) $this->json_response(array('status' => 'error', 'message' => 'ID required'), 400);

        $data = array(
            'title' => $this->input->post('title'),
            'description' => $this->input->post('description'),
            'news_date' => $this->input->post('news_date'),
        );

        if (!empty($_FILES['image']['name'])) {
            $config['upload_path'] = './uploads/news/';
            $config['allowed_types'] = 'gif|jpg|jpeg|png|webp';
            $config['max_size'] = 5120;
            $config['encrypt_name'] = TRUE;

            if (!is_dir($config['upload_path'])) {
                mkdir($config['upload_path'], 0777, true);
            }

            $this->load->library('upload', $config);
            if ($this->upload->do_upload('image')) {
                $upload_data = $this->upload->data();
                $data['image_path'] = base_url('uploads/news/' . $upload_data['file_name']);
            }
        }

        $this->News_model->update($id, $data);
        $this->json_response(array('status' => 'success', 'message' => 'News updated'));
    }

    // DELETE /api/news/:id
    public function delete($id = null) {
        $this->require_auth();
        if (!$id) $this->json_response(array('status' => 'error', 'message' => 'ID required'), 400);
        $this->News_model->delete($id);
        $this->json_response(array('status' => 'success', 'message' => 'News deleted'));
    }
}
