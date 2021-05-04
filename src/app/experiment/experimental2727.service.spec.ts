import { TestBed } from '@angular/core/testing';

import { Experimental2727Service } from './experimental2727.service';

describe('Experimental2727Service', () => {
  let service: Experimental2727Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2727Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
