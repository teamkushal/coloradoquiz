import { TestBed } from '@angular/core/testing';

import { Experimental161Service } from './experimental161.service';

describe('Experimental161Service', () => {
  let service: Experimental161Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental161Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
