<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'core/Api_Controller.php';

class DashboardApi extends Api_Controller {

    public function __construct() {
        parent::__construct();
    }

    // GET /api/dashboard
    public function index() {
        $this->require_auth();

        $data = array(
            'enquiries' => $this->db->count_all('enquiries'),
            'complaints' => $this->db->count_all('complaints'),
            'gallery' => $this->db->count_all('gallery'),
            'news' => $this->db->count_all('news'),
        );

        $this->json_response(array('status' => 'success', 'data' => $data));
    }
}
