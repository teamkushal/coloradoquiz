import { TestBed } from '@angular/core/testing';

import { Experimental1923Service } from './experimental1923.service';

describe('Experimental1923Service', () => {
  let service: Experimental1923Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1923Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
