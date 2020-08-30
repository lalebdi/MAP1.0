package com.leahproject.beatle.web;

import com.leahproject.beatle.domain.ProjectTask;
import com.leahproject.beatle.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/board")
public class ProjectTaskController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @PostMapping("")
    public ResponseEntity<?> addPTToBoard(@Valid @RequestBody ProjectTask projectTask, BindingResult result){
//        below I am compressing the error message to have just show whats missing
        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();

            for (FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return  new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        ProjectTask newPT = projectTaskService.saveOrUpdateProjectTask(projectTask);
        return  new ResponseEntity<ProjectTask>(newPT, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<ProjectTask> getAllPtS(){
        return projectTaskService.findAll();
    }
}

//the routing is here
