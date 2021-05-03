import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent492Component } from './test-component492.component';

describe('TestComponent492Component', () => {
  let component: TestComponent492Component;
  let fixture: ComponentFixture<TestComponent492Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent492Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
