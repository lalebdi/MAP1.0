package com.leahproject.beatle.web;

import com.leahproject.beatle.domain.ProjectTask;
import com.leahproject.beatle.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/board")
public class ProjectTaskController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @PostMapping("")
    public ResponseEntity<?> addPTToBoard(@RequestBody ProjectTask projectTask){
        ProjectTask newPT = projectTaskService.saveOrUpdateProjectTask(projectTask);
        return  new ResponseEntity<ProjectTask>(newPT, HttpStatus.CREATED);
    }
}

//the routing is here
