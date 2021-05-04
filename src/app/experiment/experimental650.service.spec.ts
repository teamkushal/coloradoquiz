import { TestBed } from '@angular/core/testing';

import { Experimental650Service } from './experimental650.service';

describe('Experimental650Service', () => {
  let service: Experimental650Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental650Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
