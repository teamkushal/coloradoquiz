import { TestBed } from '@angular/core/testing';

import { Experimental2195Service } from './experimental2195.service';

describe('Experimental2195Service', () => {
  let service: Experimental2195Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2195Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
