import { TestBed } from '@angular/core/testing';

import { ArticleRegistrationService } from './article-registration.service';

describe('ArticleRegistrationService', () => {
  let service: ArticleRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
