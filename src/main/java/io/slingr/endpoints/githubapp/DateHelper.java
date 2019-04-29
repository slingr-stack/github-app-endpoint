package io.slingr.endpoints.githubapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateHelper {
    private static final Logger logger = LoggerFactory.getLogger(DateHelper.class);
    private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssZ");

    public static Date convertToDate(String str) {
        try {
            return sdf.parse(str.replaceAll("Z$", "+0000"));
        } catch (ParseException e) {
            logger.error(String.format("Error parsing date [%s]", str));
            throw new IllegalArgumentException(String.format("Error parsing date [%s]", str), e);
        }
    }
}
