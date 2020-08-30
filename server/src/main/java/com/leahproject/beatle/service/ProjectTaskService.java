package com.leahproject.beatle.service;

import com.leahproject.beatle.domain.ProjectTask;
import com.leahproject.beatle.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask){

        if(projectTask.getStatus()== null || projectTask.getStatus().equals("")){
            projectTask.setStatus("To_DO");
        }

        return projectTaskRepository.save(projectTask);
    }
}

//the logic here
