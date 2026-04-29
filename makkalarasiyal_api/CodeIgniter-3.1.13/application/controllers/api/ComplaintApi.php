<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'core/Api_Controller.php';

class ComplaintApi extends Api_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Complaint_model');
    }

    // GET /api/complaint - Admin: get all complaints
    public function index() {
        $this->require_auth();
        $complaints = $this->Complaint_model->get_all();
        $this->json_response(array('status' => 'success', 'data' => $complaints));
    }

    // POST /api/complaint - Public: submit complaint
    public function submit() {
        $data = array(
            'name' => $this->input->post('name'),
            'phone' => $this->input->post('phone'),
            'location' => $this->input->post('location'),
            'complaint_text' => $this->input->post('complaint_text'),
        );

        if (empty($data['name']) || empty($data['phone']) || empty($data['location']) || empty($data['complaint_text'])) {
            $this->json_response(array('status' => 'error', 'message' => 'All fields are required'), 400);
        }

        // Optional image upload
        if (!empty($_FILES['image']['name'])) {
            $config['upload_path'] = './uploads/complaints/';
            $config['allowed_types'] = 'gif|jpg|jpeg|png|webp';
            $config['max_size'] = 5120;
            $config['encrypt_name'] = TRUE;

            if (!is_dir($config['upload_path'])) {
                mkdir($config['upload_path'], 0777, true);
            }

            $this->load->library('upload', $config);
            if ($this->upload->do_upload('image')) {
                $upload_data = $this->upload->data();
                $data['image_path'] = base_url('uploads/complaints/' . $upload_data['file_name']);
            }
        }

        $id = $this->Complaint_model->insert($data);
        $this->json_response(array('status' => 'success', 'id' => $id, 'message' => 'Complaint submitted successfully'));
    }

    // PUT /api/complaint/resolve/:id
    public function resolve($id = null) {
        $this->require_auth();
        if (!$id) $this->json_response(array('status' => 'error', 'message' => 'ID required'), 400);
        $this->Complaint_model->update($id, array('status' => 'Resolved'));
        $this->json_response(array('status' => 'success', 'message' => 'Complaint resolved'));
    }

    // DELETE /api/complaint/:id
    public function delete($id = null) {
        $this->require_auth();
        if (!$id) $this->json_response(array('status' => 'error', 'message' => 'ID required'), 400);
        $this->Complaint_model->delete($id);
        $this->json_response(array('status' => 'success', 'message' => 'Complaint deleted'));
    }
}
