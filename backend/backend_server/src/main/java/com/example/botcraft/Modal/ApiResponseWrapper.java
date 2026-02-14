package com.example.botcraft.Modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ApiResponseWrapper<T> {

        private boolean success;
        private String message;
        private T data;


}
