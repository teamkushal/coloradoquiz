import { TestBed } from '@angular/core/testing';

import { Experimental766Service } from './experimental766.service';

describe('Experimental766Service', () => {
  let service: Experimental766Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental766Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
