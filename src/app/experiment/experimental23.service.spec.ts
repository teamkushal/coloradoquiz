import { TestBed } from '@angular/core/testing';

import { Experimental23Service } from './experimental23.service';

describe('Experimental23Service', () => {
  let service: Experimental23Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental23Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
