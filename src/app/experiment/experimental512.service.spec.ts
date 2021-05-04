import { TestBed } from '@angular/core/testing';

import { Experimental512Service } from './experimental512.service';

describe('Experimental512Service', () => {
  let service: Experimental512Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental512Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
