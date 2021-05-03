import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent682Component } from './test-component682.component';

describe('TestComponent682Component', () => {
  let component: TestComponent682Component;
  let fixture: ComponentFixture<TestComponent682Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent682Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
