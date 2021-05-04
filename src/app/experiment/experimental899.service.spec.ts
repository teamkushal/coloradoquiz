import { TestBed } from '@angular/core/testing';

import { Experimental899Service } from './experimental899.service';

describe('Experimental899Service', () => {
  let service: Experimental899Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental899Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
