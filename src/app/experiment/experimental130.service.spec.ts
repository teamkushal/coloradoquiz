import { TestBed } from '@angular/core/testing';

import { Experimental130Service } from './experimental130.service';

describe('Experimental130Service', () => {
  let service: Experimental130Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental130Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
