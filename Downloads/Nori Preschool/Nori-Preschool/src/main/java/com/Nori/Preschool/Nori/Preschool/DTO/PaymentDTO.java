package com.Nori.Preschool.Nori.Preschool.DTO;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentDTO {

    private Long id;
    private String referenceID;
    private String proofOfPaymentUrl;

}
