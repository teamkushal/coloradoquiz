import { TestBed } from '@angular/core/testing';

import { Experimental923Service } from './experimental923.service';

describe('Experimental923Service', () => {
  let service: Experimental923Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental923Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
