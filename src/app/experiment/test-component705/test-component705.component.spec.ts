import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent705Component } from './test-component705.component';

describe('TestComponent705Component', () => {
  let component: TestComponent705Component;
  let fixture: ComponentFixture<TestComponent705Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent705Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
