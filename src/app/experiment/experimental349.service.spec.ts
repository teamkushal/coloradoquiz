import { TestBed } from '@angular/core/testing';

import { Experimental349Service } from './experimental349.service';

describe('Experimental349Service', () => {
  let service: Experimental349Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental349Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
