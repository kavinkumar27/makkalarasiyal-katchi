<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'core/Api_Controller.php';

class ContactApi extends Api_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Enquiry_model');
    }

    // GET /api/contact - Admin: get all enquiries
    public function index() {
        $this->require_auth();
        $enquiries = $this->Enquiry_model->get_all();
        $this->json_response(array('status' => 'success', 'data' => $enquiries));
    }

    // POST /api/contact - Public: submit enquiry
    public function submit() {
        $input = $this->get_json_input();
        
        $data = array(
            'name' => isset($input['name']) ? trim($input['name']) : '',
            'email' => isset($input['email']) ? trim($input['email']) : '',
            'phone' => isset($input['phone']) ? trim($input['phone']) : '',
            'message' => isset($input['message']) ? trim($input['message']) : '',
        );

        if (empty($data['name']) || empty($data['email']) || empty($data['phone']) || empty($data['message'])) {
            $this->json_response(array('status' => 'error', 'message' => 'All fields are required'), 400);
        }

        $id = $this->Enquiry_model->insert($data);
        $this->json_response(array('status' => 'success', 'id' => $id, 'message' => 'Enquiry submitted successfully'));
    }

    // PUT /api/contact/resolve/:id
    public function resolve($id = null) {
        $this->require_auth();
        if (!$id) $this->json_response(array('status' => 'error', 'message' => 'ID required'), 400);
        $this->Enquiry_model->update($id, array('status' => 'Resolved'));
        $this->json_response(array('status' => 'success', 'message' => 'Enquiry resolved'));
    }

    // DELETE /api/contact/:id
    public function delete($id = null) {
        $this->require_auth();
        if (!$id) $this->json_response(array('status' => 'error', 'message' => 'ID required'), 400);
        $this->Enquiry_model->delete($id);
        $this->json_response(array('status' => 'success', 'message' => 'Enquiry deleted'));
    }
}
