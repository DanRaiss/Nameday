class NamedayAPI {
  private $base_url;

  public function __construct($base_url) {
    $this->base_url = $base_url;
  }

  public function getTodayNameday($countryCode, $timezone = null) {
    $url = $this->base_url . '/nameday/today/' . $countryCode;
    if ($timezone !== null) {
      $url .= '?timezone=' . $timezone;
    }
    $response = file_get_contents($url);
    return json_decode($response, true);
  }

  public function getTomorrowNameday($countryCode, $timezone = null) {
    $url = $this->base_url . '/nameday/tomorrow/' . $countryCode;
    if ($timezone !== null) {
      $url .= '?timezone=' . $timezone;
    }
    $response = file_get_contents($url);
    return json_decode($response, true);
  }

  public function getYesterdayNameday($countryCode, $timezone = null) {
    $url = $this->base_url . '/nameday/yesterday/' . $countryCode;
    if ($timezone !== null) {
      $url .= '?timezone=' . $timezone;
    }
    $response = file_get_contents($url);
    return json_decode($response, true);
  }

  public function getNameday($day, $month, $countryCode) {
    $url = $this->base_url . '/nameday/getnameday/' . $day . '/' . $month . '/' . $countryCode;
    $response = file_get_contents($url);
    return json_decode($response, true);
  }

  public function getDateNameday($name, $countryCode) {
    $url = $this->base_url . '/nameday/getdate/' . $name . '/' . $countryCode;
    $response = file_get_contents($url);
    return json_decode($response, true);
  }
}


/**
  Use:
  $api = new NamedayAPI('http://example.com/api');
  $result = $api->getTodayNameday('CZ');
  echo $result['name'];

*/