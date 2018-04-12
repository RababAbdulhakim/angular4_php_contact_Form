import { TestBed, inject } from '@angular/core/testing';

import { HandleMailsService } from './handle-mails.service';

describe('HandleMailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleMailsService]
    });
  });

  it('should be created', inject([HandleMailsService], (service: HandleMailsService) => {
    expect(service).toBeTruthy();
  }));
});
