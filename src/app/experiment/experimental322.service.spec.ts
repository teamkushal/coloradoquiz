import { TestBed } from '@angular/core/testing';

import { Experimental322Service } from './experimental322.service';

describe('Experimental322Service', () => {
  let service: Experimental322Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental322Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
