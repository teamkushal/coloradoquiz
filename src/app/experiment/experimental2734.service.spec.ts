import { TestBed } from '@angular/core/testing';

import { Experimental2734Service } from './experimental2734.service';

describe('Experimental2734Service', () => {
  let service: Experimental2734Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2734Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
