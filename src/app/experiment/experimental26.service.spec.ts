import { TestBed } from '@angular/core/testing';

import { Experimental26Service } from './experimental26.service';

describe('Experimental26Service', () => {
  let service: Experimental26Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental26Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
