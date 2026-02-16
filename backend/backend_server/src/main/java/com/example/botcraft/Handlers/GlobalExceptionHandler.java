package com.example.botcraft.Handlers;

import com.example.botcraft.Modal.ApiResponseWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler  {

        @ExceptionHandler(Exception.class)
        public ResponseEntity<ApiResponseWrapper<?>> handleGeneral(Exception ex) {
            System.out.println(ex.getMessage() + "the error is this handle it ");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseWrapper<>(false, "Something went wrong", null));
        }

}
