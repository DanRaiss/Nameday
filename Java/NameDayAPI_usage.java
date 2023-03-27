public static void main(String[] args) throws Exception {
    NamedayAPI api = new NamedayAPI("https://your-api-url.com");
    String today = api.getToday("US", "America/New_York");
    System.out.println(today);
}
