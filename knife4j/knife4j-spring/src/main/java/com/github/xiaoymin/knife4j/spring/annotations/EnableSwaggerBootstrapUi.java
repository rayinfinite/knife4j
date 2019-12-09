/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */
package com.github.xiaoymin.knife4j.spring.annotations;

import com.github.xiaoymin.knife4j.spring.configuration.MarkdownFileConfiguration;
import com.github.xiaoymin.knife4j.spring.configuration.SecurityConfiguration;
import com.github.xiaoymin.knife4j.spring.configuration.SwaggerBootstrapUIConfiguration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

/**
 * Enable SwaggerBootstrapUi enhanced annotation and use @EnableSwagger2 annotation together.
 *
 * inlude:
 * <ul>
 *     <li>Interface sorting </li>
 *     <li>Interface document download  (word)</li>
 * </ul>
 *
 * This annotation has been deprecated since 2.0.0,please use {@link EnableKnife4j} replace it,and it will be removed in a later release.
 *
 * @since 1.8.5
 */
@Deprecated
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Documented
@Import({SwaggerBootstrapUIConfiguration.class, SecurityConfiguration.class, MarkdownFileConfiguration.class})
public @interface EnableSwaggerBootstrapUi {


}
