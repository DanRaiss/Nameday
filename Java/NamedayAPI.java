import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class NamedayAPI {
    private final String baseUrl;

    public NamedayAPI(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public String getToday(String countryCode, String timezone) throws Exception {
        LocalDate today = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd");
        String date = today.format(formatter);
        String urlString = String.format("%s/nameday/today/%s/%s", baseUrl, countryCode, date);
        if (timezone != null) {
            urlString += "?timezone=" + timezone;
        }
        return sendGetRequest(urlString);
    }

    public String getTomorrow(String countryCode, String timezone) throws Exception {
        LocalDate tomorrow = LocalDate.now().plusDays(1);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd");
        String date = tomorrow.format(formatter);
        String urlString = String.format("%s/nameday/tomorrow/%s/%s", baseUrl, countryCode, date);
        if (timezone != null) {
            urlString += "?timezone=" + timezone;
        }
        return sendGetRequest(urlString);
    }

    public String getYesterday(String countryCode, String timezone) throws Exception {
        LocalDate yesterday = LocalDate.now().minusDays(1);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd");
        String date = yesterday.format(formatter);
        String urlString = String.format("%s/nameday/yesterday/%s/%s", baseUrl, countryCode, date);
        if (timezone != null) {
            urlString += "?timezone=" + timezone;
        }
        return sendGetRequest(urlString);
    }

    public String getNameDay(String countryCode, String day, String month, String timezone) throws Exception {
        String dateString = String.format("%s-%s", month, day);
        String urlString = String.format("%s/nameday/date/%s/%s", baseUrl, countryCode, dateString);
        if (timezone != null) {
            urlString += "?timezone=" + timezone;
        }
        return sendGetRequest(urlString);
    }

    public String getName(String countryCode, String name, String timezone) throws Exception {
        String urlString = String.format("%s/nameday/name/%s/%s", baseUrl, countryCode, name);
        if (timezone != null) {
            urlString += "?timezone=" + timezone;
        }
        return sendGetRequest(urlString);
    }

    private String sendGetRequest(String urlString) throws Exception {
        URL url = new URL(urlString);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String line;
        StringBuilder response = new StringBuilder();
        while ((line = reader.readLine()) != null) {
            response.append(line);
        }
        reader.close();
        return response.toString();
    }
}
