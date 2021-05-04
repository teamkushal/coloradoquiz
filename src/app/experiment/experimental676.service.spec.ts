import { TestBed } from '@angular/core/testing';

import { Experimental676Service } from './experimental676.service';

describe('Experimental676Service', () => {
  let service: Experimental676Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental676Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
