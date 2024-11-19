package com.xncoder.devtalker.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.xncoder.devtalker.Models.Tag;

@Repository
public interface TagRepo extends JpaRepository<Tag, Long>{
	Tag findByName(String tag);
}
