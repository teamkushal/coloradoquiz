import { TestBed } from '@angular/core/testing';

import { Experimental1414Service } from './experimental1414.service';

describe('Experimental1414Service', () => {
  let service: Experimental1414Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1414Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
