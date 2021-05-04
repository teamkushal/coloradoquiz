import { TestBed } from '@angular/core/testing';

import { Experimental771Service } from './experimental771.service';

describe('Experimental771Service', () => {
  let service: Experimental771Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental771Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
