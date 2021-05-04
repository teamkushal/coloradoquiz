import { TestBed } from '@angular/core/testing';

import { Experimental705Service } from './experimental705.service';

describe('Experimental705Service', () => {
  let service: Experimental705Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental705Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
