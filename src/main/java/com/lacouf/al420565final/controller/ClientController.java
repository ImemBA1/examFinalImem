package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.model.Client;
import com.lacouf.al420565final.util.ClientFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping
@CrossOrigin
public class ClientController {

    @GetMapping("/getAllClients")
    public ResponseEntity<?> getAllClients() {
        return ResponseEntity.ok(ClientFactory.getClients());
    }

    @GetMapping("/getAllClients/Male")
    public ResponseEntity<?> getAllClientsByGenderMale() {
        List<Client> list = ClientFactory.getClients();
        List<Client> listMale = list.stream()
                .filter(client -> Objects.equals(client.getGender(), "M"))
                .collect(Collectors.toList());
        return ResponseEntity.ok(listMale);
    }

    @GetMapping("/getAllClients/Ontario")
    public ResponseEntity<?> getAllClientsByProvinceOntario() {
        List<Client> list = ClientFactory.getClients();
        List<Client> listOntario = list.stream()
                .filter(client -> Objects.equals(client.getProvince(), "ON"))
                .collect(Collectors.toList());
        return ResponseEntity.ok(listOntario);
    }
}
