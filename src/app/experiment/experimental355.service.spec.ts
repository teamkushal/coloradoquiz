import { TestBed } from '@angular/core/testing';

import { Experimental355Service } from './experimental355.service';

describe('Experimental355Service', () => {
  let service: Experimental355Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental355Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
