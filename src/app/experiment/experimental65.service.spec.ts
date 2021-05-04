import { TestBed } from '@angular/core/testing';

import { Experimental65Service } from './experimental65.service';

describe('Experimental65Service', () => {
  let service: Experimental65Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental65Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
