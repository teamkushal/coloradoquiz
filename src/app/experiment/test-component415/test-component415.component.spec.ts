import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent415Component } from './test-component415.component';

describe('TestComponent415Component', () => {
  let component: TestComponent415Component;
  let fixture: ComponentFixture<TestComponent415Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent415Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
