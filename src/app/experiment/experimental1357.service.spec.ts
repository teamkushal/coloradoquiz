import { TestBed } from '@angular/core/testing';

import { Experimental1357Service } from './experimental1357.service';

describe('Experimental1357Service', () => {
  let service: Experimental1357Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1357Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
