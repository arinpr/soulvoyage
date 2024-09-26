package com.diary.mldiary.util;

import io.jsonwebtoken.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

public class JWTToken {

    private static final String SECRET = "temporary_secret_key";
    private static final long EXPIRATION_TIME = 1000*60*60*24*10; // 10 days
//private static final long EXPIRATION_TIME = 1000;
    private static String addEmailAtStartToToken(String token) {
        String email = extractEmail(token);
        return ("Bearer "+email+" | "+token);
    }

    private static Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private static Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody();
    }
    public static <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private static Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public static Boolean validateToken(String token) {
        Integer tokenStartingIndex = token.indexOf("|")+2;
        String email = token.substring(7, tokenStartingIndex-3);
        String JWTToken = token.substring(tokenStartingIndex);
        String JWTTokenEmail = extractEmail(JWTToken);
        return (JWTTokenEmail.equals(email) && !isTokenExpired(JWTToken));
    }

    public static String generateToken(String email) {

        Map<String, Object> claims = new HashMap<>();

        return addEmailAtStartToToken(Jwts.builder()
                .setClaims(claims)
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact());
    }

    public static String extractEmail(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
