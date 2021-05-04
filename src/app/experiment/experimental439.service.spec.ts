import { TestBed } from '@angular/core/testing';

import { Experimental439Service } from './experimental439.service';

describe('Experimental439Service', () => {
  let service: Experimental439Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental439Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
