import { TestBed } from '@angular/core/testing';

import { Experimental685Service } from './experimental685.service';

describe('Experimental685Service', () => {
  let service: Experimental685Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental685Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
